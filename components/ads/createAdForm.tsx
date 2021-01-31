import { useCreateAdMutation, Ad, CreateAdInput } from '@apollo';
import { Button, Input, Typography, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import Link from 'next/link';
import { FC } from 'react';

const initialValues: CreateAdInput = {
  title: '',
  adCategoryID: '',
};

const CreateAdForm: FC = () => {
  const [createAd] = useCreateAdMutation();
  const validationSchema = object<Ad>().shape({
    title: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
    adCategoryID: string().required().min(1).max(50),
  });

  return (
    <Formik<CreateAdInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input, { resetForm }) => {
        try {
          const variables = { input };
          await createAd({ variables });
        } catch (e) {
          console.log(e);
        }

        resetForm();
      }}
    >
      {({
        isValid,
        // isSubmitting,
        handleChange,
        // handleBlur,
        values,
        dirty,
        submitForm,
        errors,
        touched,
      }) => (
        <Form>
          <div>
            <Field
              as={TextField}
              id='ad-title'
              name='title'
              helperText={touched.title ? errors.title : ''}
              error={touched.title && Boolean(errors.title)}
              label='Title'
              variant='outlined'
              value={values.title}
              // onChange={handleChange}
            />

            <Field
              as={TextField}
              id='ad-category'
              name='adCategoryID'
              helperText={touched.adCategoryID ? errors.adCategoryID : ''}
              error={touched.adCategoryID && Boolean(errors.adCategoryID)}
              label='Ad Category ID'
              variant='outlined'
              value={values.adCategoryID}
              // onChange={handleChange}
            />

            {/* <Field
              as={TextField}
              id='id'
              name='categoryID'
              helperText={touched.id ? errors.id : ''}
              error={touched.id && Boolean(errors.id)}
              label='Category ID'
              value={values.id}
              // onChange={handleChange}
            /> */}
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={submitForm}
                disabled={!(isValid && dirty)}
              >
                Enregistrer
              </Button>

              <Button variant='contained' color='secondary'>
                <Link href='/'>
                  <Typography>Annuler</Typography>
                </Link>
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { CreateAdForm };
