

const produtosLoja = [
    {
        nome: 'Blusa Nike',
        preco: 200,
        img: 'blusa-nike.png',
        id:0
    },
    {
        nome: 'Blusa da Franca',
        preco: 190,
        img: 'blusa-franca-torcedor.png',
        id:1
    },
    {
        nome: 'Blusa nike dp',
        preco: 360,
        img: 'blusa-nike-dp.png',
        id:2
    },
    {
        nome: 'Blusa Jordan',
        preco: 690,
        img: 'blusa-jordan.png',
        id:3
    }
]



lojaOn = () => {
    let produtosMostrar = $('.produtos')
    produtosLoja.map((value)=> {
        produtosMostrar.append(`
        <div class="container_produto_single" id="${value.id}">
            <img src="images/${value.img}" alt="Img produto">
            <h1>${value.nome}</h1>
            <p>R$ ${value.preco.toFixed(2).replace('.',',')}</p>
            <div class="avaliacao_produto">
                <img src="images/img-5-estrelas.png" alt="Img estrela">
            </div>
        </div>`)
    })
}

lojaOn()