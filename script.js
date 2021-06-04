$(document).ready(function () {
    $("#formulario-cadastro").validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true,
                number: true
            },
            endereco: {
                required: true
            },
            numero_casa: {
                required: true
            },
            celular: {
                required: true,
                number: true
            }
        },
        messages: {
            nome: {
                required: "Campo Obrigatório!"
            },
            cpf: {
                required: "Campo Obrigatório!",
                number: "Por favor insira apenas número!"
            },
            endereco: {
                required: "Campo Obrigatório!"
            },
            numero_casa: {
                required: "Campo Obrigatório!"
            },
            celular: {
                required: "Campo Obrigatório!",
                number: "Por favor insira apenas número!"
            }
        }
    });
});