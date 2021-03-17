const express = require("express");
const connectDB = require("./config/db");

// app server
const app = express();
const PORT = process.env.PORT || 4000;

// database connections
connectDB();

// express.json
app.use(express.json({ extended: true }));

// routes
app.use("/api/users", require("./routes/users"));

// Start port
app.listen(PORT, () => {
  console.log(`API server on port: ${PORT}`);
});
