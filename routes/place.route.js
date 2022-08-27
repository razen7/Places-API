const PlaceModel = require("../models/places.model");

// reference to router class
const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('This is a backend app to be used with Postman');
});

// Add a place
router.post('/addPlace', async (req, res) => {
    let { name, city, state } = req.body;
    const newPlace = new PlaceModel({ name, slug: name.replaceAll(' ', '-') + Date.now(), city, state });

    try {
        savePlace = await newPlace.save();
        res.status(201).send('Place created with id: ' + savePlace.id);
    } catch (e) {
        res.status(501).send(e.message);
    }
})

// Get a specific place
router.post('/findPlace', async (req, res) => {
    let { name } = req.body;

    try {
        await PlaceModel.find().where('name').eq(name).exec(function (err, docs) {
            if (docs) {
                // 200 - 0k
                res.status(200).send(docs);
            } else {
                // 204	- No Content
                res.status(204).send('no results');
            }
        });
    } catch (e) {
        res.status(501).send(e.message);
    }
})


// List places and filter them by name or city
router.post('/listPlaces', async (req, res) => {
    let { name, city } = req.body;
    let filters = [];
    if (name) {
        filters.push({ name: name });
    }
    if (city) {
        filters.push({ city: city });
    }
    try {
        await PlaceModel
            .find({ $or: filters })
            .exec(function (err, docs) {
                if (docs) {
                    // 200 - 0k
                    res.status(200).send(docs);
                } else {
                    // 204	- No Content
                    res.status(204).send('no results');
                }
            });
    } catch (e) {
        res.status(501).send(e.message);
    }
});

module.exports = router;