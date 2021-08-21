import { ListAdCategorysQueryVariables, useListAdCategorysQuery } from 'src';
import { AdCategory } from "./AdCategory";

const AdCategoriesList = () => {
  const variables: ListAdCategorysQueryVariables = { limit: 100 };

  const { data, loading } = useListAdCategorysQuery({
    variables,
  });

  const AdCategories =
    data && data.listAdCategorys ? data.listAdCategorys.items : [];

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-6 justify-center mt-6">
      {AdCategories.map((x) => (
        <AdCategory name={x.name} adCategoryID={x.id} key={x.id} />
      ))}
    </div>
  );
};

export { AdCategoriesList };
