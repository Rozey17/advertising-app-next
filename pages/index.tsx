import Layout from 'components/Layout/Layout';
import { Button } from '@material-ui/core';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Layout>
        <Link href='/createAd'>
          <Button variant='outlined'>CREATE AD</Button>
        </Link>
      </Layout>
    </div>
  );
}
