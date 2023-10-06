import React from 'react'
import { Link } from 'react-router-dom';

const Singlepost = (props) => {
    console.log("img" +props.blog.CoverImg);
    return (

        <div className="single-post">
            <img src={props.blog.CoverImg} alt="post-img" className="single-post-img" />
            <div className="post-info">
                <div className="post-sub-info">
                    <button className='post-categ-btn'>{props.blog.Categ}</button>
                    <p className='post-upl-date'><i>{Date(props.blog.last_Update)}</i></p>
                </div>
                <div className="post-analytics">share like comments</div>
            </div>
            <div className="post-about">
                <h1 className="post-title">{props.blog.Title}</h1>
                <p className="post-about-para">{props.blog.Body}</p>
                <button className='read-more-btn'><Link to={"/showblogs/"+props.blog.id}>read more</Link></button>

            </div>
        </div>
    )
}

export default Singlepost;