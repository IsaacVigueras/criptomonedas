import React, {FunctionComponent} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const Header: FunctionComponent = () => (
  <Text style={styles.head}>Criptomonedas</Text>
);

const styles = StyleSheet.create({
  head: {
    paddingTop: Platform.OS == 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFFF',
    marginBottom: 30,
  },
});

export default Header;
