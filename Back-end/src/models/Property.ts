import { ObjectId } from "bson";
import mongoose, { Model, Schema, model } from "mongoose";
import { User, UserModel, UserSchema } from "./User";
import { sample_users } from "../data";

export interface Property {
   id: mongoose.Types.ObjectId;
    property_type: string;
    city: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    square_meters: number;
    imgProperty: string;
    status: string;
    year_built: string;
    description: string;
    userId: User;

}

export const PropertySchema = new Schema<Property>(
    {

        property_type: { type: String, required: true },
        city: { type: String, required: true },
        price: { type: Number, required: true },
        bedrooms:{ type: Number, required: true } ,
        bathrooms:{ type: Number, required: true } ,
        square_meters:{ type: Number, required: true } ,
        imgProperty: { type: String, required: true },
        status: { type: String, required: true },
        year_built: { type: String, required: true },
        description: { type: String, required: true },
        userId: 
            [{type: Schema.Types.ObjectId, 
            ref: 'User',
        required: true  }]
        
        
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

export const PropertyModel = model<Property>('property', PropertySchema);