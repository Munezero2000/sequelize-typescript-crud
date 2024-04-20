import express from "express";
import sequelize from "./database/models";
import Product, { ProductInput } from "./database/models/Product";

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  if (product != null) {
    res.status(201).send(product);
  } else {
    res.status(400).send("Not saved");
  }
});


// Using sync to automicatically generate the tables and sync the database
// sequelize.sync({alter:true}).then(() => {
//   app.listen(5000, () => {
//     console.log("App is running on ....5000");
//   });
// });


// Using migrations
app.listen(5000, () => {
  console.log("App is running on ....5000");
});
