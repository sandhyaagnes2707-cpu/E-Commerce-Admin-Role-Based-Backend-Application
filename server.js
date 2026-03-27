const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const PORT = process.env.PORT;
const connection = require("./config/db");
connection();
app.use(express.json());
const userRouter = require("./routes/userRouter");
const productRouter=require("./routes/productRouter")
app.use("/api", userRouter);
app.use("/api",productRouter)
app.listen(PORT, () => {
  console.log(`server running on port :${PORT}`);
})
