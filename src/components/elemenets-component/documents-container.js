import React, { useState } from "react";
import InfoCard from "./card-container-component";
import documentsData from "../../documents-data";

export default function DocsCon() {
  const [documents, setDocuments] = useState(documentsData);

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-slate-100 mt-10">
        here are a few documents , click on any of them to read more
      </h1>
      <section className="w-full p-2 flex justify-evenly items-start flex-wrap  mt-2">
        {documents.map((document) => {
          return <InfoCard key={document.id} {...document}></InfoCard>;
        })}
      </section>
    </>
  );
}
