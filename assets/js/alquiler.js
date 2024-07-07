let inicioAlquileres = [
    {
    nombre: 'Apartamento con sala amplia',
    src: '../img/renta_1.jpg',
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
    src: '../img/renta_2.jpg',
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
    src: '../img/renta_3.jpg',
    descripcion: 'Porque menos es más, pasa un momento de relajo, disfruta de las instalaciones con colores que transmiten paz',
    ubicacion: 'Av. La Molina 5012 - La Molina',
    habitaciones: 3,
    baño: 2,
    costo: "$250 x  noche",
    smoke: false,
    pets: false
    },
    {
    nombre: 'Habitacion con escritorio',
    src: '../img/renta_4.jpg',
    descripcion: 'Disfruta de tu independencia, esta habitación tiene todo para uno',
    ubicacion: 'Av. Huaylas 250 - Chorrillos',
    habitaciones: 1,
    baño: 1,
    costo: "$500 mensual",
    smoke: true,
    pets: true
    },
    {
    nombre: 'Habitación para 2 personas',
    src: '../img/renta_5.jpg',
    descripcion: 'Si eres estudiante y vives de lejos de la Universidad, múdate con un compañero y ahorra',
    ubicacion: 'Av. Alameda Sur - Chorrillos',
    habitaciones: 1,
    baño: 1,
    costo: "$400 mensual",
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa con cocina completa',
    src: '../img/renta_6.jpg',
    descripcion: 'Porque pasar tiempo en familia es relajante, disfruta de nuestro amplio espacio hecho a la medida de tu familia',
    ubicacion: 'Av. Los inkas 123 - San Borja',
    habitaciones: 3,
    baño: 2,
    costo: "$250 x  noche",
    smoke: false,
    pets: true
    }
]

const depEnAlquiler= function(){
    const cardAlquiler= document.getElementById('pageAlquiler');
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