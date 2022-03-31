const express = require('express');
var config = require("../package.json");

const router = express.Router();

router.get('/',(req, res) => {
    res.json({ 
        name: config.name,
        version: config.version
    });
});

module.exports = router;