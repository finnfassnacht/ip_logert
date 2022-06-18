var express = require('express');
var app = express();
const router = express.Router();
app.use(express.json())
router.get("/", (request,response) => {
    var ipAddress = request.connection.remoteAddress;
    var server_res = {"IP":ipAddress};
    response.json(server_res)
    response.end()
})
app.use("/IP", router)
app.listen(3000)