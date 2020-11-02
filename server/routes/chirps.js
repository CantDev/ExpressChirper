const express = require('express');
const chirpStore = require('../chirpstore')
const router = express.Router();



//more specific routes up top 
router.get('/:id', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
});
/*
 https: localhost:3000/api/users/
*/

router.post('/', (req, res) => {
    chirpStore.createChirp(req.body);
    res.sendStatus(200);
});


/*
EDIT USER BY ID
http://localhost/3000/api/users/1
*/
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = chirpStore.GetChirp(id);

    if (!chirp || Object.keys(chirp).length === 0) {
        return res.sendStatus(404);
    }

    chirpStore.UpdateChirp(id, req.body);

    return res.sendStatus(200);
});



router.delete('/:id', (req, res) =>{
    let id = req.params.id
    if (id) {
        chirpStore.DeleteChirp(id)
        res.send(chirpStore.GetChirps())
    } else {
        res.sendStatus(404)
    }

})

module.exports = router;