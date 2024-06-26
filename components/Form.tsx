import {Picker} from '@react-native-picker/picker';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {FormProps} from '../interfaces';
import {API} from '../services';
import {Mktcapfull} from '../interfaces/Mktcapfull';

const Form: FunctionComponent<FormProps> = ({
  cryptocurrency,
  currency,
  setCryptoCurrency,
  setCurrency,
  setIsValid,
}) => {
  const [data, setData] = useState<Mktcapfull>();

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const getApi = async () => {
    const response = await API(`/top/mktcapfull?limit=10&tsym=${currency}`);

    setData(response.data);
  };

  const quotePrices = () => {
    if ([currency, cryptocurrency].includes('')) {
      handdleError();
      return;
    }

    setIsValid(true);
  };

  const handdleError = () => {
    Alert.alert('Error', 'Ambos campos son obligatorios');
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={currency}
        onValueChange={setCurrency}
        itemStyle={styles.picker}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={cryptocurrency}
        onValueChange={setCryptoCurrency}
        itemStyle={styles.picker}>
        <Picker.Item label="- Seleccione -" value="" />
        {data?.Data.length &&
          data.Data.map(item => (
            <Picker.Item
              key={item.CoinInfo.Id}
              label={item.CoinInfo.FullName}
              value={item.CoinInfo.Name}
            />
          ))}
      </Picker>
      <TouchableHighlight style={styles.btn} onPress={() => quotePrices()}>
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  picker: {
    height: 120,
  },
  btn: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Form;
