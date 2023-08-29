import React, { useState } from "react";
import InfoCard from "./card-container-component";

export default function CardsCon() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      img: "./images/js-picture.jpg",
      title: "Javascript ? Like Java ?",
      description:
        "Lorem ipsum, dolor siting elit.diandae, laboriosam facere. Itaque minima beatae nostrum nisi corporis esse maxime, quia laboriosam magni aut obcaecati aliasci enim, architecto dolores!",
    },
    {
      id: 2,
      img: "./images/tailwind.png",
      title: "Responsive ; with tailwind css",
      description:
        "Lorem ipsum, dolsecdipisicing elit. Repudiandae, laboriosam facere. Itaque minima beatae nostrum nisi corporis esse maxime, quia laboriosam mum adipisci enim, architecto dolores!",
    },
    {
      id: 3,
      img: "./images/og-home.png",
      title: "Unic ; just like React",
      description:
        "Lorem ipsum, dols elit. Repudiandae, laboriosam facere. Itaque minima beatae nostrum nisi corporis esse maxime,riosam magni aut obcaecatolorum adipisci enim, architecto dolores!",
    },
  ]);

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-slate-100 mt-10">here's some documents for you to get more familier with this field</h1>
      <section className="w-full p-2 flex justify-evenly items-center  mt-2">
        {documents.map((document) => {
          return <InfoCard key={document.id} {...document}></InfoCard>;
        })}
      </section>
    </>
  );
}
