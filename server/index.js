const express = require("express");
require("dotenv").config();
const app = express();
const PORT =  process.env.PORT || 5000;
const connectDatabase = require("./dataBase");
connectDatabase();
const cors = require("cors");
const customerRouter = require("./routers/customerRouter");
const userRouter = require("./routers/userRouter");

app.use(cors());
app.use(express.json());
app.use("/api/v2/customer", customerRouter);
app.use("/api/v2/user", userRouter);

app.listen(PORT, () => console.log(`Server is connected to the port: ${PORT}`));