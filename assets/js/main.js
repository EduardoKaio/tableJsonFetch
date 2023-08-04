fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElemento(json))

function carregaElemento(json) {
    const table = document.createElement('table')
    const tr = document.createElement('tr')

    const titulo_numero = document.createElement('th')
    titulo_numero.innerHTML = ''
    tr.appendChild(titulo_numero)

    const titulo_nome = document.createElement('th')
    titulo_nome.innerHTML = 'NOME'
    tr.appendChild(titulo_nome)

    const titulo_idade = document.createElement('th')
    titulo_idade.innerHTML = 'IDADE'
    tr.appendChild(titulo_idade)
    table.appendChild(tr)

    const titulo_salario = document.createElement('th')
    titulo_salario.innerHTML = 'Salário'
    tr.appendChild(titulo_salario)
    table.appendChild(tr)
    i=1
    for(let pessoa of json) {
        if (i > 15){
            break
        } else {
            const tr = document.createElement('tr')

            const tdNumero = document.createElement('td')
            tdNumero.innerHTML = i
            tr.appendChild(tdNumero)

            const tdNome = document.createElement('td')
            tdNome.innerHTML = pessoa.nome
            tr.appendChild(tdNome)
    
            const tdIdade = document.createElement('td')
            tdIdade.innerHTML = pessoa.idade
            tr.appendChild(tdIdade)
    
            const tdSalario = document.createElement('td')
            tdSalario.innerHTML = pessoa.salario
            tr.appendChild(tdSalario)
    
            table.appendChild(tr)

        }

        i++
    }
    
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)

}