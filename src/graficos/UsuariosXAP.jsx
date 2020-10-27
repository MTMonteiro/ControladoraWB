var json = require("../data/file.json");

// grafico 1
var dataSales = {
  datasets: [
    {
      label: "AP01",
      data: json["10.200.0.21"].Lusuarios,
      backgroundColor: "rgba(6, 85, 19, 0.2)",
      borderColor: "rgba(6, 85, 19, 1)",

      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "AP02",
      data: json["10.200.0.22"].Lusuarios,
      backgroundColor: "rgba(55, 55, 55, 0.2)",
      borderColor: "rgba(55, 55, 55, 1)",

      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "AP03",
      data: json["10.200.0.23"].Lusuarios,
      backgroundColor: "rgba(55, 55, 55, 0.2)",
      borderColor: "rgba(55, 55, 55, 1)",

      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "AP04",
      data: json["10.200.0.24"].Lusuarios,
      backgroundColor: "rgba(55, 55, 55, 0.2)",
      borderColor: "rgba(55, 55, 55, 1)",

      pointRadius: 0,
      borderWidth: 2,
    },
  ],

  labels: json.label1,
};

module.exports = {
  dataSales,
};
