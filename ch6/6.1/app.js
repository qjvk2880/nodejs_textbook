const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요");
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./index.html"));
});
app.post('/', (req, res) => {
    res.send("hello express");
});


app.get('/about', (req, res) => {
    res.send("hello express");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send("에러")
});
app.listen(app.get('port'), () => {
    console.log("서버 실행");
})