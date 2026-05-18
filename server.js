const express = require("express");
const cors = require("cors");
require("dotenv").config();

const schedulerRoutes = require("./routes/schedulerRoutes");
const logger = require("./middleware/logger");

const app = express();


app.use(logger);

app.use(cors());
app.use(express.json());

app.use("/api", schedulerRoutes);


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server is running properly"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
