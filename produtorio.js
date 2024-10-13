const express = require('express');
const app = express();
const port = 3000;
var resultado = 1;
var x = 0;

// Rota para capturar os parâmetros de rota
app.get('/produtorio/:inf/:sup/:modo', (req, res) => {
    // Captura os parâmetros 'a' e 'b' da rota
    const inf = parseInt(req.params.inf);
    const sup = parseInt(req.params.sup);
    const modo = req.params.modo;

    for (let i = inf; i <= sup; i++) {
        x = i + (1 / i);
        resultado *= x;
    }

    res.send(`O produtório com limite inferior ${inf} e limite superior ${sup} é: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}/produtorio/10/10/s`);
});
