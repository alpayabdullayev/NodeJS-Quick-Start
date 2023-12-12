import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
let counter = 9

app.use(cors())

let users = [
    {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
        },
        {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
        },
        {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
        },
        {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
        },
        {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
        },
        {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
        },
        {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
        },
        {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
        }
];

//get
app.get("/users", (req, res) => {
  res.send(users);
});


//get by id
app.get("/users/:id", (req, res) => {
  const {id} = req.params
  const item = users.find(x=>x.id === +id)
  res.send(item);
});

app.put("/users/:id",(req,res)=>{
    const {id} = req.params
    users=users.filter(x=>x.id !=id)

    const updateUser={
        id:id,
        description:req.body.description,
        name:req.body.name,

    }
    
    users.push(updateUser)
    users.sort((a,b)=> a.id - b.id)
    res.send(users)
})

//delete
app.delete("/users/:id",(req,res)=>{
    const {id} = req.params
    const userId = users.find(x=>x.id === +id)

    if (userId) {
        const DeletedUsers = users.filter(x=>x.id !== +id)
        res.send(DeletedUsers)
        res.status(200).json({message:"user silindi"})
    }
    else{
        res.status(404).json({message:"user tapilmadi"})
    }
})

// app.delete("/users/:id",(req,res)=>{
//     const {id} = req.params
//     users = users.filter(x=>x.id !== +id)
//     res.send(users)
// })


//post
app.post("/users", (req, res) => {
    const userObject = {
      id: counter++,
      description: req.body.description,
      name: req.body.name,
    };
  
    users.push(userObject);
    res.send(users);
});


// app.post("/",(req,res)=>{
//     users.push({id:id++ ,...req.body})
//     res.send(users)z
// })



app.get("*", (req, res) => {
    res.send("404 bele page yoxud");
});

app.get("*", (req, res) => {
    res.status(404).json({message:"auodfaoiubfoab"})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
