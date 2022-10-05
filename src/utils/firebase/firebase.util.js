import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// Your web app's Firebase configuration
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAR7TsK4dw2Mfs2loVdUPVd1STzvbwHy4M",
  authDomain: "fashion-houz-db.firebaseapp.com",
  projectId: "fashion-houz-db",
  storageBucket: "fashion-houz-db.appspot.com",
  messagingSenderId: "698281678257",
  appId: "1:698281678257:web:aa279a41160e4489985990"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const user = await getDoc(userDocRef);

  if (!user.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating a user', error)
    }
  }
  return userDocRef;
}