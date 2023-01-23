$(function(){

    let listaLogin = JSON.parse(localStorage.getItem('lista')) ? JSON.parse(localStorage.getItem('lista')): []

    let tokenConta = localStorage.getItem('tokenConta')

    if(tokenConta == 'Contaon'){
        $('.btn_fazer_login').remove()
        $('.conta_user').css('display','block')
        $('.form_login').remove()
        $('.linkconta_login').remove()

        $('.info_gmail').text(`${localStorage.getItem('gmailUser')}`)
    }else {
        $('.conta_user').css('display','none')
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
            localStorage.setItem('gmailUser',gmailInput)
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

    $('#button_cadastro').click(function(e){
        e.preventDefault()

        let gmailCadastro = $('#gmailId_cadastro').val()
        let senhaCadastro = $('#senhaId_cadastro').val()
        
        let gmailLista = listaLogin.find(function(usergmail){
            return usergmail === gmailCadastro
        })
        let senhaLista = listaLogin.find(function(usersenha){
            return usersenha === senhaCadastro
        })

        if(gmailLista == gmailCadastro && senhaLista == senhaCadastro) {
            alert('Essa conta já existe')
        }else {
            listaLogin.push(gmailCadastro)
            listaLogin.push(senhaCadastro)
            localStorage.setItem('lista',JSON.stringify(listaLogin))
            console.log('Conta criada')
            tokenConta = 'Contaon'
            localStorage.setItem('tokenConta',tokenConta)
            localStorage.setItem('gmailUser',gmailCadastro)
            location.href = '../index.html'
        }
    })

    // Sair da conta

    $('#button_sair_conta').click(function(){
        localStorage.setItem('tokenConta','')
        $('.conta_user').css('display','none')
        location.href = '../index.html'
    })
})