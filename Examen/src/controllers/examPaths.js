class General {
    Index(req, res){
        res.sendFile('index.html', {root: __dirname }); 
    }

    Autor(req, res){
        res.json({
            alumno:"FADLTV",
            servicio:"ECS en AWS"
        });
    }
}

module.exports = new General();