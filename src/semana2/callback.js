//Callbacks

const hola = (name, micallback) => {
  setTimeout(() => {
    console.log('hola ' + name);
    micallback()
  }, 2000)

}
const adios = (name, otrocallback) => {
  setTimeout(() => {
    console.log('adios ' + name);
    otrocallback()
  }, 2000)
}

const hablar = (myCallbackMessage) => {
  setTimeout(() => {
    console.log("bla bla bla");
    myCallbackMessage();
  }, 3000);
}

//---
// implementar con promesas async y await adiconal utlizar recursividad
console.log('iniciando el proyecto');
hola('cristian', () => {
  hablar(() => {
    hablar(() => {
      adios('cristian', () => {
        console.log('terminando el proceso');
      })
    })

  })

});


//implemenar lo mismo promesas async y awai adicionals recursividad
