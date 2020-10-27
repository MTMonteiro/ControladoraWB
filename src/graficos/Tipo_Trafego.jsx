const dataPie = {
    labels: ['TCP:443', 'UDP:53', 'TCP:80'],
    datasets: [{
        label: '# of Votes',
        data: [30, 1, 15],
        backgroundColor: [
        '#56A668', 
        '#C52B2B',   
        '#424242'
        ],
        borderColor: [
            'white',
            'white',
            'white'
        ],
        borderWidth: 1.2

    }]
}

module.exports = {
    dataPie,
  };