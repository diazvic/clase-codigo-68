const operaciones = [
	{
		descripcion: "Sueldo",
		categoria: "Trabajo",
		fecha: "01/01/2021",
		monto: 50000,
		tipo: "Ganancia",
	},
	{
		descripcion: "Pago de alquiler",
		categoria: "Alquiler",
		fecha: "02/01/2021",
		monto: 15000,
		tipo: "Gasto",
	},
	{
		descripcion: "Pago de expensas",
		categoria: "Alquiler",
		fecha: "02/01/2021",
		monto: 5000,
		tipo: "Gasto",
	},
	{
		descripcion: "Pago de internet",
		categoria: "Servicios",
		fecha: "10/01/2021",
		monto: 2000,
		tipo: "Gasto",
	},
	{
		descripcion: "Trabajo freelance",
		categoria: "Trabajo",
		fecha: "15/01/2021",
		monto: 20000,
		tipo: "Ganancia",
	},
	{
		descripcion: "Cena con amigas",
		categoria: "Salidas",
		fecha: "18/01/2021",
		monto: 1500,
		tipo: "Gasto",
	},
];

// const tarjeta = document.querySelector("#tarjeta-operaciones");
// let acc = "";
// operaciones.map((operacion) => {
// 	acc =
// 		acc +
// 		`
// <h2>${operacion.descripcion}</h2>
// <h3>${operacion.categoria}</h3>
// <h4>${operacion.monto}</h4>
// `;
// });
// tarjeta.innerHTML = acc;

//Declarar una funcion que se llame convertirOperacionesaHTML
// la funcion recibe como parametro un array de operaciones
//no debe retornar nada, debe pasar las operaciones a html

const contenedor = document.getElementById("container");

const convertirOperacionesaHTML = (array) => {
	let acumuladora = "";
	operaciones.map((operacion) => {
		acumuladora =
			acumuladora +
			`
	<div class="flex">
		<div id="descripcion" class="estilo">
				
				<p>${operacion.descripcion}</p>
					</div>
			<div id="monto" class="estilo">
			
				<p>${operacion.monto}</p>
			</div>
			<div id="tipo" class="estilo">
			
			<p>${operacion.tipo}</p>
			</div>
			<div id="categoria" class="estilo">
				
				<p>${operacion.categoria}</p>
			</div>
		<div id="fecha" class="estilo">
				
				<p>${operacion.fecha}</p>
		</div>
	</div>
		`;
	});
	contenedor.innerHTML = acumuladora;
};
convertirOperacionesaHTML();
