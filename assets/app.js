function vria criacartao(categoria, pregunta, resposta) {
    console.log(categoria, pregunta, resposta)
    let container = document.getElementById('contianer')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    
    cartao.innerHTML = `
    <div class="cartao__conteudo">

            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                  <p>${pregunta}</p> 
         </div>
            <div class="cartao__conteudo__resposta">
                   <p> ${resposta}</p> 
            </div>
    </div>
    `
container.appendChild(cartao)




}


