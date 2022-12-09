// JavaScript source code

window.onload = () => 
{

    let camara = document.querySelector('a-camera');
    camara.addEventListener('gps-camera-update-positon',()=>
    {
        let div = document.getElementById('mensaje');
        div.innerHTML = "prueba";
    }
    cargarModelos()     
});

function cargarModelos()
{
    let modelos = 
    [
        {
            latitud: 37.192249,
            longitud: -3.616615,
            color: "yellow",
            
        },

        {
             latitud: 37.192249,
             longitud: -3.616615,
             color: "yellow",
             
        },

        {
             latitud: 37.192249,
             longitud: -3.616615,
             color: "yellow",
             
        },
       
    ];
}
    
    //let latitud: 37.19219021640692,
    //let longitud: -3.6173989106522724,

    for(var i = 0; i<modelos.length; i++)
    {

        var model = document.createElement('a-box');

        model.setAttribute('material','color:'+modelos[i].color);

        model.setAttribute('scale', '0.2 0.2 0.2');

        model.setAttribute('gps-entity-place', `latitude: ${modelos[i].latitud}; longitude: ${modelos[i].longitude};`);

        var scene = document.querySelector('a-scene');
        scene.appendChild(model);
    }
}
