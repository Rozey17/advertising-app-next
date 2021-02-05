import {
  useCreateAdMutation,
  Ad,
  CreateAdInput,
  ListAdCategorysQueryVariables,
  useListAdCategorysQuery,
  ListAdSubCategorysQueryVariables,
  useListAdSubCategorysQuery,
} from '@apollo';
import {
  Button,
  Select,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Ad.module.css';

const initialValues: CreateAdInput = {
  title: '',
  adCategoryID: '',
  description: '',
  adSubCategoryID: '',
};

// const variables: ListAdCategorysQueryVariables = { limit: 100 };

// const { data } = useListAdCategorysQuery({
//   variables,
// });

// const AdCategories =
//   data && data.listAdCategorys ? data.listAdCategorys.items : [];

const CreateAdForm: FC = () => {
  const [createAd] = useCreateAdMutation();
  const validationSchema = object<Ad>().shape({
    title: string()
      .required('Le nom est obligatoire')
      .min(2, 'Le nom trop court')
      .max(50, 'Le nom trop long'),
    adCategoryID: string().required().min(1).max(50),
    description: string().required().min(10).max(50),
  });
  const variables: ListAdSubCategorysQueryVariables = {
    limit: 100,
  };

  const { data: data2 } = useListAdSubCategorysQuery({
    variables,
  });

  const AdSubCategories =
    data2 && data2.listAdSubCategorys ? data2.listAdSubCategorys.items : [];
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
          <div className={styles.input}>
            <div className={styles.input}>
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
            </div>

            <div className={styles.input}>
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
            </div>

            {/* <Field
              as={Select}
              id='adCategory'
              name='adCategoryID'
              value={values.adCategoryID}
              onChange={handleChange}
            >
              {AdCategories.map((x) => (
                <MenuItem value={x.name}>{x.name}</MenuItem>
              ))}
            </Field> */}
            <div className={styles.input}>
              <FormControl className={styles.select}>
                <InputLabel id='demo-simple-select-label'>
                  Sous Catégories
                </InputLabel>
                <Field
                  as={Select}
                  id='adSubCategory'
                  name='adSubCategoryID'
                  helperText={
                    touched.adSubCategoryID ? errors.adSubCategoryID : ''
                  }
                  error={
                    touched.adSubCategoryID && Boolean(errors.adSubCategoryID)
                  }
                  label='Ad SubCategory ID'
                  value={values.adSubCategoryID}
                  // onChange={handleChange}
                >
                  {AdSubCategories.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            </div>

            {/* <Field
              as={TextField}
              id='ad-subCategory'
              name='adSubCategoryID'
              helperText={touched.adSubCategoryID ? errors.adSubCategoryID : ''}
              error={touched.adSubCategoryID && Boolean(errors.adSubCategoryID)}
              label='Ad SubCategory ID'
              variant='outlined'
              value={values.adSubCategoryID}
              // onChange={handleChange}
            /> */}
            <div className={styles.input}>
              <Field
                as={TextField}
                id='ad-description'
                name='description'
                helperText={touched.description ? errors.description : ''}
                error={touched.description && Boolean(errors.description)}
                label='Ad Description'
                variant='outlined'
                value={values.description}
                // onChange={handleChange}
              />
            </div>

            <div className={styles.input}>
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
