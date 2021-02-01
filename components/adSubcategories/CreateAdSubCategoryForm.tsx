import {
  CreateAdSubCategoryInput,
  AdSubCategory,
  useCreateAdSubCategoryMutation,
} from '@apollo';
import { Button, Input, Typography, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import Link from 'next/link';
import { FC } from 'react';
import style from 'style.module.css';

const initialValues: CreateAdSubCategoryInput = {
  name: '',
  adCategoryID: '',
};

const CreateAdSubCategoryForm: FC = () => {
  const [createAdSubCategory] = useCreateAdSubCategoryMutation();
  const validationSchema = object<AdSubCategory>().shape({
    name: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
    adCategoryID: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
  });

  return (
    <Formik<CreateAdSubCategoryInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input, { resetForm }) => {
        try {
          const variables = { input };
          await createAdSubCategory({ variables });
        } catch (e) {
          console.log(e);
        }

        resetForm();
      }}
    >
      {({
        isValid,
        handleChange,
        values,
        dirty,
        submitForm,
        errors,
        touched,
      }) => (
        <Form>
          <div>
            <Field
              className='input'
              as={TextField}
              id='adSubCategory-name'
              name='name'
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              label='name'
              variant='outlined'
              value={values.name}
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
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={submitForm}
                disabled={!(isValid && dirty)}
              >
                Enregistrer
              </Button>

              <Link href='/'>
                <Button variant='contained' color='secondary'>
                  <Typography>Annuler</Typography>
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { CreateAdSubCategoryForm };
