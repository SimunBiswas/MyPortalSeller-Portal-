import express from "express";


const AdminRoute = express.Router()

AdminRoute.post('/signup')
AdminRoute.post('/login')



export default AdminRoute