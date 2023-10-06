import React,{useEffect, useState} from "react";


export default function useAuthState(auth){
    const [user, setUser] =useState(()=>auth.Currentuser);
    const[initializing, setInitializing]= useState(true);
    useEffect(()=>{
        const subscribe = auth.onAuthStateChanged(user=>{
            if(user){
                setUser(user);
            }else{setUser(false);}
            if(initializing){
                setInitializing(false);

            }
        });
        return subscribe;
    },[auth, initializing]);
    return {user, initializing};
}
