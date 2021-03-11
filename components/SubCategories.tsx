import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  ListAdCategorysQueryVariables,
  ListAdSubCategorysQueryVariables,
  useListAdCategorysQuery,
  useListAdSubCategorysLazyQuery,
  useListAdSubCategorysQuery,
} from 'src';
import Link from 'next/link';
import slugify from 'slugify';
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
          <MenuItem>
            <Link
              href={`/${x.id}`}
              as={`/offres/${slugify(x.name, { lower: true })}`}
            >
              <a>{x.name}</a>
            </Link>
          </MenuItem>
        </ul>
      ))}
    </div>
  );
};

export { SubCategories };
