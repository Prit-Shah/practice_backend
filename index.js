const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT | 3001
app.use(cors())
app.get("/hello", (req, res) => {
    return res.send("Hello from server")
})
app.listen(PORT, () => { console.log("Server Started" , PORT) })
exports.expressApi = functions.https.onRequest(app)
