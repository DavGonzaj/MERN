// 1. import all dependencies
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

require("./config/mongoose.config");
// 2. configure express

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. routes & controller logic (CRUD)
const Router = require("./routes/authors.routes");
Router(app);

// 4. listen to the port
app.listen(8000, () => console.log(`Listening to the port: 8000`));
