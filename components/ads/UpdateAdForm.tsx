import { useRouter } from 'next/dist/client/router';
import {
  GetAdQueryVariables,
  UpdateAdInput,
  useGetAdQuery,
  useUpdateAdMutation,
} from 'src';
import { Formik, Form, Field } from 'formik';
import { string, object } from "yup";
import { ChangeEvent } from "react";
import styles from "./Ad.module.css";
import Link from "next/link";

async function uploadImage(image) {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append("file", image);
  formData.append(
    "upload_preset",
    `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
  );

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });

  return response.json();
}
const phoneRegEx =
  /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

export const UpdateAdForm = () => {
  const [updateAd] = useUpdateAdMutation();
  const router = useRouter();
  const id = router.query.id as string;
  const validationSchema = object().shape({
    title: string()
      .required("Le nom est obligatoire")
      .min(2, "Le nom trop court")
      .max(50, "Le nom trop long"),
    adSubCategoryID: string().required("La catégorie est obligatoire"),
    image: string().min(1, "Le lien trop court"),
    description: string()
      .required("Une description est obligatoire")
      .min(10)
      .max(300),
    contact: string()
      .matches(phoneRegEx, "Numéro de téléphone invalide")
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
            <div className="justify-center text-center my-3">
              <div className="flex justify-center font-bold text-blue-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                MODIFIER UNE ANNONCE
              </div>

              <br />
              <label>Titre</label>
              <div>
                <input
                  id="ad-title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <label>Description</label>
              <div>
                <input
                  id="ad-description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
              <label>Contact</label>
              <div>
                <Field
                  id="ad-contact"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="image">Ajouter une image</label>
              <div>
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
                <button
                  className="text-white bg-blue-600 hover:bg-blue-700 p-2 uppercase rounded-md shadow-md"
                  disabled={isSubmitting && isValid}
                  type="submit"
                >
                  MODIFIER
                </button>{" "}
                <Link href={`/offres/${ad.id}`}>
                  <button className="text-white bg-red-600 hover:bg-red-700 p-2 uppercase rounded-md shadow-md">
                    ANNULER
                  </button>
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
