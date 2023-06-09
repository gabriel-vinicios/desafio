// Importando o axios para nosso projeto
import axios from 'axios';
/* Vamos criar uma constante chamada api, mas o nome pode
ser qual você quiser. Nela, vamos colocar um axios.create,
genérico e chamamos nossa URL. */
const api = axios.create({
baseURL: 'https://api.chucknorris.io/jokes/random'
});
console.log(api)
// Agora exportamos essa nossa api.
export default api;