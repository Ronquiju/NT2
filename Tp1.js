const jugadores = [
    {
        id:1,
        nombre: "leoMessi",
        posicion: "delantero",
        edad:34
    },
    {
        id:2,
        nombre: "aguerp",
        posicion: "delantero",
        edad:36   
    },
    {
        id:3,
        nombre: "foden",
        posicion: "mediocampista",
        edad:26
    },
    {
        id:4,
        nombre: "cutiRomero",
        posicion: "defensor",
        edad:34
    },
    {
        id:5,
        nombre: "dibu",
        posicion: "arquero",
        edad:44
    },
    {
        id:6,
        nombre: "Cr7",
        posicion: "delantero",
        edad:38
    },
    {
        id:7,
        nombre: "iniesta",
        posicion: "mediocampista",
        edad:22
    },
    {
        id:8,
        nombre: "xavi",
        posicion: "mediocampista",
        edad:17
    },
    ]
    
    console.log(jugadores);
    
    const buscarJugador = () => {
        const idActual = document.getElementById("id").value;
        const jugador = jugadores.find(jugador => jugador.id === idActual );
        console.log(jugador);
    }
    
    const nombreJugadores = jugadores.map(nombre => jugadores.nombre);
    console.log(nombreJugadores);