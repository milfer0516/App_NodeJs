const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( tabla = 5, mostrar = false, longitud = 10 ) => {

    try {

        
        let salida = '';
        
        for (let i = 1; i <= longitud; i++) {
            salida += `${tabla} x ${i} = ${tabla * i}\n`;
            
        }
        if(mostrar) {
            
            console.log('========================'.bgBlue);
            console.log('    Tabla del: ', tabla );
            console.log('========================'.bgBlue);
            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/Tabla-${tabla}.txt`, salida)
    
            return `La tabla del ${tabla}`;
        
    } catch (error) {
        throw 'No se pudo ejecutar'
    }


}

module.exports = {
    crearArchivo
}
