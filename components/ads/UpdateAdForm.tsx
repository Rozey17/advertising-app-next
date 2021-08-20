import { useRouter } from 'next/dist/client/router';
import {
  GetAdQueryVariables,
  UpdateAdInput,
  useGetAdQuery,
  useUpdateAdMutation,
} from 'src';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import { Button, TextField, Typography } from '@material-ui/core';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { ChangeEvent } from 'react';
import styles from './Ad.module.css';
import Link from 'next/link';

async function uploadImage(image) {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append('file', image);
  formData.append(
    'upload_preset',
    `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
  );

  const response = await fetch(url, {
    method: 'post',
    body: formData,
  });

  return response.json();
}
const phoneRegEx = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

export const UpdateAdForm = () => {
  const [updateAd] = useUpdateAdMutation();
  const router = useRouter();
  const id = router.query.id as string;
  const validationSchema = object().shape({
    title: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
    adSubCategoryID: string().required('La catégorie est obligatoire'),
    image: string().min(1, 'Le lien trop court'),
    description: string()
      .required('Une description est obligatoire')
      .min(10)
      .max(300),
    contact: string()
      .matches(phoneRegEx, 'Numéro de téléphone invalide')
      .nullable(),
  });
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
          contact: ad.contact,
        }}
        validationSchema={validationSchema}
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
          touched,
          isSubmitting,
          errors,
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
          isValid,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <Typography color="primary">
                <EditTwoToneIcon fontSize="small" />

                <b>MODIFIER UNE ANNONCE</b>
              </Typography>
              <br />
              <div>
                <input
                  id="ad-title"
                  name="title"
                  // helperText={touched.title ? errors.title : ''}
                  // error={touched.title && Boolean(errors.title)}
                  // label='Titre'
                  // variant="outlined"
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  // as={TextField}
                  id="ad-description"
                  name="description"
                  // helperText={touched.description ? errors.description : ''}
                  // error={touched.description && Boolean(errors.description)}
                  // label='Description'
                  // variant="outlined"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  id="ad-contact"
                  name="contact"
                  helperText={touched.contact ? errors.contact : ""}
                  error={touched.contact && Boolean(errors.contact)}
                  label="Contact"
                  variant="outlined"
                  value={values.contact}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="image">
                  <Typography>Ajouter une image</Typography>
                </label>

                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event?.target?.files?.[0]) {
                      const file = event.target.files[0];
                      uploadImage(file).then((res) => {
                        setFieldValue("image", res?.secure_url);
                      });
                    }
                  }}
                />
              </div>
              <div className="mt-2">
                <Button
                  variant="contained"
                  color="primary"
                  // disabled={!(isValid && dirty && isSubmitting)}
                  disabled={isSubmitting && isValid}
                  type="submit"
                >
                  MODIFIER
                </Button>{" "}
                <Link href={`/offres/${ad.id}`}>
                  <Button variant="contained" color="secondary">
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
