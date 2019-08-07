const express = require('express')
const app = express()

app.get('/',(req, res) => {

//Fungsi
function printText(z) {
    var a = 'belajar<br>';
    var b = 'sinau';

    return a+b+z;
    }
function ngitung(){
    //Penjumlahan
    a = 5;
    b = 10;
    return a+b;

}

//array
    var kotak = ['dwiki','putra',12 ]
    
    return res.send (printText() +'<br>'+ ngitung() + '<br>' + kotak)
})


app.listen(3000, () => {
    console.log('magic happen at http://localhost:3000')
})