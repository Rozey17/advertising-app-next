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
  const { data, loading } = useListAdsQuery({
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <h2>Loading..</h2>;
  }
  if (!data) return <h2>No ad found.</h2>;

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
