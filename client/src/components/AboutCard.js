import React from "react";
import "./PostsCard.css";

const PostsCard = ({ title, geninfos }) => {


  return (
    <div className="info-card">
    <div className="info-card-header">
      <h5 className="info-card-title">{ title }</h5>
    </div>
    <div className="info-card-body">
      { geninfos }
    </div>
    </div>
  );
};



export default PostsCard;