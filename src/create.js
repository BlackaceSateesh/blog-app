import fb from "./Components/firebase";
import React, { useState } from "react";

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');
const adminData = DB.collection('admin');

const storageRef = fb.storage().ref();

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [categ, setCateg] = useState("");
    const [body, setBody] = useState("");
    const [coverimg, setCoverimg] = useState("");
    const [socialimg, setSocialImg] = useState("");
    const [name, setName] = useState("");


    const submit = (e) => {
        e.preventDefault();
        const uploadtask = storageRef.child("images/" + coverimg.name).put(coverimg);
        uploadtask.on(
            'state_changed',
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storageRef.child('images/' + coverimg.name).getDownloadURL().then(url => {
                    // console.log("img url:", url);
                    Blogslist.add({
                        Title: title,
                        Body: body,
                        Categ: categ,
                        CoverImg: url,
                        // time:new fb.firestore.Timestamp(jsonTimestamp.seconds, jsonTimestamp.nanoseconds),
                        last_Updated: fb.firestore.Timestamp.fromDate(new Date())

                    }).then((docref) => {
                        alert('data successfully submit');
                    }).catch((error) => {
                        console.error("error:", error);
                    });
                })
            }
        );
    };
    const handlerCoverImgChange = (e) => {
        if (e.target.files[0]) {
            setCoverimg(e.target.files[0]);
        }
    };


    // admin form
    const adminSubmitForm = (e) => {
        e.preventDefault();
        const uploadtask = storageRef.child("admin/" + socialimg.name).put(socialimg);
        uploadtask.on(
            'state_changed',
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storageRef.child('admin/' + socialimg.name).getDownloadURL().then(url => {
                    // console.log("img url:", url);
                    adminData.add({
                        Name: name,
                        Socialimg: url,

                        last_Updated: fb.firestore.Timestamp.fromDate(new Date())

                    }).then((docref) => {
                        alert('data successfully submit');
                    }).catch((error) => {
                        console.error("error:", error);
                    });
                })
            }
        );
    };

    const handlerAdmin = (e) => {
        if (e.target.files[0]) {
            setSocialImg(e.target.files[0]);
        }
    };

    return (
        <>
            {/* blog  */}
            <form onSubmit={(event) => { submit(event) }}>
                <input type="text" placeholder="Title"
                    onChange={(e) => { setTitle(e.target.value) }} required />

                <input type="file" name="coverimg" accept="image/*" required onChange={(e) => { handlerCoverImgChange(e) }} />

                


                <select name="category" id="category" onChange={(e) => { setCateg(e.target.value) }} required >
                    <option value="fashion">fashion</option>
                    <option value="design">design</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                    <option value="photography">photography</option>
                    <option value="video">video</option>
                    <option value="adventure">adventure</option>

                </select>

                <textarea name="content" placeholder="write here.." cols="30" rows="10" onChange={(e) => { setBody(e.target.value) }} required></textarea>
                <button type="submit">submit</button>
            </form>



            {/* admin data updation portion */}

            <br /><br /><hr />

            <form onSubmit={(event) => { adminSubmitForm(event) }}>
                <input type="text" placeholder="name"
                    onChange={(e) => { setName(e.target.value) }} required />

                <input type="file" name="socialimg" accept="admin/*" required onChange={(e) => { handlerAdmin(e) }} />

                {/* <input type="text" placeholder="Category"
            onChange={(e)=>{setCateg(e.target.value)}} required/>
             <textarea name="content" placeholder="write here.." cols="30" rows="10" onChange={(e)=>{setBody(e.target.value)}} required></textarea> */}
                <button type="submit">submit</button>
            </form>


        </>
    )
}
export default CreateBlog;
