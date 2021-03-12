import { useAuth } from './auth/useAuth';
import Link from 'next/link';
interface Props {
  ad: {
    id: string;
  };
}

export const AdNav = ({ ad }: Props) => {
  // const router = useRouter();
  const { user } = useAuth();

  return (
    // <>
    //   {user && (
    <Link href={`/offres/${ad.id}/edit`}>
      <a>Edit</a>{' '}
    </Link>
    //   )}
    // </>
  );
};
