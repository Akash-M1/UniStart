import React from "react";
import "./PostsCard.css";
import Card from "./Card";

const PostsCard = ({ title, infos }) => {

  const content =  infos.map((info) => (
    <div className="p-2">
      <a href={info.quora_link}>
        <Card>
          <p className="info-card-text">{ info.content }</p>
        </Card>
      </a>
    </div>
  ));

  return (
    <div className="info-card">
    <div className="info-card-header">
      <h5 className="info-card-title">{ title }</h5>
    </div>
    <div className="info-card-body">
      { content }
    </div>
    </div>
  );
};



export default PostsCard;
