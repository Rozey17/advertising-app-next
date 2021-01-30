import { useCreateAdMutation, Ad, CreateAdInput } from '@apollo';
import { Button, TextField, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { string, object } from 'yup';
import Link from 'next/link';
import { FC } from 'react';

const initialValues: CreateAdInput = {
  id: nanoid(),
  title: '',
  adCategoryID: '',
};

const CreateAdForm: FC = () => {
  const [createAd] = useCreateAdMutation();
  // const validationSchema = object<Ad>().shape({
  //   title: string()
  //     .required('Le nom est obligatoire')
  //     .min(2, 'Le nom trop court')
  //     .max(50, 'Le nom trop long'),
  //   adCategoryID: string().required().min(2).max(50),
  // });

  return (
    <>
      <Formik<CreateAdInput>
        initialValues={initialValues}
        // validationSchema={validationSchema}
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
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          dirty,
          submitForm,
        }) => {
          <Form>
            <div>
              <TextField
                id='ad-title'
                label='Ad Title'
                value={values.title}
                onChange={handleChange}
              />

              <TextField
                id='ad-category'
                label='AdCategory'
                value={values.adCategoryID}
                onChange={handleChange}
              />
              {/* <div>
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
              </div> */}
            </div>
          </Form>;
        }}
      </Formik>
    </>
  );
};

export { CreateAdForm };
