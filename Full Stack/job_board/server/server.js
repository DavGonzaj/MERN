// 1. import all dependencies
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

require("./configs/mongoose.config");
// 2. configure express

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. routes & controller logic (CRUD)
require("./routes/job.routes")(app);

// 4. listen to the port
app.listen(8000, () => console.log(`Listening to the port: 8000`));
