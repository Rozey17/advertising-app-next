import {
  ListAdCategorysQueryVariables,
  ListAdSubCategorysQueryVariables,
  useListAdCategorysQuery,
  useListAdSubCategorysQuery,
} from 'src';
import Link from 'next/link';
import slugify from 'slugify';
import styles from './AdSubCategory.module.css';
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
    <div className={styles.list}>
      {AdSubCategories.map((x) => (
        <ul key={x.id}>
          <li>
            <Link
              href={`/${x.id}`}
              as={`/offres/${slugify(x.name, { lower: true })}`}
            >
              <a>{x.name}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export { AdSubCategoriesList };
