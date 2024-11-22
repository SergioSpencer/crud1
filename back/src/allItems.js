// Importa o módulo de conexão com o banco de dados
const connection = require('./connection'); 

// Função para buscar todos os itens do banco de dados
const getAllItems = async () => {
    try {
        // Executa uma consulta SQL para selecionar todos os registros da tabela "book"
        const [query] = await connection.execute('SELECT * FROM teste_node.book');
        // Retorna o resultado da consulta
        return query;
    } catch (error) {
        // Lança um erro caso a operação falhe
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};

// Função para inserir um item no banco de dados
async function insertItem(title, author) {
    try {
        // Define a query SQL para inserção com placeholders "?"
        const insertQuery = "INSERT INTO book (title, author) VALUES (?, ?)";
        // Define os valores a serem inseridos no lugar dos placeholders
        const values = [title, author];
        // Executa a query passando a string e os valores
        const [result] = await connection.execute(insertQuery, values);
        // Retorna o resultado da operação
        return result;
    } catch (error) {
        // Lança um erro caso a operação falhe
        throw new Error(`Erro ao inserir item: ${error.message}`);
    }
}

// Função para atualizar um item no banco de dados
const updateItem = async (id, title, author) => {
    try {
        // Define a query SQL para atualizar um registro com base no ID
        const updateQuery = "UPDATE book SET title = ?, author = ? WHERE id = ?";
        // Define os valores a serem utilizados na query
        const values = [title, author, id];
        // Executa a query passando a string e os valores
        const [result] = await connection.execute(updateQuery, values);
        // Retorna o resultado da operação
        return result;
    } catch (error) {
        // Lança um erro caso a operação falhe
        throw new Error(`Erro ao atualizar item: ${error.message}`);
    }
};

// Função para excluir um item do banco de dados
const deleteItem = async (id) => {
    try {
        // Define a query SQL para excluir um registro com base no ID
        const deleteQuery = "DELETE FROM book WHERE id = ?";
        // Define o valor do ID a ser utilizado na query
        const values = [id];
        // Executa a query passando a string e o valor
        const [result] = await connection.execute(deleteQuery, values);
        // Retorna o resultado da operação
        return result;
    } catch (error) {
        // Lança um erro caso a operação falhe
        throw new Error(`Erro ao excluir item: ${error.message}`);
    }
};

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = { getAllItems, insertItem, updateItem, deleteItem };
