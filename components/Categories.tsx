import React from "react";
import { SubCategories } from "./SubCategories";
import { Link } from "@material-ui/core";

interface Props {
  name: string;
  adCategoryID: string;
}

export default function Categories({ name, adCategoryID }: Props) {
  return (
    <div>
      <Link href="#">
        <a>{name}</a>
      </Link>

      <menu>
        <SubCategories adCategoryID={adCategoryID} />
      </menu>
    </div>
  );
}
