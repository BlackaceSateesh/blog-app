import fb from "./Components/firebase";
import React, {useState,useEffect} from "react";


const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

const BlogslistView = ()=>{
    const[blogs, setBlogs]= useState([]);
    useEffect(()=>{
        // subscribe to query with onSnapshot
        const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot =>{
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc =>({
                ...doc.data(),
                id: doc.id,
            }));
            // update state
            setBlogs(data);
        });
        // detach listener
        return unsubscribe;
    },[]);

    // delete
    const deleteBlog = (id)=>{
        Blogslist.doc(id).delete().then(()=>{
            alert("successfully deleted!")
        }).catch((error)=>{
            console.error("error removing blog");
        })
    }
return(
<>

{blogs.map(blog=>(
    <div key={blog.id}>
    <p>Title: {blog.Title}</p>
    <p>Body: {blog.Body}</p>
    <p>update: {Date(blog.last_Update)}</p>

    <a href={"/showblogs/"+blog.id}>view</a> 
    <a href={"/showblogs/editblog/"+blog.id}> edit</a>
    <button onClick={()=>{deleteBlog(blog.id)}}>delete</button>
    <p>{"/showblogs/"+blog.id}</p>
    {/* <Link></Link> */}
    </div>
))}
    {/* <Link to={"/showblogs/"+blog.id}>read more</Link> */}
    {/* <NavLink to={"/"}>heloo</NavLink> */}

</>
)
};

export default BlogslistView;