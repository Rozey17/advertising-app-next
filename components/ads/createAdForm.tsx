import { useCreateAdMutation, Ad, CreateAdInput } from "@apollo";
import { Formik, Form, Field } from "formik";
import { string, object } from "yup";
import Link from "next/link";
import { ChangeEvent, FC } from "react";
import { useRouter } from "next/router";
const initialValues: CreateAdInput = {
  title: "",
  description: "",
  adSubCategoryID: "",
  image: "",
  contact: "",
};

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

const CreateAdForm: FC = () => {
  const [createAd] = useCreateAdMutation();
  const router = useRouter();
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
    contact: string().matches(phoneRegEx, "Numéro de téléphone invalide"),
  });

  return (
    <Formik<CreateAdInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input) => {
        try {
          const variables = { input };
          const { data } = await createAd({
            variables,
          });
          router.push(`/offres/${data.createAd.id}`);
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({
        handleChange,
        setFieldValue,
        values,
        isValid,
        dirty,
        submitForm,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="justify-center text-center mt-4 ">
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
              PUBLIER UNE ANNONCE
            </div>

            <br />
            <label>Titre</label>
            <div>
              <Field
                className="focus:outline-none"
                id="ad-title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              {touched.title && errors.title && (
                <div className="text-red-500">{errors.title}</div>
              )}
            </div>
            <div style={{ width: 205, margin: "auto", marginBottom: "15px" }}>
              <label>Catégories</label>
              <select
                className="focus:outline-none"
                id="adSubCategory"
                name="adSubCategoryID"
                value={values.adSubCategoryID}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />

                <optgroup label="Véhicules" />

                <option value={"066b9125-9d91-4020-8091-6e2c9835a3cb"}>
                  Motos
                </option>
                <option value={"df4998d5-2baf-4f4c-9836-40a228356eb8"}>
                  Vélos
                </option>
                <option value={"8b50b839-afe0-41c9-807c-eeff6b9ca709"}>
                  Voitures
                </option>
                <optgroup label="Evènements" />

                <option value={"caa4ec43-3040-4246-bf4c-798c5fcade0e"}>
                  Théâtre
                </option>
                <option value={"f75bd577-74a6-4fe6-a8c4-7cc188e091d0"}>
                  Spectacles
                </option>
                <option value={"77dd219b-fe80-4a4a-82bf-df1782e2bff1"}>
                  Soirées
                </option>
                <option value={"4cc9fa3e-adb3-4e89-8a48-d3a6c3f4a2f9"}>
                  Expositions, Salons
                </option>
                <optgroup label="Immobilier" />

                <option value={"dd563e29-77f8-4a73-a0d4-f5dcff9f3546"}>
                  Appartements, Lofts, Duplex
                </option>
                <option value={"f241cb61-fec4-4cff-8a02-ec0315754b41"}>
                  Bureaux
                </option>
                <option value={"a3da30fa-b70c-4a2d-b590-9c5c74048bb1"}>
                  Colocation
                </option>
                <option value={"3c181f77-3b7e-4c0f-b28a-1e70998afb5f"}>
                  Autres
                </option>
                <optgroup label="A Vendre" />

                <option value={"a7d1295c-19d7-4216-a826-9affe9bb55d5"}>
                  Bébés, Enfants
                </option>
                <option value={"9b3c82f9-1969-4001-90d9-e4aca828725a"}>
                  Electroménager
                </option>
                <optgroup label="Offres d'Emploi" />

                <option value={"9815c7b4-3adf-437b-b185-a1ccf516782e"}>
                  Achats, Logistique
                </option>
                <option value={"438b4f60-9b26-45af-b4e1-5a129c253d90"}>
                  Job Etudiant
                </option>
                <option value={"5d26d488-b5d7-4fa8-a1ee-71accae15378"}>
                  Informatique, Internet
                </option>
                <option value={"fa64bb8d-8dcc-4b46-94b7-8311e734fc81"}>
                  Secteur public
                </option>
                <option value={"14bfc454-22f6-4ebd-82a7-43086853a054"}>
                  Stages
                </option>
                <optgroup label="Services" />

                <option value={"1cf29a07-e00b-4111-a50b-2669b2503440"}>
                  Coiffure
                </option>
                <option value={"2bb4497b-52d9-4fd6-a644-c434e7c03f9a"}>
                  Aide à domicile
                </option>
                <option value={"16e42e27-af3f-4415-9e67-9ad06115dc6b"}>
                  Sécurité, Gardiennage
                </option>
              </select>
              {touched.adSubCategoryID && errors.adSubCategoryID && (
                <div className="text-red-500">{errors.adSubCategoryID}</div>
              )}
            </div>
            <label>Description</label>
            <div>
              <textarea
                className="focus:outline-none"
                id="ad-description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              {touched.description && errors.description && (
                <div className="text-red-500">{errors.description}</div>
              )}
            </div>
            <label>Contact</label>
            <div>
              <Field
                className="focus:outline-none"
                id="ad-contact"
                name="contact"
                value={values.contact}
                onChange={handleChange}
              />
              {touched.contact && errors.contact && (
                <div className="text-red-500">{errors.contact}</div>
              )}
            </div>
            <div className="cursor-pointer m-auto my-3">
              <label htmlFor="image">Ajouter une image</label>

              <input
                className="focus:outline-none"
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
            <div>
              <button
                className="text-white bg-blue-600 hover:bg-blue-700 p-2 uppercase rounded-md shadow-md"
                type="submit"
                disabled={!(isValid && dirty)}
              >
                Publier
              </button>{" "}
              <button className="text-white bg-red-600 hover:bg-red-700 p-2 uppercase rounded-md shadow-md">
                <Link href="/">Annuler</Link>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { CreateAdForm };
