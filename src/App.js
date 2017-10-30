import React, { Component } from "react";
import { AsyncStorage, StatusBar, StyleSheet, Text, View } from "react-native";
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Stack from "./routes/Stack";

// import reducer from "./redux/reducer";
// // const store = createStore(reducer, undefined, compose(applyMiddleware(thunk)))
// const store = createStore(
//   reducer,
//   undefined,
//   compose(applyMiddleware(thunk), autoRehydrate())
// );
//
// persistStore(store, { storage: AsyncStorage });
// // persistStore(store, { storage: AsyncStorage }).purge();

export default class wing extends Component {
  render() {
    return (
      // <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" showHiddenTransition="fade" />
        <Stack />
      </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#FFFFFF"
  }
});
