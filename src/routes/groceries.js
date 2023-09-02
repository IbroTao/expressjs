const { Router } = require('express');

const router = Router();

const groceryList = [
    {
        "item": "milk",
        "quantity": 2
    },
    {
        "item": "cereal",
        "quantity": 1
    },
    {
        "item": "pop-tarts",
        "quantity": 2
    }
]

router.get('/groceries', (request, response) => {
    response.cookie('Visited', true, {
        maxAge: 60000,
    })
    response.send(groceryList);
});

router.get('/groceries/:item', (request, response) => {
    console.log(request.headers.cookie);
    const { item } = request.params;
    const Items = groceryList.find((i) => i.item === item);
    response.send(Items); 
})

router.post('/groceries', (request, response) => {
    groceryList.push(request.body);
    response.send(201);
})


const mySchools = [
    {
        "School": "FUL",
        "Course": "Computer Science",
        "Location": "Lokoja",
        "Year":  2025
    },
    {
        "School": "GSSSI",
        "Course": "Science",
        "Location": "Isanlu",
        "Year": 2021
    },
    {
        "School": "ERTNPS",
        "Course": "General",
        "Location": "Isanlu",
        "Year": 2015
    }
];

router.get('/schools', (request, response) => {
    response.send(mySchools);
})

router.get('/schools/:Course', (request, response) => {
    const { Course } = request.params;
    const sch = mySchools.find((s) => s.Course === Course);
    response.send(sch);
});

router.get('/schools', (request, response) => {
    const School = request.query.school;
    const myschool = School;
    if(!isNaN(myschool)) {
        const checkedSchools = schools.filter((s) => s.school <= myschool);
        response.send(checkedSchools);
    } else response.send(mySchools);
})

router.get('/schools/:School', (request, response) => {
    const { School } = request.params;
    const find = mySchools.find((s) => s.School === School);
    response.send(find);
});

router.get('/schools/:Location', (request, response) => {
    const { Location } = request.params;
    const find = mySchools.find((l) => l.Location === Location);
    response.send(find);
})
module.exports = router;