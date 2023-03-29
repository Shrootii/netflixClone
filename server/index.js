require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
// const router = require("./Routes/router");
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})