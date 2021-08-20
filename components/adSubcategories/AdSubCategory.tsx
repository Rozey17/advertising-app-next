import React from "react";
import { AdsList } from "components/ads/adsList";

interface Props {
  name: string;
  adSubCategoryID: string;
}

const AdSubCategory = ({ name, adSubCategoryID }: Props) => {
  return (
    <div className="w-60 m-auto bg-white shadow-md">
      <div>
        <a>{name}</a>
        <AdsList adSubCategoryID={adSubCategoryID} />
      </div>
    </div>
  );
};

export { AdSubCategory };
