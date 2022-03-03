//Captura del Click
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault()

        let valueInput = $("#pokemonInput").val();
       
        //Metodo AJAX jquery
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + valueInput,
            success: function(data){
                let nombre = data.name;
                let image = data.sprites.front_default;
                let peso = data.weight;

                $("#pokeInfo").html(`  
                <div class="text-center">
                <h3>${nombre}</h3>
                <img src="${image}" alt="">
                <h6>Peso:${peso}</h6>
              </div>`);


              //Propio arreglo de objetos para calzar datos en canvas.
                let estadisticas = [];

                data.stats.forEach(function (s) {
                estadisticas.push({
                label: s.stats.name,
                 y : s.base_stat,
                })
                            });


             //Objeto de configuracion para el grafico
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
                },
            ],
            
            },

            //Introduccion del grafico de js canvas
            let chart = new CanvasJS.Chart("pokeStats", config);
            chart.render();

             
            },
        });
    });
});



