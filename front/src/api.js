// Importa a biblioteca Axios, que é usada para fazer requisições HTTP
import axios from 'axios';

// Cria uma instância de Axios com uma configuração padrão
const api = axios.create({
    baseURL: 'http://localhost:3003/' 
    // Define a URL base para todas as requisições. 
    // Neste caso, a API está sendo executada localmente na porta 3003.
});

// Exporta a instância criada para ser utilizada em outros arquivos
export default api;
