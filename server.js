
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ToolsRoutes');
const cors = require('cors');


mongoose.set('strictQuery', false);
require('dotenv').config();

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE WERE CONNECTED TO MONGO!"))
.catch((err) => console.log("ERROR!"))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})
