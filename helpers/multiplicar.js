const fs = require('fs');
const colors = require('colors');
const { boolean } = require('yargs');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;

        }

        if (listar) {
            console.log('=============='.green);
            console.log(`${colors.green('Tabla del: ')}  ${colors.blue(base)}`);
            console.log('=============='.green);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }



}














// const crearArchivo = (base = 5) => {


//     return new Promise((resolve, reject) => {
//         console.log('==============');
//         console.log(`Tabla del: ${base}`);
//         console.log('==============');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`Tabla-${base}.txt`, salida);

//         resolve(`Tabla-${base}.txt`);
//     })

// }


module.exports = {
    crearArchivo,
}