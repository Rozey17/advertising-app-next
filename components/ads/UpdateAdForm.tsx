import { useRouter } from 'next/dist/client/router';
import {
  GetAdQueryVariables,
  ListAdsQuery,
  UpdateAdInput,
  useGetAdQuery,
  useUpdateAdMutation,
} from 'src';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import {
  Button,
  Modal,
  TextField,
  Dialog,
  Card,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import { produce } from 'immer';
import { ChangeEvent, useState } from 'react';
import styles from './Ad.module.css';
import { listAds } from 'src/graphql/queries';
import gql from 'graphql-tag';
import { useAuth } from 'components/auth/useAuth';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const UpdateAdForm = () => {
  const [updateAd] = useUpdateAdMutation();
  const router = useRouter();
  const { user } = useAuth();
  const id = router.query.id as string;

  const variables: GetAdQueryVariables = {
    id,
  };

  const { data } = useGetAdQuery({
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (data && data.getAd) {
    const ad = data.getAd;
    return (
      <Formik<UpdateAdInput>
        initialValues={{
          id: ad.id,
          adSubCategoryID: ad.adSubCategoryID,
          description: ad.description,
          image: ad.image,
          title: ad.title,
        }}
        onSubmit={async (input) => {
          try {
            const { data } = await updateAd({
              variables: { input },
            });
            router.push(`/offres/${data.updateAd.id}`);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {({
          isSubmitting,
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <Typography color='primary'>
                <EditTwoToneIcon fontSize='small' />

                <b>MODIFIER UNE ANNONCE</b>
              </Typography>
              <br />
              <div>
                <TextField
                  id='ad-title'
                  name='title'
                  label='Titre'
                  // fullWidth
                  variant='outlined'
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id='ad-description'
                  name='description'
                  label='Description'
                  // fullWidth
                  variant='outlined'
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='image'>
                  <Typography>Ajouter une image</Typography>
                </label>

                <input
                  id='image'
                  name='image'
                  type='file'
                  accept='image/*'
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('image', event.currentTarget.files[0]);
                  }}
                />
              </div>
              <div>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  type='submit'
                >
                  MODIFIER
                </Button>{' '}
                <Link href={`/offres/${ad.id}`}>
                  <Button variant='contained' color='secondary'>
                    ANNULER
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  } else {
    return null;
  }
};
