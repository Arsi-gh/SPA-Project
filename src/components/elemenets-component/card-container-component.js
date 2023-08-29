import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoCard (props) {
  if (props.link){
    return (
      <Link to={`/documents/${props.id}`} className='cursor-pointer max-w-xs bg-slate-600 text-slate-100 mb-12 mt-10 flex flex-col items-center p-3 gap-3 rounded-md'>
          <h3 className='font-bold text-lg'>{props.title}</h3>
          <img className='w-full rounded-md' src={props.img} alt="" />
          <p className='text-justify'>{props.description}</p>
      </Link>
    )
  } else {
    return (
      <section className='cursor-pointer max-w-xs bg-slate-600 text-slate-100 mb-12 mt-10 flex flex-col items-center p-3 gap-3 rounded-md'>
          <h3 className='font-bold text-lg'>{props.title}</h3>
          <img className='w-full rounded-md' src={props.img} alt="" />
          <p className='text-justify'>{props.description}</p>
      </section>
    )
  }
}
