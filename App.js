import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Face from "./components/face.js";
import { When } from "./components/if.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: false
    };
  }
  onPress = () => {
    this.setState({showCamera:true});
  }

  render() {
    return (
      <>
        <When condition={!this.state.showCamera}>
          <View style={styles.container}>
            <Text style={styles.text}>
              Are you Ready for Your Face to Be Judged?
            </Text>
            <TouchableOpacity onPress={this.onPress} style={styles.button}>
              <Image
                style={styles.button}
                source={require("./assets/icon.png")}
              />
            </TouchableOpacity>
          </View>
        </When>
        <When condition={this.state.showCamera}>
          <Face />
        </When>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    padding: 10,
    justifyContent: "center"
  },
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  button_text: {
    fontSize: 20,
    justifyContent: "center"
  }
});
