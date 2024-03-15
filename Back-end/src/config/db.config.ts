import {connect, ConnectOptions} from 'mongoose';


export const dbConnect = () => {
    connect('mongodb://127.0.0.1:27017/property'!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    } as ConnectOptions).then(
        () => console.log("Connect succsessfully!"),
        (error) => console.log(error)
        )
        
        
}