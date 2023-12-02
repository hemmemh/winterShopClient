import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8010
const app = express()
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build",'index.html'))
})

app.listen(PORT)


