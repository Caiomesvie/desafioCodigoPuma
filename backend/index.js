const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = "3000"; // http://localhost:3000

app.use(express.json());
app.use(cors());

const usersFavorits = [];
const usersGithub = [];
const usersFiltred = [];

//coletando todos os users do github, e filtrando somente os nomes para comparação
axios.get("https://api.github.com/users")
.then((res)=>{
    usersGithub.push(res);

    let array = []
    usersGithub.map((value)=>{
        if(array.indexOf(value.login) == -1){
          array.push(value.login)
        }
    })
    usersFiltred.push(array);
});




// resgatando usuarios
app.get('/users/', (req, res)=>{
    res.json(usersFavorits);
});

//adicionar usuário
app.post('/addusers/:username', (req, res)=>{
    
    let user = req.params.username;
    console.log(user)

    if(array.indexOf(user) != -1){
        usersGithub.map(val =>{
            if(user == val.login){
                usersFavorits.push(val)
            }
        })
        res.send('Atualizado')
    }
    
});

//deletar usuários
app.delete('/deleteusers/:username', (req, res)=>{
    let user = req.params.username;
    let indexUser = 0;

    usersFavorits.map((val, index)=>{
        if(val.login == user){
            indexUser = index;
        }
    })
    usersFavorits.splice(indexUser, 1);
});

//estrela de usuário
app.patch('/updateusers/:username/star', (req,res)=>{
    let user = req.params.username;

    usersFavorits.map(val=>{
        if(val.login == user){
            val.starred = true;
        }else{
            val.starred = false;
        }
        console.log(val)
    })
});

app.listen(port, ()=>{console.log('rodando')})