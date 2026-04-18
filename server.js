const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/order",(req,res)=>{
 let orders = JSON.parse(fs.readFileSync("orders.json"));
 orders.push(req.body);
 fs.writeFileSync("orders.json", JSON.stringify(orders,null,2));
 res.send("Order saved");
});

app.listen(3000,()=>console.log("Server running"));