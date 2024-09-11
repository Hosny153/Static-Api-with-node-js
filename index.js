const express = require("express")
const Port = 3000
const app = express()

const Products =
    [
        { Id: 1, Name: "Laptop", Brand: "Hp", Price: "1000" },
        { Id: 2, Name: "Pc", Brand: "Asus", Price: "2000" },
        { Id: 3, Name: "Mobile", Brand: "Apple", Price: "3000" },
        { Id: 4, Name: "Tablet", Brand: "Oppo", Price: "4000" },
        { Id: 5, Name: "Screen", Brand: "Samsung", Price: "5000" },
    ]

app.use(express.json())


app.get("/Products", (req, res) => {
    res.json(Products)
})

app.post("/AddProducts", (req, res) => {
    Products.push(req.body)
    res.json({ message: "Product added successfully" })
})


app.put("/UpdProducts", (req, res) => {
    const { Id, Name, Brand, Price } = req.body
    let index = Products.findIndex((ele) => ele.Id == Id)
    if (index < 0) {
        res.json({ message: "Product not found" })
    } else {
        Products[index].Id = Id;
        Products[index].Name = Name;
        Products[index].Brand = Brand;
        Products[index].Price = Price;
    }
})



app.delete("/DelProducts", (req, res) => {
    let index = Products.findIndex((ele) => ele.Id == req.body.Id)
    if (index < 0) {
        res.json({ message: "Product not found" })
    } else {
        Products.splice(index, 1);
        res.json({ message: "Product deleted successfully" })
    }
})


app.listen(Port, () => {
    console.log(`Server is runing on port ${Port}`)
})

