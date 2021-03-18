require('dotenv').config();

var fintext;

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const {
    IamAuthenticator
} = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
    }),
    serviceUrl: 'https://api.us-east.tone-analyzer.watson.cloud.ibm.com',
    disableSslVerification: true,
});

class ibmCloudF {
    //L función entera será asincrona para poder esperar bien el resultado.
    async TextAn(req, res) {

        const toneParams = {
            toneInput: {
                'text': req.body.text
            },
            contentType: 'application/json',
        };

        //Es necesario hacer una promesa para que funcione
        const finalText = await new Promise((resolve, reject) => {

            toneAnalyzer.tone(toneParams)
                .then(async toneAnalysis => {
                    //Analisis del texto
                    fintext = await JSON.stringify(toneAnalysis, null, 2);
                    //Convirtiendo el resultado en objeto
                    fintext = await JSON.parse(fintext);
                    /**Sacando del objeto los datos queridos
                     * Estructura del objeto
                     * Objeto
                     * ->resultados
                     *   ->colleción de emociones
                     *     ->arreglo de todas las emociones entontradas, se usa solo la primera
                     *       ->nombre de la empción
                     */
                    fintext = "Emoción principal: " + fintext.result.document_tone.tones[0].tone_name;
                    resolve(fintext);
                })
                .catch(err => {
                    console.log('error:', err);
                    //Texto de error custom
                    fintext = 'Tenemos un error: ' + err;
                    reject(fintext);
                });

        });


        res.send(finalText);
    }


}

module.exports = new ibmCloudF();