import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderComponent from "./components/HeaderComponent";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const configureNewGameHandler = () => {
    setRounds(0);
    setSelectedNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setRounds(numOfRounds);
  };

  let content = <StartGameScreen onStart={startGameHandler} />;
  if (selectedNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = (
      <GameOverScreen
        userNumber={selectedNumber}
        numOfRounds={rounds}
        onRestart={configureNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <HeaderComponent title="Guess the Number" />
      {content}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
