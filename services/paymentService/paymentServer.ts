import express from 'express';

const app = express();
const PORT = process.env.USERPORT || 3004
const serviceName = 'Payment Microservice';

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/', (req, res, next)=>{
  res.send(`From ${serviceName}`);
})

app.listen(PORT, ()=> {
  console.log(`${serviceName}: Listening on Port ${PORT}`)
})