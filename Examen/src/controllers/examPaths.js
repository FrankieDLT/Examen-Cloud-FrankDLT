class General {
    Index(req, res){
        res.json(
            { 
                version: "1.0",
                paths: [
                    "/autor"
                ] 
            }
            ); 
    }

    Autor(req, res){
        res.json({
            alumno:"FATV",
            servicio:"ECS en AWS"
        });
    }
}

module.exports = new General();