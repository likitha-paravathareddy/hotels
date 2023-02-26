const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())

const findShort = require('./shortest');

const graph = JSON.parse(fs.readFileSync("./flight.json"))
test(`Cheapest flight from 'JK' to 'GOP' should be 3000 with JK-TIR-GOP`, () => {
  const shortestPath = findShort(graph, 'JK', 'GOP');
  expect(shortestPath).toEqual({
    cost: 3000,
    path: ['JK', 'TIR','GOP'],
  });
});
test(`Cheapest flight from 'JK' to 'GOP' should be 3000 with JK-TIR-GOP`, () => {
  const shortestPath = findShort(graph, 'GOP', 'JK');
  expect(shortestPath).toEqual({
    cost: 6300,
    path: ['GOP','JK'],
  });
});