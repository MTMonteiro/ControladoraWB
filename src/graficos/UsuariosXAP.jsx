var json = require("../data/file.json");

// grafico 1
export var dataSales = {
  datasets: [
    {
      label: "AP01",
      data: json["10.200.0.21"].Lusuarios,
      borderColor: "#F70F0F",
      fill: false,
      pointRadius: 0,
      borderWidth: 4,
    },
    {
      label: "AP02",
      data: json["10.200.0.22"].Lusuarios,
      borderColor: "#68D8F1",
      fill: false,
      pointRadius: 0,
      borderWidth: 4,
    },
    {
      label: "AP03",
      data: json["10.200.0.23"].Lusuarios,
      borderColor: "#8AE663",
      fill: false,
      pointRadius: 0,
      borderWidth: 4,
    },
    {
      label: "AP04",
      data: json["10.200.0.24"].Lusuarios,
      borderColor: "#F7E229",
      fill: false,
      pointRadius: 0,
      borderWidth: 4,
    },
  ],

  labels: json.label1,
};

export const chartDefaultOptions = {
	

	// scales:{
	// 	// yAxes: [{
	// 	// 	ticks: {
	// 	// 		display: false,
	// 	// 		maxTicksLimit: 5,
	// 	// 		beginAtZero: true,
	// 	// 	},
	// 	// 	gridLines: {
	// 	// 		drawBorder: false,
	// 	// 		lineWidth: 0.9,
	// 	// 		color: "rgba(0,0,0,0.4)",
	// 	// 		tickMarkLength: 15,
	// 	// 		zeroLineWidth: 2,
	// 	// 		zeroLineColor: "rgba(0,0,0,0.5)"					
	// 	// 	}
	// 	// }],
	// 	// xAxes: [{
	// 	// 	type: 'time',
	// 	// 	time: {
	// 	// 		unit: 'minute',
	// 	// 		displayFormats:{
	// 	// 			minute: 'HH:mm'
	// 	// 		},
	// 	// 	},
	// 	// 	gridLines: {
	// 	// 		display: false,
	// 	// 		drawBorder: false,
	// 	// 		tickMarkLength: 15,
	// 	// 	},
	// 	// 	ticks:{
	// 	// 		display: true,
	// 	// 		autoSkip: true,
  //   //     		maxTicksLimit: 15,
  //   //     		beginAtZero: true
	// 	// 	}
	// 	// }]
	// },

	// maintainAspectRatio: false, 
	
	layout: {
		padding:{
	    	left: 0,
        	right: 0,
        	top: 0,
         	bottom: 0
        }
    }
}

// module.exports = {
//   dataSales,
// };
