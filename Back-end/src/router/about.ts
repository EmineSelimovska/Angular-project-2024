import {Router} from "express"
import { sample_about } from "../data";
import asyncHandler from 'express-async-handler';
import { AboutModel } from "../models/about";

const router = Router();


router.get("/", asyncHandler(
    async (req,res) => {
        const about = await AboutModel.create(sample_about);
        res.send(about);
    }
));

export default router;