import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Advertising } from './Ad';
import styles from './Ad.module.css'
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
  const [pageNumber, setPageNumber] = useState(0);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!data) return <h2>No ad found.</h2>;

  const ads = data && data.listAds ? data.listAds.items : [];

  // const [items,setItems]= useState=(ads.slice(0,50))
  const adsPerPage = 10;
  const pagesVisited = pageNumber * adsPerPage;
  const pageCount = Math.ceil(ads.length / adsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {ads.slice(pagesVisited, pagesVisited + adsPerPage).map((x) => (
        <Advertising ad={x} key={x.id} />
      ))}
      <ReactPaginate
        previousLabel={'Précédent'}
        nextLabel={'Suivant'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        // previousLinkClassName={}
        // nextLinkClassName={}
        // disabledClassName={}
        activeClasName={styles.paginationActive}
      />
    </div>
  );
};

export { AdsList };
