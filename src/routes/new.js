const { Router, request } = require('express');
const router = Router();

const UCLDraw = [
    {
        club: "Manchester United",
        year: 2000
    },
    {
        club: "Bayern Munich",
        year: 1920
    },
    {
        club: 'Atletico Bilbao',
        year: 2047
    }
]

router.get('/clubs/all', (request, response) => {
    response.send(UCLDraw);
});

router.get('/clubs/:club', (request, response) => {
    const { club } = request.params;
    const UCLClubs = UCLDraw.find((c) => c.club === club);
    response.send(UCLClubs); 
})

router.get('/clubs', (request, response) => {
    const { year } = request.query;
    const Club = year;
    if(!isNaN(year)) {
        const checkedClubs = UCLDraw.filter((c) => c.year <= Club);
        response.send(checkedClubs);
    }
})

router.post('/clubs', (request, response) => {
    UCLDraw.push(request.body);
    response.send(201);
})

const myGoods = [
    {
        name: 'clothes',
        type: 'Native',
        quantity: 30
    },
    {
        name: 'clothes',
        type: 'Suit',
        quantity: 13
    },
    {
        name: 'clothing',
        type: 'Gown',
        quantity: 22
    }
]

// GET request to know all the goods present in 'myGoods' Array
router.get('/goods/all', (request, response) => {
    response.send(myGoods);
})

// Route Parameter to search for any name in 'myGoods' Array
router.get('/goods/:name', (request, response) => {
    const { name } = request.params;
    const findName = myGoods.find((s) => s.name === name);
    response.send(findName);
});

    // Query Parameter to find any quantity less than or equal to the inputed number of quantity using ? sign
router.get('/goods', (request, response) => {
    const { quantity } = request.query;
    const parsedQuantity = parseInt(quantity);
    if(!isNaN(quantity)) {
        const filteredQuantity = myGoods.filter((q) => q.quantity <= parsedQuantity);
        response.send(filteredQuantity);
    }
});

router.post('/goods/all', (request, response) => {
    myGoods.push(request.body);
    response.send(201);
});


const wCountries = [
    {
        name: 'Germany',
        capital: 'Berlin',
        size: 34554
    },
    {
        name: 'Switzerland',
        capital: 'Bern',
        size: 39932
    },
    {
        name: 'Russia',
        capital: 'Moscow',
        size: 84848
    },
    {
        name: 'Benin',
        capital: 'Porto Novo',
        size: 34003
    }
];

router.get('/countries/all', (request, response) => {
    response.send(wCountries);
});

router.get('/countries/all/:capital', (request, response) => {
    const { capital } = request.params;
    const findCountryCapital = wCountries.find((cptl) => cptl.capital === capital);
    response.send(findCountryCapital);
})

router.get('/countries', (request, response) => {
    const { size } = request.query;
    const parsedSize = parseInt(size);
    if(!isNaN(size)) {
        const checkedSize = wCountries.filter((c) => c.size <= parsedSize);
        response.send(checkedSize);
    }
})

router.post('/countries', (request, response) => {
    wCountries.push(request.body);
    response.send(201);
})


const myUsers = [
    {
        name: 'Ibrahim Taofeek',
        accountDuration: 6
    },
    {
        name: 'Cynthia Ikedira',
        accountDuration: 3
    },
    {
        name: 'Daramola Esther',
        accountDuration: 4
    }
];

router.get('/user/all', (request, response) => {
    response.send(myUsers);
});

router.get('/user/:name', (request, response) => {
    const { name } = request.params;
    const findUsersName = myUsers.find((user) => user.name === name);
    response.send(findUsersName);
});

router.get('/user', (request, response) => {
    const { accountDuration } = request.query;
    const parsedUsers = parseInt(accountDuration);
    if(!isNaN(accountDuration)) {
        const checkedUsers = myUsers.filter((account) => account.accountDuration <= parsedUsers);
        response.send(checkedUsers);
    } else response.send(myUsers);
})

router.post('/user/all', (request, response) => {
    myUsers.push(request.query);
    response.send(201);
})
module.exports = router;