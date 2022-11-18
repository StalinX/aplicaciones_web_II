
/* let a = 'Hola Stalin';
let b = 'bla bla bla';
let c = 'Adios Stalin';
let d = 'Terminando el Proceso';

const p = new Promise((resolve, reject)=>{
  if (a = 'Hola Stalin') {
    resolve(a);
  }else{
    reject('error');
  }
});


p
.then(res => {
  console.log(res);
})
.catch(err =>{
  console.log(err);
}); */


/* const promesa = new Promise ((resolve, reject) =>{
  setTimeout (()=>{
    let a = 'Hola Stalin';
    console.log('bla bla bla')
    resolve(a);
  },2000);
});

console.log('Hola Stalin haz iniciado el proceso');
promesa.then(res =>{
  console.log('Adios Stalin')
}); */


let a = 'Hola Stalin';
let b = 'bla bla bla';
let c = 'Adios Stalin';
let d = 'Terminando el Proceso';

const obtenerProceso = (name)=>{
  return new Promise((resolve, reject) =>{
    if (a = 'Hola Stalin'){
    //if(b = '\nbla bla bla'){
      resolve(a + '\n'+b + '\n'+c + '\n'+d)
    //}
  }

    else{
      reject('error');
    }

  });
}

obtenerProceso(1)
.then(res =>{
  console.log(res);
})
.catch(error =>{
  console.log(error);
});
