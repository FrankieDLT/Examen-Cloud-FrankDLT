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
    TextAn(req, res) {
        
        const toneParams = {
            toneInput: {
                'text': req.body.text
            },
            contentType: 'application/json',
        };

        toneAnalyzer.tone(toneParams)
            .then(toneAnalysis => {
                console.log(JSON.stringify(toneAnalysis, null, 2));
                fintext = JSON.stringify(toneAnalysis, null, 2);
                fintext = JSON.parse(fintext);
                console.log("Emoción principal: " + fintext.result.document_tone.tones[0].tone_name);
                fintext = "Emoción principal: " + fintext.result.document_tone.tones[0].tone_name;
            })
            .catch(err => {
                console.log('error:', err);
                fintext = 'Tenemos un error: ' + err;
            });


        res.send(fintext);
    }


}

module.exports = new ibmCloudF();