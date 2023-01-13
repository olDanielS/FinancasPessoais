import React, {useState, createContext}from 'react';
import api from '../Services/api'

export const AuthContext = createContext();
const [user, setUser] = 'False'

async function createAccount(name, email, password){
  try{
    const response = await api.post('/users', {
      name: name,
      email: email,
      password: password,
    })
    console.log(JSON.stringify(response))
  }catch(err){
    console.log('Erro ao tentar cadastrar:' + err)
    
  }
}

function AuthProvider({children}) {
    return(
    <AuthContext.Provider value={{user, createAccount}}>
        {children}
    </AuthContext.Provider>
  );

}

export default AuthProvider;