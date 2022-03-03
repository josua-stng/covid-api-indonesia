import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5000;
const host = 'localhost';
app.set('view engine','ejs')

// kasus harian covid indonesia
app.get('/', (req, res) => {
  fetch('https://data.covid19.go.id/public/api/update.json')
    .then((response) => response.json())
    .then((data) => {
      res.json({
        status: 200,
        error: null,
        result: data,
      });
      console.log(data);
    });
});

// kasus covid di seluruh provinsi
app.get('/covid-province', (req, res) => {
  fetch('https://data.covid19.go.id/public/api/prov.json')
    .then((response) => response.json())
    .then((data) => {
      res.json({
        status: 200,
        error: null,
        result: data,
      });
      console.log(data);
    });
});

// kasus covid harian di seluruh provinsi
app.get('/covid-province-daily', (req, res) => {
  fetch('https://data.covid19.go.id/public/api/prov_time.json')
    .then((response) => response.json())
    .then((data) => {
      res.json({
        status: 200,
        error: null,
        result: data,
      });
      console.log(data);
    });
});

// resiko covid di provinsi indonesia
app.get('/covid-province-risk', (req, res) => {
  fetch('https://data.covid19.go.id/public/api/skor.json')
    .then((response) => response.json())
    .then((data) => {
      res.json({
        status: 200,
        error: null,
        result: data,
      });
      console.log(data);
    });
});

app.listen(port, () => {
  console.log(`Your server running at http://${host}:${port}`);
});
