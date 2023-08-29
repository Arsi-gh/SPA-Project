import React , {useState} from "react";

export default function AcademyDesc() {

  const [about , setAbout] = useState([
    {id : 1 , title : 'Our history' , desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aspernatur ducimus tenetur corporis labore, blanditiis assumenda alias quibusdam nesciunt repudiandae facere, perspiciatis molestiae voluptates perferendis itaque a saepe harum est! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facilis, odit nulla voluptatibus natus voluptate maxime. Ut, exercitationem doloribus sequi laudantium ducimus itaque accusantium velit odio facilis eaque quaerat. Obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ad, error veritatis dolorem neque iste porro facere quae molestias blanditiis modi quaerat vitae eaque! Praesentium sunt laudantium voluptas quos. Repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, velit rem. Natus quidem maiores, quas eius porro sed molestias odit aspernatur cupiditate. Assumenda in ipsum exercitationem ut nihil sint laboriosam.'},
    {id : 2 , title : 'Why we are here ?' , desc : 'Lorem ipsum dotur cumenpudiandae facere, perspiciatis molestiae voluptates perferendis itaque a saepe harum est! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facilis, odit nulla voluptatibus natus voluptate maxime. Ut, exercitationem doloribus sequi laudantium ducimus itaque accusantium velit odio facilis eaque quaerat. Obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ad, error veritatis dolorem neque iste porro facere quae molestias blanditiis modi quaerat vitae eaque! Praesentium sunt laudantium voluptas quos. Repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, velit rem. Natus quidem maiores, quas eius porro sed molestias odit aspernatur cupiditate. Assumenda in ipsum exercitationem ut nihil sint laboriosam.'},
    {id : 3 , title : 'Where we are going ahead ?' , desc : 'Lorem ipsum dolsicingducimuoris labore, blanditiis assumenda alias quibusdam nesciunt repudiandae facere, perspiciatis molestiae voluptates perferendis itaque a saepe harum est! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facilis, odit nulla voluptatibus natus voluptate maxime. Ut, exercitationem doloribus sequi laudantium ducimus itaque accusantium velit odio facilis eaque quaerat. Obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ad, error veritatis dolorem neque iste porro facere quae molestias blanditiis modi quaerat vitae eaque! Praesentium sunt laudantium voluptas quos. Repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, velit rem. Natus quidem maiores, quas eius porro sed molestias odit aspernatur cupiditate. Assumenda in ipsum exercitationem ut nihil sint laboriosam.'},
  ])  

  const [currentAbout , setCurrentAbout] = useState(0)

  return (
    <>
    <h2 className="text-center text-3xl font-bold text-slate-100">Get more familiar with us</h2>
    <section className="w-full flex justify-around items-center p-10 px-20 gap-10">
        <div className="w-1/2 mr-32  bg-gradient-to-r from-slate-900  to-slate-700 p-8 rounded-lg pr-24 text-slate-50">
            <h2 className="font-bold text-lg">{about[currentAbout].title}</h2>
            <p className="mt-4">{about[currentAbout].desc}</p>
        </div>
        <div className="absolute w-64  bg-gradient-to-r from-slate-500  to-slate-800  flex flex-col text-slate-50 rounded-lg right-80 overflow-hidden">
            {about.map((obj) => {
                return (
                    <button key={obj.id} onClick={() => setCurrentAbout(obj.id - 1)} className="w-full p-4 hover:bg-slate-600 focus:bg-slate-600 font-bold">{obj.title}</button>
                )
            })}
        </div>
    </section>
    </>
  );
}
