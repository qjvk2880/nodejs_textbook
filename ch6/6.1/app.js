const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send("hello epress");
});
app.post('/', (req, res) => {
    res.send("hello express");
});
app.get('/about', (req, res) => {
    res.send("hello express");
});

app.listen(app.get('port'), () => {
    console.log("서버 실행");
})