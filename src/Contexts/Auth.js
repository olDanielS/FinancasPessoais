import React, {useState, createContext, useEffect}from 'react';
import api from '../Services/api'

export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

function AuthProvider({children}) { 

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false); // Controla o IndicatorActive de quando for criar conta e logar
  const [loadingAuth, setLoadingAuth] = useState(true); //Controla o IndicatorActive de quando for trocar rotas enrtre Stack e Drawer
  const [responseError, setResponseError] = useState(null);
  
  useEffect(() => {
   async function localStorange(){
     const storangeUser = await AsyncStorage.getItem('@AuthToken');
     if(storangeUser){
      const response = await api.get('/me', { 
        headers:{
          'Authorization': `Bearer ${storangeUser}` // Nessa rota buscamos os dados do Users pelo token e repassamos
        }
      }).catch(() => {
        setUser('')
      })

      api.defaults.headers['Authorization'] = `Bearer ${storangeUser}` // Tornando o token default para proximas requisições dentro do header
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
      Alert.alert('Exito', 'Conta criada com sucesso!')
      console.log(response.data)
      setLoading(false)
      
    }catch(err){
      Alert.alert('Algo deu errado...', "Erro ao tentar cadastrar, verifique os campos e tente novamente!")
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
        id: id,
        name: name,
        token: token,

      }
      
      api.defaults.headers['Authorization'] = `Bearer ${token}` // Setando novamente o token default
      await AsyncStorage.setItem('@AuthToken', token); // Colocando o token no async Storange
      setUser({id, name, token})
      setLoading(false)

    
    }catch(err){
      Alert.alert('Algo deu errado...', "Ocorreu um erro ao tentar fazer login, verifique os campos e tente novamente!")
      setLoading(false)
    }
  }

  function handleLogout(){
    AsyncStorage.clear().then(() => {
      setUser('')
    })
  }
    return(
    <AuthContext.Provider value={{signed: !!user, user, createAccount, handleLogin, loading, handleLogout, loadingAuth, responseError}}>
        {children}
    </AuthContext.Provider>
  );

}

export default AuthProvider;