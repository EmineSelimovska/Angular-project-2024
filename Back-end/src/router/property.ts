import {Router} from "express"
import { sample_service, sample_property } from "../data";
import asyncHandler from 'express-async-handler';
import {PropertyModel } from "../models/Property";

const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {
     const propertyCount = await PropertyModel.countDocuments();
     if(propertyCount> 0){
        res.send('Seed is already done!');
        return;
     }
     await PropertyModel.create(sample_property);
     res.send('Seed is done!');
    }
));

router.get("/",asyncHandler(
    async (req,res) =>{
        const properties = await PropertyModel.find();
        res.send(properties);
    }
));

router.get("/search/:searchName", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchName, 'i');
       const foods = await PropertyModel.find({name: {$regex:searchRegex}});
        res.send(foods);
    }
));

router.get("/tags", asyncHandler(
   async (req, res) => {
      const tags = await PropertyModel.aggregate([
        {
            $unwind: '$tags'
        },
        {
            $group: {
                _id: '$tags',
                count: {$sum: 1}
            }
        },
        {
            $project:{
                _id: 0,
                name: '$_id',
                count: '$count'
            }
        }
      
      ]).sort({count: -1});
     const all = {
        name: 'All',
        count: await PropertyModel.countDocuments()
     }
      tags.unshift(all)
      res.send(tags)
    }
));

router.get("/tag/:tagName",asyncHandler(
    async (req,res) => {
        const foods = await PropertyModel.find({tags: req.params.tagName})
       
       res.send(foods);
    }
));

router.get("/:propertyId", asyncHandler(
    async (req, res) => {
        const property = await PropertyModel.findById(req.params.propertyId);
         res.send(property);
       }
));



export default router;