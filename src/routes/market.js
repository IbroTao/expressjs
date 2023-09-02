const { Router} = require('express');

const router = Router();

const supermarkets = [
    {
        "id": 0,
        "name": "ShopRite",
        "miles": 2.4
    },
    {
        "id": 1,
        "name": "Xclusive",
        "miles": 0.4    
    },
    {
        "id": 2,
        "name": "Mr. Bigges",
        "miles": 3.5   
     }
]

router.get('/markets', (request, response) => {
    const { name } = request.params;
    const findName = supermarkets.find((s) => s.name === name);
    response.send(findName);
})

router.get('/markets', (request, response) => {
    const { miles } = request.query;
    const parsedMiles = parseInt(miles);
    if(!isNaN(parsedMiles)) {
        const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
        response.send(filteredStores);
    } else response.send(supermarkets);
});

module.exports = router;    