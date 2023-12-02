

// const express = require('express');
// const router = express.Router();
// const perfilController = require('../controladores/perfil');
// const multer = require('multer');
// const path = require('path');

// // Ruta relativa a la raíz de la aplicación
// const rutaImagenes = path.join(__dirname, '../../assets/img'); // Obtén la ruta completa

// // Configuración de Multer para guardar las imágenes en 'assets/img'
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, rutaImagenes); // Utiliza la ruta de imágenes
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Guarda el archivo con su nombre original
//   }
// });

// // Configura multer con la configuración de storage
// const upload = multer({ storage: storage }).single('file');

// // Ruta para recibir la imagen del perfil con multer y async/await
// router.post('/:id', upload, perfilController.updateFotoPerfil);
// // app.use('/assets/img', express.static(path.join(__dirname, 'assets/img')));





// module.exports = router;
const express = require('express');
const router = express.Router();
const perfilController = require('../controladores/perfil');
const multer = require('multer');
const path = require('path');

// Ruta relativa a la raíz de la aplicación para las imágenes
const rutaImagenes = path.join(__dirname, '../../assets/img'); // Obtén la ruta completa

// Configuración de Multer para guardar las imágenes en 'assets/img'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, rutaImagenes); // Utiliza la ruta de imágenes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Guarda el archivo con su nombre original
  }
});

// Configura multer con la configuración de storage
const upload = multer({ storage: storage }).single('file');

// Ruta para recibir la imagen del perfil con multer y async/await
router.post('/:id', upload, perfilController.updateFotoPerfil);

// Ruta para servir imágenes estáticas
router.get('/assets/img/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(rutaImagenes, imageName));
});

module.exports = router;

