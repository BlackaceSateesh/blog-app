import React from 'react'
import "../Latestpost/latestpost.css";

const Latestpost = (props) => {
    return (
        <>
            <div className="latest-post">
                <img src={props.blog.CoverImg} alt="" className="latest-post-img" />
                <div className="latest-post-data">
                    <button className='post-categ-btn'>{props.blog.Categ}</button>
                    <h3>{props.blog.Title}</h3>
                    <p className='post-upl-date'><i>{Date(props.blog.last_Update)}</i></p>

                </div>
            </div>
        </>
    )
}

export default Latestpost;