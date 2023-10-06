import React, { useState, useEffect } from "react";
import fb from "../firebase";
import "../Blogpost/Blogpost.css"
import Singlepostcard from '../Singlepost/Singlepostcard';
import Singlepost from "../Singlepost/Singlepost"

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

const Blogpost = () => {
    const [blogs, setBlogs] = useState([]);

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

    // delete
    const deleteBlog = (id) => {
        Blogslist.doc(id).delete().then(() => {
            alert("successfully deleted!")
        }).catch((error) => {
            console.error("error removing blog");
        })
    }
    return (
        <>
            <div className="blog-post">
           
                {blogs.map((blog, index) => {
                    return(
                        <>
                        {index<=2 ? <Singlepost blog={blog}/> : null}
                    </>
                    )    })};

                <div className="post-cardtype">
                    {blogs.map((blog, index)=>{
                        return(
                            <>

                        {index<=3 ? <Singlepostcard blog={blog} /> : null}
                            </>
                        )
                    })}
                    
                    
                </div>

                <button className='older-post-btn'>load older posts</button>

                {/* <Singlepost /> */}


            </div>
        </>
    )
}

export default Blogpost;