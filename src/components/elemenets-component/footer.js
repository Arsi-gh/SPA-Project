import React from "react";

export default function Footer() {
  return (
    <footer className="w-full  bg-slate-900  p-10 text-slate-50">
      <section className="flex">
        <div className="w-1/3 p-2">
          <h2 className="text-lg font-bold">Nigma web development academy</h2>
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            dolorum expedita explicabo quo odio fuga? Voluptas amet incidunt
            dolore, eius nam tenetur iste ut quibusdam maxime nulla mollitia?
            Nostrum, sunt.
          </p>
        </div>
        <div className=" flex justify-evenly items-start w-2/3">
          <div className=" ">
            <h3 className="font-bold text-lg">Site Options</h3>
            <ul className="ml-4 p-2 flex flex-col gap-2">
              <li>documents</li>
              <li>about us</li>
              <li>contacts</li>
              <li>blog</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Courses</h3>
            <ul className="ml-4 p-2 flex flex-col gap-2">
              <li>Aloghorithm and data structure</li>
              <li>OOP In javascript</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Our Documents</h3>
            <ul className="ml-4 p-2 flex flex-col gap-2">
              <li>React or Vue ?</li>
              <li>tailwind or bootstrap ?</li>
              <li>Javascript new Update ES13</li>
            </ul>
          </div>
        </div>
      </section>
      <h2 className="mt-12 text-center text-lg">All rights reserved</h2>
      <section className="flex gap-4 items-center justify-center mt-6">
        <img className="cursor-pointer" src="./images/social-media/instagram.png" alt="" />
        <img className="cursor-pointer" src="./images/social-media/telegram.png" alt="" />
        <img className="cursor-pointer" src="./images/social-media/twitter.png" alt="" />
      </section>
    </footer>
  );
}
