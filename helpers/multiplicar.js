const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) =>
{

    try 
    {
        let salida = '', consola = '';


        for (let i = 1; i <= hasta; i++)
        {
            salida += `${ base } x ${i} = ${ base*i }\n`;
            consola += `${ base } ${ 'x'.green } ${i} = ${ base*i }\n`;
        }

        if (listar)
        {
            console.log('====================='.yellow);
            console.log('    Tabla del: ', base );
            console.log('====================='.yellow);
            console.log(consola);
            console.log('====================='.yellow);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt creada`;
    }
    catch ( err )
    {
        throw err;
    }
    
}

module.exports = 
{
    crearArchivo
}