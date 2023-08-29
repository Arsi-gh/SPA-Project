import React from 'react'

export default function JourneyCon() {
  return (
    <>
    <h3 className='text-center text-3xl font-bold text-slate-50 mt-6'>Start your journey right now</h3>
    <section className='w-full h-72 flex justify-center items-center'>
        <div className='flex gap-x-8 relative'>
                <div className='flex absolute left-16 -top-[15px]'>
                <div className='w-44 h-44 rounded-full border-t-[12px] border-slate-500'></div>
                <div className='w-44 h-44 rounded-full border-b-[12px] border-slate-500'></div>
                <div className='w-44 h-44 rounded-full border-t-[12px] border-slate-500'></div>
                <div className='w-44 h-44 rounded-full border-b-[12px] border-slate-500'></div>
                <div className='w-44 h-44 rounded-full border-t-[12px] border-slate-500'></div>
            </div>
            <div className='flex z-10 gap-8'>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>HTML and CSS</p>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>Javascript</p>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>React and Redux</p>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>CSS frameworks</p>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>Git and Github</p>
                <p className='bg-slate-600 text-slate-50 border-4 border-slate-400 w-36 h-36 rounded-full flex items-center justify-center'>Keep Going...</p>
            </div>
        </div>
    </section>
    </>

  )
}
