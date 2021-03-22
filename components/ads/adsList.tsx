import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useListAdsQuery } from 'src';
import { Advertising } from './Ad';
import styles from './Ad.module.css';
import { Typography } from '@material-ui/core';

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

  const adsPerPage = 6;
  const pagesVisited = pageNumber * adsPerPage;
  const pageCount = Math.ceil(ads.length / adsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className={styles.result}>
        <Typography>Résultat ({ads.length})</Typography>
      </div>
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
