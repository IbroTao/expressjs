const { Router, request } = require('express');

const router = Router();

const books = [
    {
        "subject": "Physics",
        "copies": 5,
        "miles": 0.6
    },
    {
        "subject": "Biology",
        "copies": 4,
        "miles": 2.6
    },
    {
        "subject": "English",
        "copies": 10,
        "miles": 5.4

    },
    {
        "subject": "Mathematics",
        "copies": 12,
        "miles": 7.6
    },
    {
        "subject": "Literature",
        "copies": 19,
        "miles": 12.7
    }
];

router.get('/books', (request, response) => {
    response.cookie('visited', true, {
        maxAge: 10000,
    });
    response.send(books);
});

router.get('/books/:subject', (request, response) => {
    console.log(request.cookies);
    const { subject } = request.params;
    const bookType = books.find((b) => b.subject === subject);
    response.send(bookType); 
});

router.get('/books', (request, response) => {
    const { miles } = request.query;
    const parsedMiles = parseInt(miles);
    if(!isNaN(miles)) {
        const filteredBooks = books.filter((b) => b.miles <= parsedMiles);
        response.send(filteredBooks);
    } else response.send(books);
})

router.post('/books', (request, response) => {
    books.push(request.body);
    response.send(201);
})

const users = [
    {
        "Username": "Michael Lee",
        "Password": ".........................."
    },
    {
        "Username": "Jeremy Sophie",
        "Password": "x749rh434khrjrjmqia"
    },
    {
        "Username": "Ibrak Yhykms",
        "Password": "tiger"
    }
];

router.get('/users', (request, response) => {
    response.send(users);
})

router.get('/users/:Username', (request, response) => {
    const { Username } = request.params;
    const find = users.find((u) => u.Username === Username);
    response.send(find);
});

/*
router.get('/users/:Password', (request, response) => {
    const { Password } = request.params;
    const findPassword = users.find((p) => p.Password === Password);
    response.find(findPassword);
})
*/

const myCourses = [
    {
        "name": "CSC 203",
        "title": "Discrete Mathematics",
        "creditunits": 3
    },
    {
        "name": "CSC 205",
        "title": "Digital Logic Design",
        "creditunits": 3
    },
    {
        "name": "CSC 211",
        "title": "Introduction to Computer Programming I (C++)",
        "creditunits": 2
    }
];

router.get('/courses/all', (request, response) => {
    response.send(myCourses);
})
router.get('/courses/:name', (request, response) => {
    const { name } = request.params;
    const findCourseName = myCourses.find((coursename) => coursename.name === name);
    response.send(findCourseName); 
});

router.get('/courses', (request, response) => {
    const { creditunits } = request.query;
    const parsedCredits = +(creditunits);
    if(!isNaN(creditunits)) {
        const checkedCourses = myCourses.filter((s) => s.creditunits <= parsedCredits);
        response.send(checkedCourses);
    } else response.send(myCourses);
});

router.post('/courses', (request, response) => {
    myCourses.push(request.body);
    response.send(201);
})

router.get('/courses', (request, response) => {
    console.log(request.query);
    response.send(myCourses);
})
module.exports = router;