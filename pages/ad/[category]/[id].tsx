// import { GetServerSideProps } from 'next';

// interface AdDetails {
//   ad: Ad;
// }

// export const getServerSideProps: GetServerSideProps<CarDetailsProps> = async (
//   ctx
// ) => {
//   const id = ctx.params.id;
//   const db = await openDB();
//   const car = await db.get<CarModel | undefined>(
//     'SELECT * FROM Car where id = ?',
//     id
//   );
//   return { props: { car: car || null } };
// };
