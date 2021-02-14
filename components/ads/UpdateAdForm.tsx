import { useRouter } from 'next/dist/client/router';
import {
  GetAdQueryVariables,
  UpdateAdInput,
  useGetAdQuery,
  useUpdateAdMutation,
} from 'src';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import { Button, Modal, TextField, Dialog, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styles from './Ad.module.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const UpdateAdForm = () => {
  const [updateAd] = useUpdateAdMutation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            // const variables = { input };
            await updateAd({
              variables: { input },
              optimisticResponse: {
                updateAd: {
                  __typename: 'Ad',
                  id: input.id,
                  adSubCategoryID: ad.adSubCategoryID,
                  createdAt: ad.createdAt,
                  description: input.description,
                  title: input.title,
                  updatedAt: ad.updatedAt,
                  adSubCategory: ad.adSubCategory,
                  image: input.image,
                },
              },
            });
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {({
          isValid,
          isSubmitting,
          handleChange,
          // handleBlur,
          values,
          dirty,
          submitForm,
          handleSubmit,
        }) => (
          <div>
            <Button variant='contained' color='primary' onClick={handleOpen}>
              MODIFIER
            </Button>
            <Modal open={open} onClose={handleClose}>
              <form onSubmit={handleSubmit}>
                <div style={modalStyle} className={classes.paper}>
                  <div className={styles.field}>
                    <TextField
                      id='ad-title'
                      name='title'
                      label='Title'
                      variant='outlined'
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <TextField
                      id='ad-description'
                      name='description'
                      label='Description'
                      variant='outlined'
                      value={values.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <TextField
                      id='ad-image'
                      name='image'
                      label='Image'
                      variant='outlined'
                      value={values.image}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                      type='submit'
                    >
                      MODIFIER
                    </Button>
                    <div className='divider' />
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleClose}
                    >
                      FERMER
                    </Button>
                  </div>
                  <style jsx>{`
                    .divider {
                      width: 10px;
                      height: auto;
                      display: inline-block;
                    }
                  `}</style>
                </div>
              </form>
            </Modal>
          </div>
        )}
      </Formik>
    );
  } else {
    return null;
  }
};
