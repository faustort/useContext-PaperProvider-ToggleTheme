// Importamos 'createContext' e 'useState' da biblioteca React
import { createContext, useState } from 'react';

// Criamos um novo contexto chamado 'ThemeContext' que será usado para compartilhar o tema entre os componentes
export const ThemeContext = createContext();

// Definimos o componente 'ThemeProvider' que irá fornecer o contexto para os componentes filhos
export const ThemeProvider = ({ children }) => {
    // Criamos um estado chamado 'isDarkTheme' que indica se o tema escuro está ativo ou não, iniciando como 'false' (tema claro)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Definimos a função 'toggleTheme' que alterna entre tema claro e escuro
    const toggleTheme = () => {
        // Atualizamos o estado 'isDarkTheme' para o valor oposto ao atual
        setIsDarkTheme(previousState => !previousState);
    };

    // Retornamos o 'ThemeContext.Provider' que envolve os componentes filhos e fornece o valor atual do tema e a função para alternar o tema

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children} {/*Renderizamos os componentes filhos dentro do provedor */}
        </ThemeContext.Provider>
    );
};
