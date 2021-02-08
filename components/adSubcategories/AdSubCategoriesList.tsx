import {
  ListAdCategorysQueryVariables,
  ListAdSubCategorysQueryVariables,
  useListAdCategorysQuery,
  useListAdSubCategorysQuery,
} from 'src';
import Link from 'next/link';
import slugify from 'slugify';

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
  if (!data || loading) {
    return <pre>Loading ...</pre>;
  }
  const AdSubCategories =
    data && data.listAdSubCategorys ? data.listAdSubCategorys.items : [];

  return (
    <div>
      {AdSubCategories.map((x) => (
        <ul>
          <li>
            <Link href={`/${x.id}`} as={`/${slugify(x.name, { lower: true })}`}>
              {x.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export { AdSubCategoriesList };
