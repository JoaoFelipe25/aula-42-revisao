var pessoa = '{"nome": "cassino","idade": 32}'

console.log("tipo de dados antes do parse:", typeof(pessoa))
console.log("propriedade do objeto string antes do parse", pessoa.nome)

var pessoa_obj = JSON.parse(pessoa)

console.log("tipo de dados depois do parse:", typeof(pessoa_obj))
console.log("propriedade do objeto depois do parse", pessoa_obj.nome)

var pessoa_str = JSON.stringify(pessoa_obj)
console.log("tipo de dados depois do stringify:", typeof(pessoa_str))