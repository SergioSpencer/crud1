// Importa o módulo "mysql2/promise" para conectar ao banco de dados
const mysql = require('mysql2/promise');

// Cria um pool de conexões para gerenciar conexões com o banco de dados
const connection = mysql.createPool({
    host: 'localhost',       // Endereço do servidor do banco de dados
    port: 3306,              // Porta padrão do MySQL
    user: 'root',            // Nome de usuário do banco de dados
    password: 'root',        // Senha do usuário
    database: 'teste_node',  // Nome do banco de dados
});

// Exporta a conexão para ser utilizada em outros arquivos
module.exports = connection;
