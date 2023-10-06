import { useParams } from "react-router-dom";
import fb from "./Components/firebase";
import React, {useEffect, useState} from "react";

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

const EditBlogs = ()=>{
    const {id}= useParams();

    const [blogs, setBlogs]= useState([]);

    const[title, setTitle]= useState("");
    const[categ, setCateg]= useState("");
    const[body, setBody]= useState("");

    const submit =(e) =>{
        e.preventDefault();
        Blogslist.doc(id).update ({
            Title: title,
            Body: body,
            Categ: categ,
            last_Updated: fb.firestore.Timestamp.fromDate(new Date())

        }).then((docref) =>{
            alert('data successfully updated!');
        }).catch((error)=>{
            console.error("error:", error);
        });
    };
    useEffect((id)=>{

        Blogslist.doc(id).get().then((snapshot)=>{
            const data = snapshot.data();
            setBlogs(data);
            // setBody(data.Body)
         console.log(data);
        });
    },[]);
    // Blogslist.doc(id).get().then((snapshot)=>{
    //     const data = snapshot.data();
    //     setBlogs(data);
    //     setBody(data.Body)
    //     setTitle(data.Title)
    //     console.log(data);
    // });
    return(
        <>
        <h1>edit blogs</h1>
        <p>Title:{title}</p>
        <p>Body:{body}</p>

        <form onSubmit={(event)=>{submit(event)}}>
            <input type="text" placeholder="Title" value={title}
            onChange={(e)=>{setTitle(e.target.value)}} required/>
            <input type="text" placeholder="Category"
            onChange={(e)=>{setCateg(e.target.value)}} required/>
             <textarea name="content" value={body} placeholder="write here.." cols="30" rows="10" onChange={(e)=>{setBody(e.target.value)}} required></textarea>
             <button type="submit">submit</button>
        </form>


        </>
    );
};

export default EditBlogs;