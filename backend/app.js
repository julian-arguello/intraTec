import express from 'express'; //importamos express.
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
//importamos routers
import usersRouter from './routers/users.router.js'; 
import clientsRouter from './routers/clients.router.js';
import servicesRouter from './routers/services.router.js';
import authRouter from './routers/auth.router.js';


const app = express();
//Aclaramos que esperamos informacion por la url encode.
app.use(express.urlencoded({extended: true})); 
//Aclaramos que esperaremos informacion en formato json.
app.use(express.json());
//cors
app.use(cors('*'))
/*
|--------------------------------------------------------------------------
| Routers
|--------------------------------------------------------------------------
*/
//Users
app.use('/api/usuarios', usersRouter);
//Clients
app.use('/api/clientes', clientsRouter);
//Services
app.use('/api/servicios', servicesRouter);
//Auth
app.use('/api/iniciar-sesion', authRouter);

/*-----------------------------------------------------------------------*/
//Indicamos el pueroto del servidor.
app.listen(9001, () => {
    console.log('[Server State] = online');
    console.log("MongoDB HOST: ", process.env.NODE_MONGO_DB);
});