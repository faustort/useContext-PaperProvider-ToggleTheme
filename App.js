// Importamos temas e o provedor de temas do React Native Paper
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

// Importamos o contexto e o provedor de tema que criamos
import { ThemeContext, ThemeProvider } from "./src/context/ThemeContext";

// Importamos o componente principal da tela
import HomeScreen from "./src/component/HomeScreen";

// Importamos 'useContext' do React para acessar o contexto
import { useContext } from 'react';

// Definimos o componente principal da aplicação
export default function App() {
  return (
    // Envolvemos a aplicação com o 'ThemeProvider' para fornecer o contexto de tema a todos os componentes filhos
    <ThemeProvider>
      <Main /> {/* Renderizamos o componente 'Main' dentro do provedor de tema */}
    </ThemeProvider>
  );
}

// Definimos o componente 'Main' que irá aplicar o tema selecionado
const Main = () => {
  // Usamos o 'useContext' para acessar o 'isDarkTheme' do contexto
  const { isDarkTheme } = useContext(ThemeContext);

  // Escolhemos o tema com base no valor de 'isDarkTheme'
  const theme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;

  // Retornamos o 'PaperProvider' que aplica o tema aos componentes do React Native Paper
  return (
    <PaperProvider theme={theme}>
      <HomeScreen /> {/* Renderizamos a tela principal dentro do provedor de tema */}
    </PaperProvider>
  );
};
