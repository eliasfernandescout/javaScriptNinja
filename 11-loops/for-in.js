/* SERVE PARA PERCORRER PROPRIEDADES DE UM OBJETO */

var car = {
    brand: 'VW',
    model: 'Kombi',
    year: 2013
}

let text = '';
let text2 = '';
for(let key in car){
console.log(key)

text += car[key] //text = text + car

text2 = car[key]
}
/*O FOR IN TAMBEM SERVE PARA VERIFICAR SE UMA PROPRIEDADE EXISTE NO OBJETO, POR EXEMPLO, EXISTE MODEL IN CAR? */
console.log('model' in car)
console.log('doors' in car)
console.log('MEU TEXTO AQUI:', text)
console.log('MEU TEXTO2 AQUI:', text2)

var viking = {
    name: 'Ivvar',
    city: 'Kattegat',
    weapon: 'axe',
    age: 20
}

for(let key in viking){
    console.log('VIKING AQUI ==>',key,': ', viking[key])
    
}



// Object.values(viking)
// console.log(Object.values(viking))


// const returnName = viking.map(() => )
// console.log(returnName)
