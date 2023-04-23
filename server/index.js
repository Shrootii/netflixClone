require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require('cors');
app.use(cors());

const getmovie=require("./routes/movies")
const register=require("./routes/Authentication")
const userRoute = require("./routes/subscribers");
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})

app.use('/api', getmovie)
app.use('/api/auth', register)  
app.use('/api/users', userRoute);



// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
// const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");



// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/movies", movieRoute);
app.use('/api/lists', listRoute);

// app.listen(8800, () => {
//     console.log("Backend server is running!");
// });