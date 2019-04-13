const { Router } = require('express');
const router = Router();

const fetch  = require('node-fetch');

router.get('/', (req, res) => {
    fetch('https://reqres.in/api/users?page=4')
    .then(res => res.json())
    .then(users => res.json(users.data))
    .catch(err => {
        console.log("Hubo un problema!!!");
        res.status(500).send("Fallo al cargar los datos");
    });
});

/*
router.get('/', async (req, res) => {
    const response = await fetch('https://reqres.in/api/users');
    const users = await response.json();
    res.json(users);
});
*/


module.exports = router;