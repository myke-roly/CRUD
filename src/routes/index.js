// Routes
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Tile": "Hello world"});
});

module.exports = router;