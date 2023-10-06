import React from 'react'
import { Link } from 'react-router-dom';

import "../Singlepost/Singlepostcard.css"

const Singlepostcard = (props) => {
  return (
    <div className="single-card-post">
    <div className="img-div">
      <img src={props.blog.CoverImg} alt="card-post-img" className="single-card-post-img" />
      </div>
      <div className="card-post-info">
        <div className="card-post-sub-info">
          <button className='card-post-categ-btn'>{props.blog.Categ}</button>
          <p className='card-post-upl-date'><i>{Date(props.blog.last_Update)}</i></p>
        </div>
        <div className="card-post-analytics">share like comments</div>
      </div>
      <div className="card-post-about">
        <h1 className="card-post-title">{props.blog.Title}</h1>
        <p className="card-post-about-para">{props.blog.Body}</p>
        <button className='read-more-btn'><Link to={"/showblogs/"+props.blog.id}>read more</Link></button>

      </div>
    </div>
  )
}

export default Singlepostcard;