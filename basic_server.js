
    var express = require('express');
    var app = express();

    app.use(express.static('dist'));

    var port = 3000;

    process.argv.forEach(function (val, index, array) {
        if(val=='--port'){
            if(array.length-1<=index+1){
                port = array[index+1];
            }
        }
    });

    console.log('Servidor de testes LiNE rodando na porta', port);
    app.listen(port);