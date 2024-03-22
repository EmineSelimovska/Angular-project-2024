import mongoose, { Schema, model } from "mongoose";

export interface About {
    _id: mongoose.Types.ObjectId;
    welcome: string;
    mission: string;
    setsUpApart: string;
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
 }


 export const AboutSchema = new Schema<About>(
    {

        welcome: { type: String, required: true },
        mission: { type: String, required: true },
        setsUpApart: { type: String, required: true },
        name1: { type: String, required: true },
        name2:  { type: String, required: true },
        name3: { type: String, required: true },
        name4: { type: String, required: true },
        name5:  { type: String, required: true },
        
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}

)

export const AboutModel = model<About>('about', AboutSchema);