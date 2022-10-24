let nombre = [{
  id:1,
//  nombre: 'Stalin'
}]
let hablar = [{
  id:1,
//  hablar: 'bla bla bla'
}]
let despedida = [{
  id:1,
//  despedida: 'Adios'
}]

const holaProceso = id =>{
  return new Promise((resolve, reject)=>{
    if(nombre.find( nombre => nombre.id === 1)){
      console.log('Hola Stalin');
      setTimeout(()=>{
        resolve(hablarProceso(id))
    },2000)
    }else{
      reject('ERROR')
    }
  })
};

const hablarProceso = id =>{
  return new Promise((resolve, reject)=>{
    if(hablar.find( hablar => hablar.id === 1)){
      console.log('bla bla bla');
      setTimeout(()=>{
        resolve(adiosProceso(id))
    },2000)
    }else{
      reject('ERROR')
    }
  })
};

const adiosProceso = id =>{
  return new Promise((resolve, reject)=>{
    if(despedida.find( despedida => despedida.id === 1)){
      resolve('Adios Stalin');
    }else{
      reject('ERROR')
    }
  })
};

console.log('Iniciando proceso')
async function getMisProcesos(){
    let mis_procesos = await holaProceso();
    console.log(mis_procesos)
    console.log('Terminando Proceso')
}
getMisProcesos();
