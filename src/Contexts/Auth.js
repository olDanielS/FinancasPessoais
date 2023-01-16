import React, {useState, createContext, useEffect}from 'react';
import api from '../Services/api'
export const AuthContext = createContext();


import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthProvider({children}) { 

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Controla o IndicatorActive de quando for criar conta e logar
  const [loadingAuth, setLoadingAuth] = useState(true); //Controla o IndicatorActive de quando for trocar rotas enrtre Stack e Drawer
  
  
  useEffect(() => {
   async function localStorange(){
     const storangeUser = await AsyncStorage.getItem('@AuthToken');
     console.log(storangeUser)
     if(storangeUser){
      const response = await api.get('/me', { 
        headers:{
          'Authorization': `Bearer ${storangeUser}` // Nessa rota buscamos os dados do Users pelo token e repassamos
        }
      }).catch(() => {
        setUser(null)
      })

      api.defaults.headers['Authorization'] = `Bearer ${storangeUser}` // Tornando o token default para proximas requisições dentro do header
      console.log(JSON.stringify(response.data))
      setUser(response.data);
      setLoadingAuth(false)
    }
    setLoadingAuth(false)
  }

  localStorange();

  }, [])
  
  async function createAccount(name, email, password){
    setLoading(true)
    try{
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      })
      setLoading(false)
      
    }catch(err){
      console.log('Erro ao tentar cadastrar:' + err)
      setLoading(false)
    }
  }

  async function handleLogin(email, password){
    setLoading(true)
    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const {id, name, token} = response.data;
      const data = {
        id, name, token, email
      }
      api.defaults.headers['Auhorization'] = `Bearer ${token}` // Setando novamente o token default
      
      AsyncStorage.setItem('@AuthToken', token); // Colocando o token no async Storange
      setUser({id, name, email})
      setLoading(false)

    
    }catch(err){
      console.log('Erro: ' + err)
      setLoading(false)
    }
  }

  function handleLogout(){
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }
    return(
    <AuthContext.Provider value={{signed: !!user, user, createAccount, handleLogin, loading, handleLogout, loadingAuth}}>
        {children}
    </AuthContext.Provider>
  );

}

export default AuthProvider;