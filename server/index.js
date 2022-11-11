const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createPost, deletePost, getPosts, changeAuthor} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/quote", createPost)
app.delete("/api/quote/:id", deletePost)
app.get("/api/quote", getPosts)
app.put("/api/quote/:id", changeAuthor)



app.listen(4000, () => {
    console.log('Adun Toridas, from the shadows I come!')
    console.log("Server running on 4000")
    console.log('What would you ask of us?')
});
