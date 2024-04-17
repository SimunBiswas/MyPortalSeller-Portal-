import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://choudharykuldeep20000:<password>@cluster0.diaktrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {
      dbName: "SELLER-PORTAL",
    })
    .then(() => console.log("Database Connected SuccesFully"))
    .catch((err) => console.log("error In DB", err));
};