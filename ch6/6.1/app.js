const dotenv = require('dotenv');
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require('express-session');

const app = express();
dotenv.config();
const indexRouter = require('./routes');
app.set("port", process.env.PORT || 3000);
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
    },
    name: '.sid'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    if (req.session.num === undefined) {
        req.session.num = 1;
    } else {
        req.session.num += 1;
    }
    res.send(`${req.session.num}`);
});

app.post("/", (req, res) => {
  res.send("hello express");
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  res.status(404).send("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러");
});

app.listen(app.get("port"), () => {
  console.log("서버 실행");
});
