import dotenv from 'dotenv';
dotenv.config();
process.env.MONGO_URL;

// import bodyParser from 'body-parser';
import express from "express";
import cors from "cors";
import property from './router/property';
import user from './router/user';
import order from './router/order';
import { dbConnect } from './config/db.config';
import path from 'path';
import { sample_property } from './data';

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"],
    
}));


app.use("/api/property", property);
app.use("/api/users", user);
app.use("/api/orders", order);

app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
  });


// app.use(express.static('../../my-project/docs'));
// app.use('/*', (req, res) => {
//     res.sendFile(path.join(__dirname,'../../my-project/docs/index.html'));
// })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Welcome to the http://localhost:" + PORT);
    
}); 




  