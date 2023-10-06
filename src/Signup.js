import fb from "./Components/firebase";
import useAuthState from "./hooks";

export default function Signin(){

    const {user, initializing} = useAuthState(fb.auth());
    const signInWithGoogle = async() =>{
        const provider = new fb.auth.GoogleAuthProvider();
        fb.auth().useDeviceLanguage();

        try {
            await fb.auth().signInWithRedirect(provider);

        } catch (error) {
            console.log(error.message);
        }
    }
    if(initializing){
        return "loading....";
    }
    console.log(user);

    return(
        <>
            {user ? <><img src={user.photoURL} alt="" /> <p>username:- {user.displayName}  </p></>
            : <><button onClick={signInWithGoogle}>sign in with google</button></>}
        </>
    )
}