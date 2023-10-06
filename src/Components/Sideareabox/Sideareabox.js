import React, { useState, useEffect } from "react";
import "../Sideareabox/Sideareabox.css"
import Categoriescard from '../Categories/Categoriescard'
import Latestpost from '../Latestpost/Latestpost'

import fb from "../firebase";
import "../Blogpost/Blogpost.css"

// import { getStorage } from "firebase/storage";
const storageRef = fb.storage().ref();


// console.log(storage);

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

   

const Sideareabox = () => {
  const [blogs, setBlogs] = useState([]);
  const[socialImg, setSocialImg]= useState("");


  useEffect(() => {
      // subscribe to query with onSnapshot
      const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,

          }));
          // update state
          setBlogs(data);
      });
      // detach listener
      return unsubscribe;
  }, []);
  return (
    <>
      <div className="side-area-box">

        <div className="post-admin-card">
          <img className='admin-img' src="" alt="admin-img" />
          <div className="admin-social">fb in x pin</div>
          <h1 className="admin-name">Riya jahnavi</h1>
          <p className="admin-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
          <button className='side-readmore-btn'>read more</button>
        </div>
        {/* newsletter section */}
        <div className="newsletter">
          <h3>subscribe to our newsletter</h3>
          <input type="email" placeholder='your email here...' />
          <button>subscribe</button>
        </div>

        {/* categories section */}
        <div className="categories-area">
          <h3 className='sidearea-heading'>categories</h3>
          <Categoriescard />
          <Categoriescard />
          <Categoriescard />
          <Categoriescard />


        </div>
        <div className="latest-post-box">
          <h3 className="sidearea-heading">latest posts</h3>
          {blogs.map((blog,index)=>{
            return(
              <>
                {index<=3 ? <Latestpost blog={blog} /> : null}
              </>
            )
          })}
         

        </div>

        <div className="advertisement">
          <h3 className="sidearea-heading">advertisement</h3>
          <div className="advertisement-img-box">

            <img className='advertisement-img' src="" alt="banner" />
            <button>discover</button>
          </div>
        </div>
        <div className="social-img">
          <h3 className="sidearea-heading">social images</h3>
          <div className="social-img-box">
            <img src="" alt="social-imgs" />
            <img src="" alt="social-imgs" />
            <img src="" alt="social-imgs" />
            <img src="" alt="social-imgs" />
            <img src="" alt="social-imgs" />
            <img src="" alt="social-imgs" />
          </div>
        </div>

        {/* tags */}
        <div className="tags">
          <h3 className="sidearea-heading">tags</h3>
          <div className="tags-btn">
            <button className='post-categ-btn'>design</button>
            <button className='post-categ-btn'>fashion</button>
            <button className='post-categ-btn'>travel</button>
            <button className='post-categ-btn'>music</button>
            <button className='post-categ-btn'>photography</button>
            <button className='post-categ-btn'>video</button>
            <button className='post-categ-btn'>adventure</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Sideareabox