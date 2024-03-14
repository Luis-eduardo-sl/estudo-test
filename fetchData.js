const axios = require('axios');

async function fetchData(){
    const response = await axios.get('https://brasilapi.com.br/api/cep/v2/11665071');
    return response.data;
}

module.exports = fetchData;


// console.log(fetchData());