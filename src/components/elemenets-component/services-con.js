import React, { useState } from "react";
import InfoCard from "./card-container-component";

export default function ServiceCon() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Private Course",
      img: "./images/services/private-course.png",
      description:
        "Lorem ipsum, dolor sit amet consuibu consequatur quo pariatur dolores officia excepturi voluptas minima odio atque architecto recusandae!",
    },
    {
      id: 2,
      title: "Web development",
      img: "./images/services/ui-ux.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi amet vel nemo esse. Amet, ad? Explicabo voluptates, quibusdam consequatur quo pariatur dolores officia excepturi voluptas minima odio atque architecto recusandae!",
    },
    {
      id: 3,
      title: "UI / UX design",
      img: "./images/services/web-development.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi amet vel nemo esse. Amet, ad? Explicabo voluptates, quibusdam consequatur quo pariatur dolores officia excepturi voluptas minima odio atque architecto recusandae!",
    },
  ]);

  return (
    <>
      <h2 className="text-center text-3xl font-bold text-slate-100 mt-10">Here's some of our services you see right here down blew</h2>
      <section className="w-full p-2 flex justify-evenly items-start flex-wrap  mt-2">
        {services.map((service) => {
          return <InfoCard key={service.id} {...service}></InfoCard>;
        })}
      </section>
    </>
  );
}
