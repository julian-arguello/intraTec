import express from 'express'; //importamos express.
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
//importamos routers
import usersRouter from './routers/Users.router.js'; 
import clientsRouter from './routers/Clients.router.js';
import servicesRouter from './routers/Services.router.js';
import authRouter from './routers/Auth.router.js';
import stateRouter from './routers/State.router.js';


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
app.use('/api/auth', authRouter);
//States
app.use('/api/state', stateRouter);
//Recovery


/*-----------------------------------------------------------------------*/
//Indicamos el pueroto del servidor.
app.listen(9001, () => {
    console.log('[Server State] = online');
    console.log("MongoDB HOST: ", process.env.NODE_MONGO_DB);
});