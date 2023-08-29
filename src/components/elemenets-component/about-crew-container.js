import React , {useState} from 'react'
import InfoCard from './card-container-component'

export default function TeamCon() {
  
    const [teamMembers , setTeamMembers] = useState([
        {id : 1 , img : './images/team/man-one.avif' , title : 'Kent C. Dodds' , description : 'Co - Founder'},
        {id : 1 , img : './images/team/man-two.avif' , title : 'Pieter Levels' , description : 'Front-end Team lead'},
        {id : 1 , img : './images/team/man-three.avif' , title : 'Greg Sullivan' , description : 'Back-end Team lead'},
    ])

    return (
    <section className="w-full p-2 flex justify-evenly items-start flex-wrap mt-2">
    {teamMembers.map((member) => {
        return (
            <InfoCard key={member.id} {...member}></InfoCard>
        );
    })}
  </section>
  )
}
