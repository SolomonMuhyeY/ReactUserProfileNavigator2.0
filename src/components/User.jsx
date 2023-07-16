import React from "react";
import { Link } from "react-router-dom";
export default function User({ client }) {
  return (
    <div className='border-2 m-4 text-center py-2 px-4 w-fit'>
      <img src={client.img} />
      <p className='font-bold italic'>{client.name}</p>
      <Link to={`/UserDescription/${client.id}`}>
        <button className='bg-blue-600 p-1 my-3 rounded transition duration-500 ease-in-out hover:bg-blue-500'>
          {client.btnMsg}
        </button>
      </Link>
    </div>
  );
}
