const express = require("express")
const livroRouter = require("./routes/livro")
const favoritoRouter = require("./routes/favorito")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/livros', livroRouter)
app.use('/favoritos', favoritoRouter)

const port = 8000

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})