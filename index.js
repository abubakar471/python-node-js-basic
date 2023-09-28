const express = require("express");
const app = express();
const publicRoutes = require("./routes/public.js");
const cors = require("cors");


app.use(cors())
app.use("/api", publicRoutes);


app.listen(8000, () => {
    console.log("server is running");
})