//Propio arreglo de objetos para calzar datos en canvas.
let estadisticas = []

data.stats.forEach(function (s) {
    estadisticas.push({
        label: s.stats.name,
        y : s.base_stat,
    })
    
});
let config = {
    AnimationEnabled : true,
    title : {
        text : "Estadisticas",

    },
    axisY: {
        title: "Valor",
    },
    axisX: {
        title: "column",
    },
    data: [{
        type: "column",
        dataPoints: estadisticas
    }],

},