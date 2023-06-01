import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';

import Admin from './models/admin';
import Empresa from './models/empresa';
import Trabajador from './models/trabajador';
import Cocinero from './models/cocinero';

import adminRoutes from './routes/adminRoutes';
import empresaRoutes from './routes/empresaRoutes';
import trabajadorRoutes from './routes/trabajadorRoutes';
import cocineroRoutes from './routes/cocineroRoutes';
import menuRoutes from './routes/menuRoutes';

import AdminController from './controllers/adminController';
import EmpresaController from './controllers/empresaController';
import TrabajadorController from './controllers/trabajadorController';
import CocineroController from './controllers/cocineroController';
import MenuController from './controllers/menuController';

const app = express();
const port = 3000;

app.use(express.json());

// Rutas para el administrador
app.post('/admin', AdminController.createAdmin);

// Rutas para la empresa
app.post('/empresa', EmpresaController.createEmpresa);

// Rutas para el trabajador
app.post('/trabajador', TrabajadorController.createTrabajador);

// Rutas para el cocinero
app.get('/menus', CocineroController.getMenus);

// Rutas para los menús
app.post('/menus', MenuController.createMenu); // Agrega esta línea para la creación de menús

mongoose
  .connect('mongodb://mongo:27017/caterin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Database connected!');

    // Rutas
    app.use('/admin', adminRoutes);
    app.use('/empresa', empresaRoutes);
    app.use('/trabajador', trabajadorRoutes);
    app.use('/cocinero', cocineroRoutes);
    app.use('/menus', menuRoutes);

    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    app.listen(port, () => {
      console.log(`App is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
