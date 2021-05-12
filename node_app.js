const express = require('express');
const app = express();

const PORT = parseInt(process.argv[2]) || 8080;
const Memory = process.memoryUsage(); 

app.get('/datos', (req,res) => {
    res.send(`Servidor express <span style="color:red;">(Nginx)</span> en el puerto: ${PORT}<br>
    <br><b>PID: </b>${process.pid}<br> 
    <br><b>Date: </b>${new Date().toLocaleString()}<br> 
    <br><b>Operative system: </b>${process.platform}<br>
    <br><b>Node version: </b>${process.version}<br>
    <br><b>Argumentos de entrada: </b>${process.cwd()}<br>
    <br><b>Process title: </b>${process.title}<br>
    <br><b>Memory usage: </b>${Memory.rss}<br>`)
});

const random = (num) => {
    let sum = 0;
    
    for(let i=0; i< num*1e9; i++){
        sum += i;
    }
    return sum;
};

app.get('/random',(req,res) => {
    const tot = random(9)
    res.send(`Servidor express <span style="color:red;">(Nginx)</span> en el puerto ${PORT}<br>
    <br>El numero generado es: ${tot}`);
});

app.listen(PORT, err => {
    if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
});