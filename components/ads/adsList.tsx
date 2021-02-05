import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Advertising } from './Ad';

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
  const { data } = useListAdsQuery({
    variables,
  });

  const Ads = data && data.listAds ? data.listAds.items : [];

  return (
    <div>
      {Ads.map((x) => (
        <Advertising ad={x} key={x.id} />
      ))}
    </div>
  );
};

export { AdsList };
