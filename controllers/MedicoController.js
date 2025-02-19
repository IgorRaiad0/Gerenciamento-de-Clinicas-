import Medico from "../models/Medico.js";
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

class MedicoController{

    listar = async(req, res) => {
        try{
            let medicos = await Medico.findAll();
            res.render('medico/index', {medicos: medicos});
        } catch(err){
            req.flash('error_msg', 'Erro ao listar medicos');
        }
    }

    cadastrar = (req, res) => {
        res.render('medico/cadastro');
    }

    salvar = async (req, res) => {
        try{

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.senha, salt);

            const user = await User.create({
                login: req.body.crm,
                senha: hash,
                categoria: 'medico'
            });

            await Medico.create({
                nome: req.body.nome,
                cpf: req.body.cpf,
                espec: req.body.espec,
                crm: req.body.crm,
                user_id: user.id
            });
            
            req.flash('success_msg', 'Médico cadastrado com sucesso');
            res.redirect('/medico/cadastro');

        } catch (err){

            req.flash('error_msg', 'Erro ao cadastrar médico');
            res.redirect('/medico/cadastro');
        }
    }

    edicao = async (req, res) => {
        const id = req.params.id;
        const medico = await Medico.findByPk(id);
        if(!medico){
            console.log('Médico não encontrado!');
            return res.redirect('/medico');
        }
        res.render('medico/edicao', {medico});
}

    update = async (req, res) => {
        const id = req.params.id;
        const {nome, espec, crm} = req.body;
        try{
            await Medico.update(
                {nome, espec, crm},
                {where: {id}}
            );
            console.log('Medico atualizado com sucesso!');
            res.redirect('/medico');
        } catch(err) {
            console.log('Erro ao atualizar os dados!');
            res.redirect(`/medico/editar/${id}`);
        }
    }

}

export default new MedicoController();