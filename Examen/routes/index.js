const express = require('express');
const router = express.Router();


//Importando
const general = require('../src/controllers/examPaths');
const htmlcreate = require('../src/controllers/htmlcreate');


//Endpoint disponibles
router.get('/',general.Index);
router.get('/autor',general.Autor);

module.exports = router;