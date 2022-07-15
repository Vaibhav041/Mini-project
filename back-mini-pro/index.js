import express from 'express'
import cors from "cors"
import mongoose from "mongoose"

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected');
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    batch: String,
    section: String,
    password: String,
})

const User = new mongoose.model("User", userSchema);

app.post("/Register", (req, res) => {
    const [name, email, batch, section, password] = req.body;
    User.findOne({email: email}, (err, user) => {
        if (user) {
            res.send({message:"user already registered"});
        } else {
            const user = new User({
                name,
                email,
                batch,
                section,
                password,
            })
            user.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({message: "success"})
                }
            })
        }
    })
    
})

app.listen(9002, () => {
    console.log("started")
})