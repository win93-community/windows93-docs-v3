let express = require("express")
let app = express()
app.use(express.static("docs"))
app.listen(process.env.PORT || 3000)