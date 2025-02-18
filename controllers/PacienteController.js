import Paciente from '../models/Paciente.js';

class PacienteController {

    listar = async (req, res) => {
        let pacientes = await Paciente.findAll();
        res.render('paciente/index', {pacientes: pacientes});
    }

    cadastrar = (req, res) => {
        res.render('paciente/cadastro');
    }

    salvar = (req, res) => {
        const paciente = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            dt_nasc: req.body.dt_nasc,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco
        }

        Paciente.create(paciente).then(() => {
            console.log('Paciente criado com sucesso!');
            res.redirect('/paciente');
        });
    }

    edicao = async (req, res) => {
        const id = req.params.id;
        const paciente = await Paciente.findByPk(id);
        if(!paciente){
            console.log('Paciente não encontrado!');
            return res.redirect('/paciente');
        }
        res.render('paciente/edicao', {paciente});
    }

    update = async (req, res) => {
        const id = req.params.id;
        const {nome, telefone, email, endereco} = req.body;
        try{
            await Paciente.update(
                {nome, telefone, email, endereco},
                {where: {id}}
            );
            console.log('Paciente atualizado com sucesso!');
            res.redirect('/paciente');
        } catch(err) {
            console.log('Erro ao atualizar os dados!');
            res.redirect(`/paciente/editar/${id}`);
        }
    }

    excluir = async (req, res) => {
        const id = req.params.id;
        try{
            await Paciente.destroy({where: {id}});
            console.log('Paciente excluído com sucesso!');
            res.redirect('/paciente');
        }catch (err){
            console.error(err);
            console.log('Erro ao excluir paciente!');
            res.redirect('/paciente');
        }
    }
}

export default new PacienteController();