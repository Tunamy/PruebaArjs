// JavaScript source code
window.onload = () => 
{
    cargarModelos()     
};

function cargarModelos()
{
    
    let latitud: 37.19219021640692,
    let longitud: -3.6173989106522724,

    var model = document.createElement('a-box');

    model.setAttribute('material','color.yelow');

    model.setAttribute('scale', '0.5 0.5 0.5');

    model.setAttribute('gps-entity-place', `latitude: ${latitud}; longitude: ${longitud};`);

    let scene = document.querySelector('a-scene');
    scene.appendChild(model);
}