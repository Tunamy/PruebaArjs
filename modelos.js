// JavaScript source code
window.onload = () => 
{
    cargarModelos()     
};

function cargarModelos()
{
    let modelos = 
    [
        {
            latitud: 37.19219021640692,
            longitud: -3.6173989106522724,
            color: "yellow",
            escala: 0.2
        },

        {
             latitud: 37.19219021640692,
             longitud: -3.6173989106522724,
             color: "yellow",
             escala: 0.2
        },

        {
             latitud: 37.19219021640692,
             longitud: -3.6173989106522724,
             color: "yellow",
             escala: 0.2
        },
       
    ];
}
    
    //let latitud: 37.19219021640692,
    //let longitud: -3.6173989106522724,

    for(let i = 0; i<modelos.length; i++)
    {

        var model = document.createElement('a-box');

        model.setAttribute('material','color:'+modelos.[i].color);

        model.setAttribute('scale', '0.2 0.2 0.2');

        model.setAttribute('gps-entity-place', `latitude: ${modelos.[i].latitud}; longitude: ${modelos.[i].longitude};`);

        let scene = document.querySelector('a-scene');
        scene.appendChild(model);
    }
}