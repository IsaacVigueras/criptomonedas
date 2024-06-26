import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import {CurrencytType} from './interfaces';
import {API} from './services';
import {Pricemultifull} from './interfaces/Pricemultifull';
import Quotation from './components/Quotation';

function App(): React.JSX.Element {
  const [currency, setCurrency] = useState<CurrencytType>(CurrencytType.EMPTY);
  const [cryptocurrency, setCryptoCurrency] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [data, setData] = useState<Pricemultifull>();
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    if (isValid) {
      getApi();
      setLoad(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);

  const getApi = async () => {
    const response = await API(
      `/pricemultifull?fsyms=BTC,ETH&tsyms=${cryptocurrency}&tsym=${currency}`,
    );

    setTimeout(() => {
      setLoad(false);
      setIsValid(false);
      setData(response.data.DISPLAY.BTC);
    }, 3000);
  };

  if (load) {
    return (
      <View style={styles.containLoader}>
        <ActivityIndicator size="large" color="#5E49E2" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.img}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.container}>
        <Form
          cryptocurrency={cryptocurrency}
          currency={currency}
          setCryptoCurrency={setCryptoCurrency}
          setCurrency={setCurrency}
          setIsValid={setIsValid}
        />
      </View>
      <Quotation data={data?.[`${cryptocurrency}`]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  container: {
    marginHorizontal: '2.5%',
  },
  containLoader: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
