

const apiKey = '321bb29611b0c54a60e61403';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

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

    document.getElementById('currencyForm').addEventListener('submit', async function(event){
    event.preventDefault();

    const valor = parseFloat(document.getElementById('Tamanho').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRate = await getExchageRate(fromCurrency, toCurrency);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent =`Resultado ${convertedValue.toFixed(2)} ${toCurrency}`;
    }else{
        alert('Erro de buscar cotação. Tente novamente')
    }

});

// Atualiza o símbolo da moeda ao selecionar uma nova moeda
function updateCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const currencySymbol = document.getElementById('currencySymbol');
   
    // Define o símbolo da moeda de acordo com a seleção
    if (fromCurrency === "USD") {
      currencySymbol.textContent = "$";
    } else if (fromCurrency === "EUR") {
      currencySymbol.textContent = "€";
    } else if (fromCurrency === "BRL") {
      currencySymbol.textContent = "R$";
    }

    // Atualiza o placeholder
    document.getElementById('Tamanho').placeholder = "Valor";
  }