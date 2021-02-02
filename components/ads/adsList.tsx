import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Ad } from './Ad';

interface Props {
  adSubCategoryID: string;
}

const AdsList = ({ adSubCategoryID }: Props) => {
  const variables: ListAdsQueryVariables = {
    filter:
      adSubCategoryID && adSubCategoryID.trim()
        ? {
            or: [{ adSubCategoryID: { contains: adSubCategoryID } }],
          }
        : null,
    limit: 100,
  };
  const { data, loading } = useListAdsQuery({
    variables,
  });

  const Ads = data && data.listAds ? data.listAds.items : [];

  return (
    <div>
      {Ads.map((x) => (
        <Ad
          title={x.title}
          description={x.description}
          adSubCategoryID={x.adSubCategoryID}
          key={x.id}
        />
      ))}
    </div>
  );
};

export { AdsList };
