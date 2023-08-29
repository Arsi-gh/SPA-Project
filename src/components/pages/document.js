import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DocumentsData from "../../documents-data";

export default function Document() {
  const params = useParams();

  const [documents] = useState(DocumentsData);

  const [currentDocument] = useState(params.documentId);

  const documentStatus = documents[currentDocument - 1] ? true : false;

  window.scrollTo(0 , 0)

  if (documentStatus) {
    return (
      <>
        <section className="w-full flex justify-around items-center p-10 px-20 gap-10">
          <div className="w-1/2 text-slate-50">
            <h2 className="text-xl font-bold mb-5">
              {documents[currentDocument - 1].secondDescription.title}
            </h2>
            <p className="text-justify">
              {documents[currentDocument - 1].secondDescription.text}
            </p>
          </div>
          <img
            src={documents[currentDocument - 1].secondDescription.image}
            alt=""
            className="w-1/2 rounded-xl"
          />
        </section>
        <section className="w-full flex justify-around items-center p-10 px-20 gap-10 mt-4">
          <img
            src={documents[currentDocument - 1].thirdDescription.image}
            alt=""
            className="w-1/2 rounded-xl"
          />
          <div className="w-1/2 text-slate-50">
            <h2 className="text-xl font-bold mb-5">
              {documents[currentDocument - 1].thirdDescription.title}
            </h2>
            <p className="text-justify">
              {documents[currentDocument - 1].thirdDescription.text}
            </p>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <Navigate to='/documents'></Navigate>
    );
  }
}
