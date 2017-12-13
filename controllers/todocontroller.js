const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const data = [{item:"Item one"},{item:"Item Two"},{item:"Item Three"}];

module.exports = function(app) {
    app.get("/todo", (req,res)=>{
        res.render("todo",{todos:data}); 
    });

    app.post("/todo",urlencodedParser,(req,res)=>{
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',function(req,res){
        
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item;
        });

        res.json(data);
    });
}