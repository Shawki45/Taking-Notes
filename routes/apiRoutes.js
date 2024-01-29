const router = require('express').Router();

// Import our modular routers for notes and /feedback
const noteRouter = require('./note');


router.use('/note', noteRouter);


module.exports = router;
