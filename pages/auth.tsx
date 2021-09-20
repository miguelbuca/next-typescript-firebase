import { useState  } from 'react'
import type { NextPage } from 'next'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth, firestore, gitHubProvider } from '../client/app';

import { Users } from './store/ducks/users/types'

import { collection,setDoc, doc, getDocs } from 'firebase/firestore'

const Auth: NextPage = () => {

  const querySnapshot = async () => await getDocs(collection(firestore, "users"))
  
  const [users, setUsers] = useState<Users>();

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
          <button onClick={() => {
              signInWithPopup(auth, gitHubProvider )
                .then(res => {
                  
                  if (!res) return
                  
                  const { email, uid, photoURL }: any = res?.user
                      
                  setDoc(doc(firestore, "users", uid), {
                    email,
                        name: 'miguel buca',
                        picture: photoURL,
                        id: uid});
                }).catch((error) => console.warn(error));
        
          }} >login</button>
           <button onClick={() => {
              querySnapshot().then(({docs}) => {
                  let data = docs.map((doc): object => doc.data())
                  console.log(data)
              }).catch((error) => console.warn(error));

      }} >carregar dados</button>
      <button onClick={async () => {
      }}>
        add
      </button>
    </div>
  );
}

export default Auth