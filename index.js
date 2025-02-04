const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "lubabatuahmad60@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/lubsy09/hng12_stage0.git"
  });
})

app.listen( PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});