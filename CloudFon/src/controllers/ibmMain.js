class IBMMain {
    Index(req, res){
        res.json(
            { 
                version: "1.0",
                paths: [
                    "/sendtext",
                    "/autor"
                ] 
            }
            ); 
    }

    Autor(req, res){
        res.json({
            alumno:"FADLTV",
            servicio:"Cloud Foundry en IBM Cloud"
        });
    }
}

module.exports = new IBMMain();