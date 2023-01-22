$(function(){

    let listaLogin = JSON.parse(localStorage.getItem('lista')) ? JSON.parse(localStorage.getItem('lista')): []

    let tokenConta = localStorage.getItem('tokenConta')

    if(tokenConta == 'Contaon'){
        $('.btn_fazer_login').remove()
        $('.conta_user').css('display','block')
        $('.form_login').remove()
        $('.linkconta_login').remove()
    }

    $('#button_logar').click(function(e){
        e.preventDefault()

        // Input do usuario
        let gmailInput = $('#gmailId').val()
        let senhaInput = $('#senhaId').val()

        // Pega um valor epecifico do Array
        let userGmail = listaLogin.find(function(userGmail){
            return userGmail === gmailInput
        })

        let userSenha = listaLogin.find(function(userSenha){
            return userSenha === senhaInput
        })
        console.log(userGmail,userSenha)

        // Verifica se a conta ja existe
        if(userGmail == gmailInput && userSenha == senhaInput){
            $('.btn_fazer_login').remove()
            $('.conta_user').css('display','block')
            $('.form_login').remove()
            $('.linkconta_login').remove()
            location.href = '../index.html'
            tokenConta = 'Contaon'
            localStorage.setItem('tokenConta',tokenConta)
        }else {
            /*listaLogin.push(gmailInput)
            listaLogin.push(senhaInput)
            localStorage.setItem('lista',JSON.stringify(listaLogin))
            console.log('Novo login')*/
            alert('Login incorreto')
        }
        
    })
})