
console.log('Juego piedra papel o tijera')

let PrimerJugador,SegundoJugador

PrimerJugador = prompt("Introduzca el movimiento del primer jugador: /n - Piedra /n - Papel /n - Tijera")
console.log('El primer jugador elegió: ' + PrimerJugador)
SegundoJugador = prompt("Introduzca el movimiento del segundo jugador:/n - Piedra /n - Papel /n - Tijera")
console.log('El segundo jugador elegió: ' + SegundoJugador)

if(PrimerJugador == 'Piedra')
{
	if(SegundoJugador == 'Piedra')
	{console.log('Empate')}
	else if(SegundoJugador == 'Papel')
	{console.log('Gana el Segundo Jugador')}
	else if(SegundoJugador == 'Tijera')
	{console.log('Gana el Primer Jugador')}
	else
	{alert('Valor del segundo jugador inválido')}
}
else if(PrimerJugador == 'Papel')
{
	if(SegundoJugador == 'Piedra')
	{console.log('Gana el Primer Jugador')}
	else if(SegundoJugador == 'Papel')
	{console.log('Empate')}
	else if(SegundoJugador == 'Tijera')
	{console.log('Gana el Segundo Jugador')}
	else
	{alert('Valor del segundo jugador inválido')}
}
else if(PrimerJugador == 'Tijera')
{
	if(SegundoJugador == 'Piedra')
	{console.log('Gana el Segundo Jugador')}
	else if(SegundoJugador == 'Papel')
	{console.log('Gana el Primer Jugador')}
	else if(SegundoJugador == 'Tijera')
	{console.log('Empate')}
	else
	{
	alert('Valor del segundo jugador inválido')
	}
}
else
{
alert('Valor del primer jugador inválido')
}