const express = require("express")
const livroRouter = require("./routes/livro")

const app = express()

app.use('/livros', livroRouter)

const port = 8000

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})