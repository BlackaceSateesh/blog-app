import { useParams } from "react-router-dom";
import fb from "./Components/firebase";
import React, {useState} from "react";

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

const ShowBlogs = ()=>{
    const {id}= useParams();
    const [blogs, setBlogs]= useState([]);
    
    Blogslist.doc(id).get().then((snapshot)=>{
        const data = snapshot.data();
        setBlogs(data);

    });
    return(
        <>
        <h1>show blogs</h1>
        <p>Title:{blogs.Title}</p>
        <p>Body:{blogs.Body}</p>

        </>
    );
};

export default ShowBlogs;