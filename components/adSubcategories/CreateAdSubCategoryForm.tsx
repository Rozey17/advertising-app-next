import {
  CreateAdSubCategoryInput,
  AdSubCategory,
  useCreateAdSubCategoryMutation,
  ListAdCategorysQueryVariables,
  useListAdCategorysQuery,
} from '@apollo';
import {
  Button,
  Input,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import Link from 'next/link';
import { FC } from 'react';
import styles from './AdSubCategory.module.css';

const initialValues: CreateAdSubCategoryInput = {
  name: '',
  adCategoryID: '',
};

const CreateAdSubCategoryForm: FC = () => {
  const [createAdSubCategory] = useCreateAdSubCategoryMutation();
  const validationSchema = object().shape({
    name: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
    adCategoryID: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
  });
  const variables: ListAdCategorysQueryVariables = { limit: 100 };

  const { data } = useListAdCategorysQuery({
    variables,
  });

  const AdCategories =
    data && data.listAdCategorys ? data.listAdCategorys.items : [];
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
            <div className={styles.input}>
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
            </div>
            <div className={styles.input}>
              <FormControl className={styles.select}>
                <InputLabel id='adSubCategory'>Catégories</InputLabel>
                <Field
                  as={Select}
                  id='adCategory'
                  name='adCategoryID'
                  // helperText={touched.adCategoryID ? errors.adCategoryID : ''}
                  // error={touched.adCategoryID && Boolean(errors.adCategoryID)}
                  value={values.adCategoryID}
                  onChange={handleChange}
                >
                  {AdCategories.map((x) => (
                    <MenuItem value={x.id}>{x.name}</MenuItem>
                  ))}
                </Field>
              </FormControl>
            </div>

            <div className={styles.button}>
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
