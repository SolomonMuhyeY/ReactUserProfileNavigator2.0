import React from "react";
import { Link } from "react-router-dom";
export default function User({ client }) {
  return (
    <div className='users'>
      <img src={client.img} />
      <p className='user-name'>{client.name}</p>
      <Link to={`/UserDescription/${client.id}`}>
        <button className='btn'>{client.btnMsg}</button>
      </Link>
    </div>
  );
}
