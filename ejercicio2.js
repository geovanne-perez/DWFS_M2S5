console.log('Traductor básico');

let Idioma, Palabra

Idioma = prompt('Escribe el idioma al que quieres traducir (ingles,español,alemán,portugués): ')
Palabra = prompt('Escribe la palabra que quieres traducir (hola,adios): ')

if(Palabra=='hola')
{
  switch (Idioma) {
    case 'ingles':
      console.log('Hello');
      break;
    case 'español':
      console.log('Hola');
      break;
    case 'alemán':
      console.log('Hallo');
      break;
    case 'portugués':
      console.log('Olá');
      break;
    default:
      console.log('Idioma no compatible');
    } 
} 
  else if(Palabra=='adios')
  {
    switch (Idioma) {
      case 'ingles':
        console.log('Goodbye');
        break;
      case 'español':
        console.log('Hola');
        break;
      case 'alemán':
        console.log('Tschuss');
        break;
      case 'portugués':
        console.log('adeus');
        break;
      default:
        console.log('Idioma no compatible');  
      } 
  } 
    else
  {
    console.log('Palabra no compatible');
  }