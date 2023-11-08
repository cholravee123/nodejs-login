const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes.js")

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


try{
    app.listen(4000, ()=> {
        console.log("server is running on port 4000")
    });

    app.use("/auth", routes);

} catch (err) {
    console.log("err",err);
}

const onClose = () => {
    process.exit();
};

process.on("SIGTERM", onClose);
process.on("SIGINT", onClose);
process.on("uncaughtException", onClose);


