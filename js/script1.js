function campoObrigatorio(valor, campo) {
    if(valor.trim() !== ''){
        return true;
    }else{
        return alert('O campo é obrigatório!');
    };
};

class User {

    constructor() {
        this.nome = ' ';
        this.email =  ' ';
        this.senha = ' ';
        this.documento = ' ';
        this.telefone = ' ';
        this.tipo_usuario = ' ';
    };

    
    

    lerDadosCadastro() {
        let user = {};	

        // buscando o valor do input radio
        let tipoUser = null;
        const radioEstudante = document.getElementById('rd_estudante').value;
        const radioProfessor = document.getElementById('rd_prof').value;
        const radioInstituicao = document.getElementById('rd_instituto').value;

        // verificando qual radio foi selecionado
        if (document.getElementById('rd_estudante').checked) { tipoUser = radioEstudante;} 
        else if (document.getElementById('rd_prof').checked) { tipoUser = radioProfessor;} 
        else if (document.getElementById('rd_instituto').checked) { tipoUser = radioInstituicao;}
        

        // jogando os valores para o objeto
        user.nome = document.getElementById('inp_nome').value;
        user.email = document.getElementById('inp_email').value;
        user.documento = document.getElementById('inp_doc').value;
        user.telefone = document.getElementById('inp_tel').value;
        user.tipo_usuario = tipoUser;
        user.senha = document.getElementById('inp_senha').value;
        user.confSenhaUser = document.getElementById('inp_conf_senha').value;

        return user;    
    };

    validarCamposCadastro(usuario){
        if(usuario.tipo_usuario == null){
            alert('O campo tipo de usuário é obrigatório!');
            return false;
        }

        campoObrigatorio(usuario.nome, 'nome')

        if(usuario.documento == ''){
            alert('O campo documento é obrigatório!');
            return false;
        }

        if(usuario.tipo_usuario == 1 && usuario.documento.length != 11){
            alert('O campo documento deve ter 11 caracteres!');
            return false;
        }

        if(usuario.tipo_usuario == 3 && usuario.documento.length < 14 || usuario.documento.length > 15){
            alert('O campo documento deve ter entre 14 e 14 caracteres!');
            return false;
        };

        if(usuario.telefone == ''){
            alert('O campo telefone é obrigatório!');
            return false;
        }
        
        if(usuario.email == '' ){
            alert('O campo email é obrigatório!');
            return false;
        }

        //validando formato do email
        if(usuario.email.indexOf('@') == -1 || usuario.email.indexOf('.') == -1 ){
            alert('O campo email está em formato inválido!');
            return false;
        }

        if(usuario.senha.trim() == ''){
            alert('Preencha um formato valido de senha');
            return false;
        }

        //validando tamanho da senha
        if(usuario.senha.length < 8){
            alert('A senha deve ter no mínimo 8 caracteres!');
            return false;
        }

        if(usuario.confSenhaUser == ''){
            alert('O campo confirmar senha é obrigatório!');
            return false;
        }
        if(usuario.senha != usuario.confSenhaUser){
            alert('As senhas não conferem!');
            return false;
        }

        return true;
    };

    cadastrar() {
        let novoUsuario = this.lerDadosCadastro();
        if(this.validarCamposCadastro(novoUsuario)){
            alert('Usuário cadastrado com sucesso!');
        }else{
            alert('Erro ao cadastrar usuário!');
        }
    };

};


let user = new User();

