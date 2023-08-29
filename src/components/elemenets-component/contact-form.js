import React from 'react'

export default function ContactForm() {
  return (
    <section className="w-full flex mt-2 p-10 px-60 text-slate-50 ">
        <div className='w-1/2 flex flex-col gap-4'>
            <label htmlFor="user-name">Please write down your name</label>
            <input className='text-slate-800 p-2 rounded-sm placeholder:text-slate-600 bg-slate-100 border-none w-1/2 focus:outline-1  outline-offset-4 outline-slate-200' type="text" id='user-name' placeholder='example : John'/>
            <label htmlFor="user-lastname">Please write down your last name</label>
            <input className='text-slate-800 p-2 rounded-sm placeholder:text-slate-600 bg-slate-100 border-none w-1/2 focus:outline-1  outline-offset-4 outline-slate-200' type="text" id='user-lastname' placeholder='example : Cruise'/>
            <label htmlFor="user-number">Please write down your phone number</label>
            <input className='text-slate-800 p-2 rounded-sm placeholder:text-slate-600 bg-slate-100 border-none w-1/2 focus:outline-1  outline-offset-4 outline-slate-200' type="number" id="user-number" placeholder='example : +121 8959621'/>
            <label htmlFor="user-email">Please write down your email</label>
            <input className='text-slate-800 p-2 rounded-sm placeholder:text-slate-600 bg-slate-100 border-none w-1/2 focus:outline-1  outline-offset-4 outline-slate-200' type="email" id="user-email" placeholder='example : john@gmail.com' />
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
            <label htmlFor="user-title-req">Write down your request title down here</label>
            <input className=' text-slate-800 p-2 rounded-sm placeholder:text-slate-600 bg-slate-100 border-none w-1/2 focus:outline-1  outline-offset-4 outline-slate-200' placeholder='example : website error' type="text" id="user-title-req" />
            <label htmlFor="user-text-req">Write your request :</label>
            <textarea placeholder='here ...' id="user-text-req" className='placeholder:text-slate-600 h-full bg-slate-100 rounded-sm p-4 text-slate-700' name=""></textarea>
            <button className='p-2 rounded-sm hover:bg-slate-300 bg-slate-100 text-slate-800'>Submit your request</button>
        </div>
    </section>
  )
}
