// Importa o modo estrito do React, que ajuda a identificar problemas no código
import { StrictMode } from 'react';
// Importa a função createRoot, usada para criar o ponto de montagem da aplicação
import { createRoot } from 'react-dom/client';
// Importa o componente principal da aplicação
import App from './App.jsx';
// Importa o arquivo de estilos globais da aplicação
import './index.css';

// Monta a aplicação React no elemento HTML com id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolve a aplicação no modo estrito para ativar verificações e avisos adicionais */}
    <App />
    {/* Renderiza o componente principal da aplicação (App) */}
  </StrictMode>,
);
