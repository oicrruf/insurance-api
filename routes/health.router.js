const express = require('express');
const appInfo = require("../package.json");

const router = express.Router();

router.get('/',(req, res) => {
    const { name, version} = appInfo;
    res.json({ 
        name: name,
        version: version
    });
});

module.exports = router;