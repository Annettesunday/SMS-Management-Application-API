import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req,res) =>{
  res.status(200).send({message: "Welcome to SMS Management application API"})
});

app.get("*", (req,res) => {
  res.status(404).send({message: "This is an unvailable route. Visit / to see all routes"})
});

app.listen(port, () => {
  console.log(`We are live on port ${port}`)
});
