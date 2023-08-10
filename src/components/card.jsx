// import React, { Component, h1, h2 } from 'react';

export default function card(data) {
  return (
    <div className='flex p-5 m-5 font-sans '>
      <img src={data.image} className='h-44 w-36 '></img>
      <div className='flex flex-col pl-8 pr-4 text-lg'>
        <h2 className='text-2xl font-bold mt-2'>{data.Location} -
          <span className='underline text-lg font-light cursor-pointer mt-2 px-3'>View on google Map</span>
        </h2>
        <h1 className='text-3xl py-2'>{data.place}</h1>
        <h2 className='mt-2'>{data.dateTo} - {data.datefrom}</h2>
        <h2 className='text-slate-500 w-3/4 mt-2'>
          {data.about}
        </h2>
      </div>
    </div>
  )
}