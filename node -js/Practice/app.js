const express = require("express");

const app = express();
const PORT = 8000;

// JSON data read karne ke liye
app.use(express.json());


// POST API
app.post("/user", (req, res) => {
 
  const data = req.body;



  console.log("Received Data:");
  console.log(data);

  res.status(201).json({
    message: "Data received successfully",
    data: data,
  });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


