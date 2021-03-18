const express = require('express');
const router = express.Router();

// Importar funcionamientos de endpoints
const mainPage = require('../src/controllers/ibmMain');
const sendingText = require('../src/controllers/textanalysis');

// path con ruta de los endpoint
router.get('/',mainPage.Index);
router.post('/sendtext',sendingText.TextAn);
router.get('/autor',mainPage.Autor);

module.exports = router;