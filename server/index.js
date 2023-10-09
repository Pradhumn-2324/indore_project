const express = require("express")
const mongoose = require( 'mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/client')
const CompanyModel = require('./models/companies')


const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/VaibhaviDb"); 

app.post('/register',(req,res) => {
    EmployeeModel.create(req.body)
    .then(user => {
        if(user){
            res.json(user)}
        })
    .catch(err => res.json(err))
    console.log(req)
})

app.post('/login',(req,res) => {
    const {email, password} =req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        console.log(user)
        if(user){
            if(user.password === password )
            {
                if(user.role === "Admin")
                {
                    res.json("Admin")
                }
                else{
                    res.json("User")
                }
            }else{
                res.json("Incorrect password ")
            }
        }else {
            res.json("No User found")
        }
    })
})

app.post("/companies", (req,res) =>
{
    
    CompanyModel.create(req.body)
    .then(user => {console.log(user)})
    .catch(err => res.json(err))
    console.log(req)
}
)

app.get("/companies", (req,res) =>
{
    CompanyModel.find()
    .then(result => res.json(result))
    .catch(err => res.json)
})

app.listen (3001, () => {
console.log("server is running")

})