const app = require("./src/index")
const { connectDb } = require("./db/db")

connectDb()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
