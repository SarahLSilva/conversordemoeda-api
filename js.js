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

document.getElementById('conteiner').addEventListener('submit',async function(event){
    event.preventDefault();

    const valor = parseFloat(document.getElementById('amaount').value);
    const fromCurrency = document.getElementById('formCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRate = await getExchageRate(fromCurrency, toCurrency);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;
        conversao.text =`Resultado ${convertedValue.toFixed(2)} ${toCurrency}`;
    }else{
        alert('Erro de buscar cotaçãO. Tente novamente')
    }

});