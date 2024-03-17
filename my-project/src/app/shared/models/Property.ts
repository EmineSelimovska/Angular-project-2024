export class UserId {
    _id!: string;
    email!: string;
    password!: string;
    name!: string;
    address!: string;
    isAdmin!: boolean;
}


export class Property {
   id!: string;
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