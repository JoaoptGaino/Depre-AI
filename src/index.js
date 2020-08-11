const brain = require('brain.js');
const data = require('./data.json');

const net = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.emotion
}));

net.train(trainingData, {
    iterations: 200
});
const response = net.run("I'm sad");

if (response == "") {
    console.log("No response");
} else {
    console.log(`Category = ${response}`);
}