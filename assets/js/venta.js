let inicioVentas = [
    {
    nombre: 'Casa estilo castillo',
    src: '../img/venta_1.jpg',
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
    src: '../img/venta_2.jpg',
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
    src: '../img/venta_3.jpg',
    descripcion: 'Minimalista, amplio, acogedor, familiar y todas las experiencias por vivir',
    ubicacion: 'Los Alison 350 - Chosica',
    habitaciones: 6,
    baño: 5,
    costo: "$4'000,000",
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa Céntrica',
    src: '../img/venta_4.jpg',
    descripcion: 'Minimalista, amplio, acogedor, familiar y todas las experiencias por vivir',
    ubicacion: 'Los Alison 350 - Chosica',
    habitaciones: 6,
    baño: 5,
    costo: "$4'000,000",
    smoke: false,
    pets: true
    },
    {
    nombre: 'Casa 2 pisos con piscina',
    src: '../img/venta_5.jpg',
    descripcion: 'Minimalista, amplio, acogedor, familiar y todas las experiencias por vivir',
    ubicacion: 'Los Alison 350 - Chosica',
    habitaciones: 6,
    baño: 5,
    costo: "$4'000,000",
    smoke: true,
    pets: false
    },
    {
    nombre: 'Casa 3 modulares + piscina',
    src: '../img/venta_6.jpg',
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
    const cardEnVenta= document.getElementById('pageVenta');
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