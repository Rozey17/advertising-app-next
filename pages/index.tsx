import Layout from 'components/Layout/Layout';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import { AdsList } from 'components/ads/AdsList';
export default function Home() {
  return (
    <div>
      <Layout>
        <Link href='/createAd'>
          <Button variant='outlined'>CREATE AD</Button>
        </Link>
        <Link href='/createAdCategory'>
          <Button variant='outlined'>CREATE AD CATEGORY</Button>
        </Link>
      </Layout>
      <AdsList />
    </div>
  );
}
