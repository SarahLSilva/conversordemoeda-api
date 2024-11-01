const apiKey = '321bb29611b0c54a60e61403';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}321bb29611b0c54a60e61403/latest/`;

// Função para buscar taxa  de cambio da API

async function getExchageRate(fromCurrency, toCurrency){
    try{
        const response = await fetch(`${apiURL}${fromCurrency}`);
        const data = await response.json();

        if(data.result === 'success'){
            return data.conversion_rates[toCurrency];
        }else{
            throw new Error('Error ao buscar a taxa de câmbio');
        }
    }catch(error){
        console.error("Erro:", error);
        return null;
    }
}