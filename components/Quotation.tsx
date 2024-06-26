import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuotationProps} from '../interfaces';

const Quotation: FunctionComponent<QuotationProps> = ({data}) => {
  if (!data) {
    return null;
  }

  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{data.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más alto del día: {''}
        <Text style={styles.span}>{data.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más bajo del día: {''}
        <Text style={styles.span}>{data.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variación últimas 24 horas: {''}
        <Text style={styles.span}>{data.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Última Actualización: {''}
        <Text style={styles.span}>{data.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#5E49E2',
    padding: 20,
    marginTop: 20,
  },
  text: {
    color: '#FFFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Quotation;
