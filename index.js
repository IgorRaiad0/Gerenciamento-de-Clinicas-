import express from 'express';
const app = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";
import session from 'express-session';
import flash from 'connect-flash';

//CONFIGS
app.use(session({
    secret: 'sistemaclinica',
    resave: true,
    saveUninitialized: false,
})); //config da sessão

app.use(flash());//config das mensagens

app.use((req, res, next) => {
    res.locals.sucess_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next()
})

//CONFIGURAR O TEMPLATE PADRÃO
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

//CONFIGURAR O BODY PARSER PARA ENVIAR DADOS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));


///ROTAS DO SISTEMA
import medico from './routes/medico.js';
app.use('/medico', medico);

import paciente from './routes/paciente.js';
app.use('/paciente', paciente);

app.listen(5000, ()=> console.log('Servidor Rodando em http://localhost:5000'))