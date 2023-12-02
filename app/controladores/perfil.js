// userController.js
const perfilModel = require('../modelos/perfil');
const respuesta = require('../Helpers/respuestas');




/*======================================================================
                Actualizar Fot de perfil
=======================================================================*/


async function updateFotoPerfil(req, res) {
    try {
        const id = req.params.id; // Obtener el ID del parámetro de la ruta
        const imagen = req.file; // Archivo de imagen enviado desde el frontend

        if (!imagen) {
            return res.status(400).json({ error: 'No se ha subido ninguna imagen.' });
        }

        
        // Aquí puedes obtener el nombre y la ruta temporal del archivo subido
        const nombreArchivo = imagen.filename; // Nombre del archivo
        const rutaTemporal = imagen.path; // Ruta temporal del archivo

        // ... Continuar con el procesamiento o almacenamiento de la imagen ...
        
        // Ejemplo de cómo usar la función para actualizar la foto del perfil en la base de datos
        const updateFoto = await perfilModel.updateFotoPerfil(id, nombreArchivo);

        respuesta.success(req, res, updateFoto, 200)
    } catch (error) {
        console.error('Error al procesar la imagen:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar la imagen.' });
    }
}


 
/*======================================================================
                Función para eliminar una imagen del almacenamiento
=======================================================================*/
function eliminarImagen(rutaImagen) {
    try {
        // Comprobar si la imagen existe antes de intentar eliminarla
        if (fs.existsSync(rutaImagen)) {
            // Eliminar la imagen físicamente
            fs.unlinkSync(rutaImagen);
            console.log('La imagen fue eliminada correctamente.');
        } else {
            console.log('La imagen no existe en la ruta especificada.');
        }
    } catch (error) {
        console.error('Error al eliminar la imagen:', error);
        throw error;
    }
}



module.exports = {
    updateFotoPerfil
};