import {
  ListAdCategorysQueryVariables,
  ListAdSubCategorysQueryVariables,
  useListAdCategorysQuery,
  useListAdSubCategorysQuery,
} from 'src';
import { AdSubCategory } from './AdSubCategory';
import Link from 'next/link';

interface Props {
  adCategoryID: string;
}

const AdSubCategoriesList = ({ adCategoryID }: Props) => {
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

  const AdSubCategories =
    data && data.listAdSubCategorys ? data.listAdSubCategorys.items : [];

  return (
    <div>
      {AdSubCategories.map((x) => (
        <ul>
          <li>
            <Link href='/adSubCategory' as={`/${x.name.toLowerCase()}`}>
              {x.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export { AdSubCategoriesList };
