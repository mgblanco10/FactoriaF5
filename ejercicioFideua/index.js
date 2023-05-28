function calcularPrecio(event) {
    event.preventDefault(); 

    const precioArrozPorKilo = parseFloat(document.getElementById('arroz').value);
    const precioCalamaresPorKilo = parseFloat(document.getElementById('calamares').value);
    const precioGambasPorKilo = parseFloat(document.getElementById('gambas').value);
    const numeroPersonas = parseInt(document.getElementById('personas').value);

    const arrozPorPersona = 0.5/4; 
    const calamaresPorPersona = 0.4/4;
    const gambasPorPersona = 0.2/4; 

    const arrozTotal = arrozPorPersona * precioArrozPorKilo;
    const calamaresTotal = calamaresPorPersona * precioCalamaresPorKilo;
    const gambasTotal = gambasPorPersona * precioGambasPorKilo;

    const precioTotal = (arrozTotal + calamaresTotal + gambasTotal)* numeroPersonas
    const precioPersona = precioTotal/numeroPersonas

    alert(`El precio total es: ${precioTotal}`);
    alert(`El precio total es: ${precioPersona}`);

    document.getElementById('miFormulario').reset();
}