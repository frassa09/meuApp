import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Inicial from './telas/inicial';

export default function App() {

  const [tela, setTela] = useState('')

  const escolherTela = (telaEscolhida) => {
    setTela(telaEscolhida)
  }

  switch(tela){
    case 'inicial': {
      return <Inicial escolherTela={escolherTela}></Inicial>
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.div}>
        <Text style={styles.titulo}>
          Matriz
        </Text>


        <TouchableOpacity style={styles.botao} onPress={() => escolherTela('inicial')}>
          <Text>
            Inicial
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5c8ca',
    justifyContent: 'center'
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#e3e5d7',
    width: 100,
    alignItems: 'center',
    borderRadius: 8
  },
  div: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200
  },
  titulo: {
    fontSize: 80
  }
});
