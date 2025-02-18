import Medico from "../models/Medico.js";

class MedicoController{

    listar = async(req, res) => {
        let medicos = await Medico.findAll();
        res.render('medico/index', {medicos: medicos});
    }

    cadastrar = (req, res) => {
        res.render('medico/cadastro');
    }

    salvar = (req, res) => {
        let medico = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            espec: req.body.espec,
            crm: req.body.crm
        }

        Medico.create(medico).then(() => {
            console.log('Médico cadastrado com sucesso!');
            res.redirect('/medico');
        });
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