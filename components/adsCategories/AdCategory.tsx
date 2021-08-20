import React from "react";
import { AdSubCategoriesList } from "components/adSubcategories/AdSubCategoriesList";

interface Props {
  name: string;
  adCategoryID: string;
}

const AdCategory = ({ name, adCategoryID }: Props) => {
  return (
    <div className=" text-center mb-3">
      <b className="text-green-400 text-lg">{name}</b>

      <AdSubCategoriesList adCategoryID={adCategoryID} />
    </div>
  );
};

export { AdCategory };
