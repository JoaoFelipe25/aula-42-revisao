var carro = {
    "marca": "chevrolet",
    "modelo": "opalao bebum",
    "consumo": "1km/1",
    "cor":"preto"
}

for (let propriedade in carro){
    console.log(propriedade + ":" + carro[propriedade])
}