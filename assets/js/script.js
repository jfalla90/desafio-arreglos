const menuHeader = function () {

const listaMenu = [ 'Inicio', 'Venta', 'Alquiler']

let d = document.querySelector("#listaMenu")

d.innerHTML = `
<li><a href="./index.html">${listaMenu[0]}</a></li>
<li><a href="./assets/pages/propiedades_venta.html">${listaMenu[1]}</a></li>
<li><a href="./assets/pages/propiedades_alquiler.html">${listaMenu[2]}</a></li>
`;
};

menuHeader();

let inicioAlquileres = [
    {
    nombre: 'Apartamento con sala amplia',
    src: './assets/img/renta_1.jpg',
    descripcion: 'Aprovecha el verano o un fin de semana en este apartamento con amplia sala',
    ubicacion: 'Av. Las artes 251 Dpto. 205 - San Borja',
    habitaciones: 2,
    baño: 2,
    costo: '$150 x noche',
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento con sala Vintage',
    src: './assets/img/renta_2.jpg',
    descripcion: 'El estilo vintage nunca pasa de moda, relajate una noche con amistades o en pareja, en una ubicación céntrica',
    ubicacion: 'Av. Grau 251 - Barranco',
    habitaciones: 2,
    baño: 3,
    costo: '$200 x noche',
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa minimalista',
    src: './assets/img/renta_3.jpg',
    descripcion: 'Porque menos es más, pasa un momento de relajo, disfruta de las instalaciones con colores que transmiten paz',
    ubicacion: 'Av. La Molina 5012 - La Molina',
    habitaciones: 3,
    baño: 2,
    costo: "$250 x  noche",
    smoke: false,
    pets: true
    }
]

const depEnAlquiler= function(){
    const cardAlquiler= document.getElementById('casaAlquilada');
    let htmlAlquiler = '';
    for (let alquiler of inicioAlquileres) {
        let fumar="";
        
        if(alquiler.smoke === true){
            fumarAlquiler=`<p style = "color:green ; font-weight:bold"><i class="fa-solid fa-smoking"></i> Permitido fumar</p>`
        }else{
            fumarAlquiler=`<p style = "color:red ; font-weight:bold"><i class="fa-solid fa-ban-smoking"></i> Prohibido fumar</p>`
        };

        let mascotas="";
        if(alquiler.pets === true){
            mascotaAlquiler=`<p style = "color:green ; font-weight:bold"><i class="fa-solid fa-paw"></i> Permitido mascotas</p>`
        }else {
            mascotaAlquiler=`<p style = "color:red ; font-weight:bold"><i class="fa-solid fa-ban"></i> Prohibido mascotas</p>`
        };

        htmlAlquiler +=`
        <div class="cardPropiedades">
            <img src="${alquiler.src}"/>
            <h4>${alquiler.nombre}</h4>
            <p>${alquiler.descripcion}</p>
            <p><i class="fa-solid fa-bed"></i> ${alquiler.habitaciones} || <i class="fa-solid fa-toilet"></i> ${alquiler.baño}</p>
            <p>${alquiler.ubicacion}</p>
            <p>${alquiler.costo}</p>
            ${fumarAlquiler}
            ${mascotaAlquiler}
        </div>
        `;
    };

    cardAlquiler.innerHTML=htmlAlquiler;
}

depEnAlquiler();

let inicioVentas = [
    {
    nombre: 'Casa estilo castillo',
    src: './assets/img/venta_1.jpg',
    descripcion: 'Casa ideal para relajarte, a la vez de acercarte al trabajo, todo a 10 minutos en auto.',
    ubicacion: 'Los Gorriones 250 - San Isidro',
    habitaciones: 3,
    baño: 3,
    costo: "$1'250,000",
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa Verano',
    src: './assets/img/venta_2.jpg',
    descripcion: 'Esta casa lo tiene todo, ubicación central entre paisaje verde y listo para desconectarte',
    ubicacion: 'Los Sauces 150 - Cieneguilla',
    habitaciones: 5,
    baño: 4,
    costo: "$3'500,000",
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa 2 castillos',
    src: './assets/img/venta_3.jpg',
    descripcion: 'Minimalista, amplio, acogedor, familiar y todas las experiencias por vivir',
    ubicacion: 'Los Alison 350 - Chosica',
    habitaciones: 6,
    baño: 5,
    costo: "$4'000,000",
    smoke: false,
    pets: true
    }
];

const depEnVenta= function(){
    const cardEnVenta= document.getElementById('casaEnVenta');
    let htmlEnVenta = '';
    for (let venta of inicioVentas) {
        let cigarro="";
        
        if(venta.smoke !== true){
            cigarroVenta=`<p style = "color:green ; font-weight:bold"><i class="fa-solid fa-smoking"></i> Permitido fumar</p>`
        }else{
            cigarroVenta=`<p style = "color:red ; font-weight:bold"><i class="fa-solid fa-ban-smoking"></i> Prohibido fumar</p>`
        };

        let animales="";
        if(venta.pets !== true){
            animalesVenta=`<p style = "color:green ; font-weight:bold"><i class="fa-solid fa-paw"></i> Permitido mascotas</p>`
        }else {
            animalesVenta=`<p style = "color:red ; font-weight:bold"><i class="fa-solid fa-ban"></i> Prohibido mascotas</p>`
        };

        htmlEnVenta +=`
        <div class="cardPropiedades">
            <img src="${venta.src}"/>
            <h4>${venta.nombre}</h4>
            <p>${venta.descripcion}</p>
            <p><i class="fa-solid fa-bed"></i> ${venta.habitaciones} || <i class="fa-solid fa-toilet"></i> ${venta.baño}</p>
            <p>${venta.ubicacion}</p>
            <p>${venta.costo}</p>
            ${cigarroVenta}
            ${animalesVenta}
        </div>
        `;
    };

    cardEnVenta.innerHTML=htmlEnVenta;
}

depEnVenta();