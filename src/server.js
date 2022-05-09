const app = require("./index");

const port=8080;
const connect = require("./config/db");

app.listen(port, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening on "+port)
});
