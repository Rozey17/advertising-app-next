import { Layout } from 'components/Layout/Layout';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import { AdsList } from 'components/ads/AdsList';
import Categories from './categories';
import { AdCategoriesList } from 'components/adsCategories/AdCategoriesList';
export default function Home() {
  return (
    <div>
      <Layout>
        <Link href='/create-ad'>
          <Button variant='outlined'>CREATE AN AD</Button>
        </Link>
        <Link href='/createAdCategory'>
          <Button variant='outlined'>CREATE AN AD CATEGORY</Button>
        </Link>
        <Link href='/createAdSubCategory'>
          <Button variant='outlined'>CREATE AN AD SUBCATEGORY</Button>
        </Link>
      </Layout>
      <AdCategoriesList />
    </div>
  );
}
