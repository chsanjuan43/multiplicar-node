const fs = require('fs');
const colors = require('colors');

let crearArchivo = ( base, limite ) => {
    return new Promise((resolve, reject) => {

        if ( !Number(base)){
            reject(`'${base}' no es un numero`);
            return;
        }

        if ( !Number(limite)){
            reject(`'${limite}' no es un numero`);
            return;
        }

        let data = '';

        for(let i = 1;i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
            reject(err)
            
            resolve(`Tabla-${base}`.red);
        })

    });
}

let listarTabla = ( base, limite ) => {

    return new Promise( (resolve, reject) => {

        if ( !Number(base)){
            reject(`'${base}' no es un numero`);
            return;
        }

        if ( !Number(limite)){
            reject(`'${limite}' no es un numero`);
            return;
        }

        let data = '';

        for(let i = 1;i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
           
        resolve(data.green);


    })

}

module.exports = {
    crearArchivo, listarTabla
}


