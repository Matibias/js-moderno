import { pedirCarta, valorCarta, crearCartaHTML } from "./";

export const turnoJugador = ( puntosJugador, puntosHTML, divCartasJugador, deck = []) => {
  
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML.innerText = puntosJugador;

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = crearCartaHTML(carta);
  divCartasJugador.append(imgCarta);

  return puntosJugador ;
};
