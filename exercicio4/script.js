const faturamentoEstadual = [
	{
		"estado": "SP",
		"valor": 67836.43
	},
	{
		"estado": "RJ",
		"valor": 36678.66
	},
	{
		"estado": "MG",
		"valor": 29229.88
	},
	{
		"estado": "ES",
		"valor": 27165.48
    }
    ,
	{
		"estado": "Outros",
		"valor": 19849.53
	}]

const percentual = (array) => {
    let soma = 0
    for (let index = 0; index < array.length; index++) {
        soma += array[index].valor;
    }
    for (let index = 0; index < array.length; index++) {
        //let valor = array[index].valor;
        let percent = (array[index].valor / soma) * 100
        console.log(`O estado ${array[index].estado} representa o percentual de ${percent.toFixed(2)}% do valor total mensal da distribuidora`)
    }
}

percentual(faturamentoEstadual)