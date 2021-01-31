import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { AdCategory } from './AdCategory';

const AdCategoriesList = () => {
  const variables: ListAdsQueryVariables = { limit: 100 };

  const { data, loading } = useListAdsQuery({
    variables,
  });

  const Ads = data && data.listAds ? data.listAds.items : [];

  return (
    <div>
      {Ads.map((x) => (
        <AdCategory
          title={x.title}
          categoryName={x.adCategory.name}
          key={x.id}
        />
      ))}
    </div>
  );
};

export { AdCategoriesList };
