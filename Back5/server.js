
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("connected")
})

app.listen(8080, () => {
    console.log("server runnig on 8080")
})

const productsRouter = require("./routes/products.routes");
app.use("/api/products", productsRouter);
