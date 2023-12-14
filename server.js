const express = require("express");
const cors = require ("cors")

const app = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  
  res.json({"egfdsxc": "gefdhscx"})
})
app.post("/", (req, res) => {
  const data = req.body
  res.send(data)
})



app.listen(8000)