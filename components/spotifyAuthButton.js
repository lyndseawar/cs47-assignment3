import { Pressable, Text, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";
const SpotifyAuthBotton = ({autheticationFunction}) => {
  return (
    <Pressable style={styles.authButton} onPress={autheticationFunction}>
      <Text style={styles.authText}>Connect with Spotify</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },
  authText: {
    color: "white",
  },
});


export default SpotifyAuthBotton;
