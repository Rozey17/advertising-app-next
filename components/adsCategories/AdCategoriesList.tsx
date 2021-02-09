import { ListAdCategorysQueryVariables, useListAdCategorysQuery } from 'src';
import { AdCategory } from './AdCategory';
import styles from './AdCategory.module.css';

const AdCategoriesList = () => {
  const variables: ListAdCategorysQueryVariables = { limit: 100 };

  const { data, loading } = useListAdCategorysQuery({
    variables,
  });

  const AdCategories =
    data && data.listAdCategorys ? data.listAdCategorys.items : [];

  return (
    <div className={styles.global}>
      {AdCategories.map((x) => (
        <AdCategory name={x.name} adCategoryID={x.id} key={x.id} />
      ))}
    </div>
  );
};

export { AdCategoriesList };
