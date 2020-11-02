const express = require('express');
//import => requires 'import react from react'
let chirpsRouter = require('./chirps');
let router = express.Router();
router.use('/chirps', chirpsRouter);


//export default router
module.exports = router;