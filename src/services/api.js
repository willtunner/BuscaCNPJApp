//https://free.currconv.com/api/v7/
//convert?q=USD_PHP&compact=ultra&apiKey=15a95261376a634a3e48

//https://www.receitaws.com.br/v1/cnpj/14660263000131

import axios from 'axios';

const api = axios.create({
  baseURL:'https://www.receitaws.com.br/v1/cnpj'
});

export default api;