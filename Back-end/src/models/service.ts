import mongoose, { Schema, model } from "mongoose";

export interface Service {
    _id: mongoose.Types.ObjectId;
    n1: string;
    definition1: string;
    n2: string;
    definition2: string;
    n3: string;
    definition3: string;
    n4: string;
    definition4: string;
    n5: string;
    definition5: string
 }


 export const  ServiceSchema = new Schema<Service>(
    {

        n1: { type: String, required: true },
        definition1: { type: String, required: true },
        n2: { type: String, required: true },
        definition2: { type: String, required: true },
        n3:  { type: String, required: true },
        definition3: { type: String, required: true },
        n4: { type: String, required: true },
        definition4:  { type: String, required: true },
        n5: { type: String, required: true },
        definition5:  { type: String, required: true },
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

export const ServiceModel = model<Service>('service', ServiceSchema);