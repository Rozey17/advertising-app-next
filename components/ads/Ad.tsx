import React from "react";
import moment from "moment";
import Link from "next/link";
import { Ad } from "@apollo";
interface adProps {
  ad: Ad;
}

const Advertising = ({ ad }: adProps) => {
  const defaultPhotoUrl =
    "https://www.labaleine.fr/sites/default/files/image-not-found.jpg";
  const dateToStore = ad.createdAt;
  moment.locale("fr");
  const momentDate = moment(dateToStore).format("LL");

  return (
    <Link href={`/offres/${ad.id}`}>
      <div className="cursor-pointer flex justify-center mb-3 bg-white w-full md:w-1/3 h-40 m-auto p-4 hover:shadow-md rounded-lg">
        <img
          className="h-full w-1/3 mr-6"
          src={ad.image ? ad.image : defaultPhotoUrl}
        />
        <div>
          <span className="hover:text-yellow-500 font-bold">{ad.title}</span>
          <br />
          <a>Publié le: {momentDate}</a>
          <p>{ad.description}</p>
        </div>
      </div>
    </Link>
  );
};

export { Advertising };
