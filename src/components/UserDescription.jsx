import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client } from "./UserInfo";

function UserDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = client.find((cl) => cl.id == id);

  const handleGoBack = () => {
    navigate(-1);
  };
  if (!user) {
    return <div className='user-not-found'>User not found</div>;
  }
  return (
    <div className='description-container'>
      <img className='user-image' src={user.img} alt={user.name} />
      <h2 className='user-name'>{user.name}</h2>
      <p className='desciption-text'>{user.description}</p>
      <button className="go-back" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default UserDescription;
