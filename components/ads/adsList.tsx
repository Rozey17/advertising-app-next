import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Ad } from './Ad';

const AdsList = () => {
  const variables: ListAdsQueryVariables = { limit: 100 };

  const { data, loading } = useListAdsQuery({
    variables,
  });

  const Ads = data && data.listAds ? data.listAds.items : [];

  return (
    <div>
      {Ads.map((x) => (
        <Ad title={x.title} categoryName={x.adCategory.name} key={x.id} />
      ))}
    </div>
  );
};

export { AdsList };
