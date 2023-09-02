const express = require('express');
const app = express();
const PORT = 3001;

const cookieParser = require('cookie-parser'); 
const groceriesRoute = require('./routes/groceries');
const marketRoute = require('./routes/market');
const practiseRoute = require('./routes/practise');
const newRoute = require('./routes/new');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

/*
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
});
*/


app.use('/api', groceriesRoute);
app.use('/api', marketRoute);
app.use('/api', practiseRoute );
app.use('/api', newRoute);


app.listen(PORT, () => console.log(`Running Express JS on ${PORT}!`));

/*
const apps = [
    {
        "name": "Facebook",
        "year": 1980
    }, 
    {
        "name": "Whatsapp",
        "year": 2012
    }
]

app.get('/applications', (request, response) => {
    response.send(apps);
});

app.get('/applications/:name', (request, response) => {
    const { name } = request.params;
    console.log(apps)
    const appsName = apps.find((app) => app.name === name);
    response.send(appsName);
})

app.post('/applications', (request, response) => {
    const data = request.body.data;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        apps.push(element)
    }
    console.log(apps)
    response.send(201);
});
*/