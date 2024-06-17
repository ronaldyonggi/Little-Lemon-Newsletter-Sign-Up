import { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState("");

  const alert = () => {
    Alert.alert('', 'Thanks for subscribing, stay tuned!',)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
      style={styles.textInput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Type your email"
      />
      <Pressable style={validateEmail(email) ? styles.button : [styles.button, {opacity: 0.5}]} onPress={alert} disabled={validateEmail(email) ? false : true} >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    width: 360,
    margin: 10,
  },
  button: {
    paddingVertical: 12,
    width: 360,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#0d4b18",
    marginTop: 20
  },
  buttonText: {
    color: "white",
    textAlign: 'center'
  }
});
