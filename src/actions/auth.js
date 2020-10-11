import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./uiRegister";
import { types } from "../types/types";

export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // console.log(user);
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            }).catch(err => {
                dispatch(finishLoading());
                console.log(err.code);
                if (err.code === "auth/wrong-password") {
                    Swal.fire('Error', "Contraseña incorrecta.", 'error');
                } else if (err.code === "auth/user-not-found") {
                    Swal.fire('Error', "Usuario no registrado.", 'error');
                } else {
                    Swal.fire('Error', err.message, 'error');
                }
            })
    }
}

export const startLoginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            });
    }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        dispatch(startLoading());

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            }).catch(err => {
                console.log(err);
                dispatch(finishLoading());
                if (err.code === "auth/email-already-in-use") {
                    Swal.fire('Error', "El email ya se encuentra registrado.", 'error');
                }
            });
    }
}

export const login = (uid, displayName, photoURL) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        photoURL
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout,
});

