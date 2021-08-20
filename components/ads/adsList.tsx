import { useState } from "react";
import { useListAdsQuery } from "src";
import { Advertising } from "./Ad";

interface Props {
  adSubCategoryID: string;
}

const AdsList = ({ adSubCategoryID }: Props) => {
  const variables = {
    filter:
      adSubCategoryID && adSubCategoryID.trim()
        ? {
            or: [{ adSubCategoryID: { contains: adSubCategoryID } }],
          }
        : null,
    limit: 100,
  };

  const { data, loading, error } = useListAdsQuery({
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const [pageNumber, setPageNumber] = useState(0);
  if (loading || !data) {
    return <h2>Loading...</h2>;
  }

  if (error) return <div>errors</div>;
  const ads = data && data.listAds ? data.listAds.items : [];
  if (ads.length === 0) return <h2>Pas d'annonce trouvée.</h2>;

  return (
    <div>
      <div className="text-center font-bold mb-3">
        <label>Résultat ({ads.length})</label>
      </div>
      {ads.map((x) => (
        <Advertising ad={x} key={x.id} />
      ))}
    </div>
  );
};

export { AdsList };
