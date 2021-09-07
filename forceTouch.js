import React, { Component } from 'react';
import { Animated, StyleSheet, View, Platform, Button } from 'react-native';


import { State, ForceTouchGestureHandler } from 'react-native-gesture-handler';

export default class Example extends Component {
  force = new Animated.Value(0);
  _onGestureLeftEvent = (event) => {
    console.log(`${event.nativeEvent.x} ${event.nativeEvent.y} ${event.nativeEvent.force} ${event.nativeEvent.radius}`);
  }

  _onGestureRightEvent = (event) => {
    console.log(`${event.nativeEvent.x} ${event.nativeEvent.y} ${event.nativeEvent.force} ${event.nativeEvent.radius}`);
  }

  _onLeftHandlerStateChange = event => {
    switch (event.nativeEvent.state) {
      case State.END:
        console.log("Left End");
        break;
      case State.BEGAN:
        console.log(`${event.nativeEvent.x} ${event.nativeEvent.y} ${event.nativeEvent.force} ${event.nativeEvent.radius}`);
        console.log("Left Began");
        break;
      case State.CANCELLED:
        console.log("Left Cancel");
        break;
      case State.ACTIVE:
        console.log("Left Active");
        break;
    }
  };

  _onRightHandlerStateChange = event => {
    switch (event.nativeEvent.state) {
      case State.END:
        console.log("Right End");
        break;
      case State.BEGAN:
        console.log(`${event.nativeEvent.x} ${event.nativeEvent.y} ${event.nativeEvent.force} ${event.nativeEvent.radius}`);
        console.log("Right Began");
        break;
      case State.CANCELLED:
        console.log("Right Cancel");
        break;
      case State.ACTIVE:
        console.log("Right Active");
        break;
    }
  };

  render() {
    { console.log(Platform.constants.forceTouchAvailable) }
    return (
      <View style={styles.view}>
        <ForceTouchGestureHandler
          minForce={0}
          onGestureEvent={this._onGestureLeftEvent}
          onHandlerStateChange={this._onLeftHandlerStateChange}>
          <View
            onTouchStart={() => console.log("2 Clicked")}
            onTouchEnd={() => console.log("2 ended")}
            style={{ width: 100, height: 100, marginTop: 10, backgroundColor: 'black' }}>
          </View>
        </ForceTouchGestureHandler>
        <ForceTouchGestureHandler
          minForce={0}
          onGestureEvent={this._onGestureRightEvent}
          onHandlerStateChange={this._onRightHandlerStateChange}>
          <View
            onTouchStart={() => console.log("1 Clicked")}
            onTouchEnd={() => console.log("1 ended")}
            onResponderRelease={() => console.log("1 Clicked")}
            style={{ width: 100, height: 100, marginTop: 10, backgroundColor: 'black' }}>
          </View>
        </ForceTouchGestureHandler>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,

    backgroundColor: 'mediumspringgreen',
    margin: 10,
    zIndex: 200,
  },
});
