import React from "react";
import {
  ListAdSubCategorysQueryVariables,
  useListAdSubCategorysQuery,
} from "src";
import Link from "next/link";
import slugify from "slugify";
interface Props {
  adCategoryID: string;
}

const SubCategories = ({ adCategoryID }: Props) => {
  const variables: ListAdSubCategorysQueryVariables = {
    filter:
      adCategoryID && adCategoryID.trim()
        ? {
            or: [{ adCategoryID: { contains: adCategoryID } }],
          }
        : null,
    limit: 100,
  };

  const { data, loading } = useListAdSubCategorysQuery({
    variables,
  });
  if (!data || loading) {
    return <pre>Loading ...</pre>;
  }
  const AdSubCategories =
    data && data.listAdSubCategorys ? data.listAdSubCategorys.items : [];

  return (
    <div>
      {AdSubCategories.map((x) => (
        <ul key={x.id}>
          <menuitem>
            <Link
              href={`/${x.id}`}
              as={`/offres/${slugify(x.name, { lower: true })}`}
            >
              <a>{x.name}</a>
            </Link>
          </menuitem>
        </ul>
      ))}
    </div>
  );
};

export { SubCategories };
