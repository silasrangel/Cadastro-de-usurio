const primeiroNome = prompt("Informe o primeiro nome:")
const sobrenome = prompt("Informe o sobrenome:")
const campoDeEstudo = prompt ("Qual é o campo de estudo:")
const anoDeNascimento = prompt("Qual é o ano de nascimento:")

alert(
    "Cadastro com sucesso! \n" + 
    "\nNome Completo! " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo! " + campoDeEstudo + 
    "\nIdade! " + (2023 - anoDeNascimento)
 )