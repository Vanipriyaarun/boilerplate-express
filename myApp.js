let express = require('express');
let app = express();

app.get("/",(req,res)=>{
    res.send("Hello World")
})

// const listener = app.listen(process.env.PORT || 5000, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });




































 module.exports = app;
