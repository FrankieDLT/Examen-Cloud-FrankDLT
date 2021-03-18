class ibmCloudF {
    TextAn(req, res) {
        const {
            frase
        } = req.body;
        
       
        res.send(req.body.text);
    }

    
}

module.exports = new ibmCloudF();