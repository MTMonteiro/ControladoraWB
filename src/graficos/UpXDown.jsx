var json = require('../data/file.json');

const dataUpDown = {
    datasets: [{
      label: 'aps up / down',
        data: [json.up, json.down],
        backgroundColor:["green", "red"]
    }],
    labels: [
        'UP',
        'DOWN',
    ],
    
  };

module.exports = {
    dataUpDown,
  };