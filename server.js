const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3001;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/feedbackApp")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Serve static files (if any)
app.use(express.static(path.join(__dirname, "public")));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Route to render the feedback form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle form submission
app.post("/submit-feedback", (req, res) => {
  const { name, email, rating, comments } = req.body;
  const Feedback = mongoose.model(
    "Feedback",
    new mongoose.Schema({
      name: String,
      email: String,
      rating: Number,
      comments: String,
    })
  );
  const feedback = new Feedback({ name, email, rating, comments });
  feedback
    .save()
    .then(() => {
      res.send("Thank you for your feedback!");
    })
    .catch((err) => {
      res.status(500).send("Error saving feedback");
    });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
