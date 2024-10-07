// Importamos React e 'useContext' para criar componentes e acessar o contexto
import React, { useContext } from "react";

// Importamos 'View' e 'StyleSheet' do React Native para estrutura e estilos (embora 'View' não seja usado aqui)
import { View, StyleSheet } from "react-native";

// Importamos componentes do React Native Paper
import { Button, Surface, Text } from "react-native-paper";

// Importamos o 'ThemeContext' para acessar o estado do tema
import { ThemeContext } from "../context/ThemeContext";

// Definimos o componente 'HomeScreen' como uma função
const HomeScreen = () => {
  // Usamos 'useContext' para obter 'isDarkTheme' e 'toggleTheme' do contexto
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  // Retornamos a interface da tela
  return (
    // Usamos o componente 'Surface' como contêiner principal, aplicando os estilos definidos
    <Surface style={styles.container}>
      {/* Exibimos o texto indicando o tema atual */}
      <Text variant="headlineLarge">
        Tema Atual: {isDarkTheme ? "Escuro" : "Claro"}
      </Text>
      {/* Botão que permite alternar o tema ao ser pressionado */}
      <Button mode="contained" onPress={toggleTheme} style={styles.button}>
        Alternar Tema
      </Button>
    </Surface>
  );
};

// Definimos os estilos para os componentes
const styles = StyleSheet.create({
  // Estilo para o contêiner principal
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    justifyContent: "center", // Alinha os itens verticalmente ao centro
    alignItems: "center", // Alinha os itens horizontalmente ao centro
  },
  // Estilo para o botão
  button: {
    marginTop: 20, // Adiciona espaço acima do botão
  },
});

// Exportamos o componente 'HomeScreen' para ser usado em outros arquivos
export default HomeScreen;
