import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('<b>Meu Primeiro servidor NodeJS </br>Hospendando em Heroku!</b> </br><i>' + new Date() + '</i>');
});

app.listen(3000);

export default app;
