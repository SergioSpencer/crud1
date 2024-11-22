// Importa o componente Home, localizado no diretório "./pages/Home"
import Home from "./pages/Home";

function App() {
    // Função principal do componente que define a estrutura da aplicação

    return (
        <> 
            {/* Fragmento React para agrupar elementos sem adicionar uma nova tag HTML */}
            <Home /> 
            {/* Renderiza o componente Home dentro do componente App */}
        </>
    );
}

// Exporta o componente App como padrão para que ele possa ser utilizado em outros arquivos
export default App;
