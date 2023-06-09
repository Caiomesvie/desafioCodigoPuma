import './App.css';
import React, { useState, useEffect } from 'react';
// import {FaSearch} from 'react-icons/fa';
import axios from 'axios';

function App() {
 
const [userName, setuserName] = useState('');
const [name, setName] = useState('');
const [link, setLink] = useState('');
const [photo, setPhoto] = useState(null); 
const [favoritesUsers, setFavoritesUsers] = useState([]);


useEffect(()=>{
  getFavorites();
  console.log(favoritesUsers);
}, [])

const getFavorites = () =>{
  axios.get('http://localhost:3000/users').then((res)=>setFavoritesUsers(res))
}

  return (
    <div className="container">
    <h2 className='title'> Best GitHub</h2>
    <h3 className='hello'>Bem vindo ao organizador de usuários favoritos do github!</h3>
    <div className='inputContainer'>
    <div className='form-box'>
        <form method='post'>
          <input className='usernameInput' type="text" placeholder='Digite o nome de usuário'></input>
          <input type='submit' value='Enviar' className='sendButton'/>
        </form>
      </div>
    </div>
    
    </div>

    
  );
}

export default App;
