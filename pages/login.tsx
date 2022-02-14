import React, { useState } from 'react';
import { getAuthUserData, loginUser, logoutAuthUserData } from '../Methods/loginMethods';

export default function login() {
  const [authUser, setauthUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setauthUser({
      ...authUser,
      [event.target.name]: event.target.value
    })
  }

  const loginClick = async () => {
    if (authUser.email && authUser.password) {

      const data = await loginUser({ ...authUser })

      if (data) {
        console.log(data);

        // dispatch(insertData([data]));
        // clearState();
      }
    } else {
      alert("Empty Fild Is Not Allowed!!")
    }
  }
  const getAuthUser = async () => {
    console.log(getAuthUserData());
  }
  const logoutAuthUser = async () => {
    console.log(logoutAuthUserData());
  }
  return (
    <>
      <div>
        <input type="email" placeholder='email' name='email' value={authUser.email} onChange={(e) => handleChange(e)} />
        <input type="password" placeholder='password' name='password' value={authUser.password} onChange={(e) => handleChange(e)} />
        <button onClick={loginClick}>Login</button>
        <button onClick={getAuthUser}>Get Auth User</button>
        <button onClick={logoutAuthUser}>Logout</button>
      </div>
    </>
  );
}
