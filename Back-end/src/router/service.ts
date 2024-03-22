import {Router} from "express"
import {sample_service } from "../data";
import asyncHandler from 'express-async-handler';
import { ServiceModel } from "../models/service";

const router = Router();

// router.get("/seed", asyncHandler(
//     async (req, res) => {
//         const serviceCount = await ServiceModel.countDocuments();
//         if(serviceCount > 0){
//            res.send('Seed is already done!');
//            return;
//         }
//         await ServiceModel.create(sample_service);
//         res.send('Seed is done!');
//        }
//    ));
router.get("/", asyncHandler(
    async (req,res) => {
        const service = await ServiceModel.create(sample_service);
        res.send(service);
    }
));

export default router;