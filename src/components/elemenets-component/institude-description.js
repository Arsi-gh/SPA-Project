import React from 'react'

export default function InstitudeDesc() {
  return (
    <section className='w-full flex items-center justify-center mt-8 mb-20'>
        <div className='w-1/2 flex flex-col p-4 bg-gradient-to-r from-slate-800  to-slate-900 mt-16  mb-16 rounded-xl'>
            <h3 className='text-xl text-slate-50 font-bold m-4'>Every time . everywhere with Nigma</h3>
            <p className='m-4 text-slate-50 text-justify w-[24rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima dolorum accusamus dolor provident repudiandae fuga ad temporibus enim illo ex, amet soluta non pariatur? Saepe fugiat veritatis soluta similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos laboriosam consectetur sapiente corrupti blanditiis voluptatum et enim sint. Dolorum, laudantium corporis inventore quisquam alias voluptatibus voluptate mollitia fugiat libero!</p>
        </div>
        <div className='w-1/6 h-[26rem] bg-slate-500 rounded-xl absolute right-[30%] bg-gradient-to-l from-slate-600 to-slate-700 flex items-center justify-center'>
            <img className='w-1/2' src="./images/code.png" alt="" />
        </div>
    </section>
  )
}
