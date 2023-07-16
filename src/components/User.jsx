import React from "react";
import { Link } from "react-router-dom";
export default function User({ client }) {
  return (
    <div className='border-2 rounded shadow-slate-400 shadow-sm m-4 mx-auto text-center py-2 px-4 w-fit transition duration-1000 ease hover:scale-105'>
      <img src={client.img} />
      <p className='font-bold italic'>{client.name}</p>
      <Link to={`/UserDescription/${client.id}`}>
        <button className='bg-blue-600 p-1 my-3 rounded transition duration-1000 ease hover:-translate-y-0.5  hover:bg-blue-500'>
          {client.btnMsg}
        </button>
      </Link>
    </div>
  );
}
