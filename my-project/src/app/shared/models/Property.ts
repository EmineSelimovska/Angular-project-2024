import { UserId } from "./user";



export class Property {
   _id!: string;
    property_type!: string;
    city!: string;
    price!: number;
    bedrooms!: number;
    bathrooms!: number;
    square_meters!: number;
    imgProperty!: string;
    status!: string;
    year_built!: string;
    description!: string;
    userId!: UserId
}