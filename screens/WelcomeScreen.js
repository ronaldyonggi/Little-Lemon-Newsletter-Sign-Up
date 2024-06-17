import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      {/* Add welcome screen content here. */}
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro{" "}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  logo: {
    resizeMode: "contain",
    height: 200,
    width: 200,
    marginTop: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
    marginTop: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#0d4b18",
    marginTop: 140,
  },
  buttonText: {
    color: "white",
  }
});
