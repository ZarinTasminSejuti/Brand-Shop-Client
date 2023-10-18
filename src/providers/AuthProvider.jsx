import { createContext } from "react";
// import app from "../firebase/Firebase.config";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';
import { useState } from "react";
import app from "../firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();





const AuthProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(true);



    //login authentication
    const signIn = (email, password,) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login authentication
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }



    const authInfo = {signIn, signInGoogle, loading}

    return (
        <div>
             <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}