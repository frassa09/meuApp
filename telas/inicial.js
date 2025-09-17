import React, {useState} from 'react'

import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native'

import boloIcon from '../imgs/bolo.png'
import lancheIcon from '../imgs/lanche.png'
import almocoIcon from '../imgs/almoco.png'

import {useFonts} from 'expo-font'

export default function Inicial({escolherTela}) {

  return (
    <SafeAreaView style={{backgroundColor: '#FAFAFB'}}>
      <View>
        <Text style={styles.aba}>
          MenuAI
        </Text>
          <View style={styles.linha}/>
            <View style={styles.containerA}>{/* quadro rosa */}
              <Text style={styles.letrasG}>
                Bem-vindo ao{"\n"}MenuAI!
              </Text>
              <Text style={styles.letras}>
                Seu guia pessoal para as melhores refeições.{"\n"}O que você gostaria de comer hoje?
              </Text>
            </View>

            <Text style={styles.letrasS}>
            Descobrir categorias
            </Text>

            <View style={styles.containerB}>
              <TouchableOpacity style={styles.botao}> {/* botão alimentos */}
                <Text style={styles.letrasM}>
                  Doces/Sobremesas
                </Text>
                <View style={styles.conteudoBotao}>
                  <Text style={styles.letras}>
                    Delícias para satisfazer seu paladar.
                  </Text>
                  <Image source={boloIcon} style={styles.iconeBotao}/>
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}> {/* botão alimentos */}
                <Text style={styles.letrasM}>
                  Lanches/Petiscos
                </Text>
                <View style={styles.conteudoBotao}>
                  <Text style={styles.letras}>
                    Opções rápidas para qualquer hora.
                  </Text>
                  <Image source={lancheIcon} style={styles.iconeBotao}/>
                </View>
                
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}> {/* botão alimentos */}
                <Text style={styles.letrasM}>
                  Refeições
                </Text>
                <View style={styles.conteudoBotao}>
                  <Text style={styles.letras}>
                    Pratos completos para sua refeição.
                  </Text>
                  <Image source={almocoIcon} style={styles.iconeBotao}/>
                </View>
                
              </TouchableOpacity>
            </View>

            <View style={styles.containerC}>{/* quadro rosa */}
              <Text style={styles.letrasInputG}>
                Sua sugestão de refeição AI
              </Text>
              <Text style={styles.letrasInput}>
                Conte-nos o que você deseja e nossa IA sugerirá a refeição perfeita!
              </Text>
              <View style={{alignItems: 'center' }}>
              <TextInput placeholderTextColor={'#DEE1E6'} placeholder={" Ex: 'Comida Italiana', 'Prato Vegano', etc"} style={styles.inputIA}/>
              <TouchableOpacity style={styles.botaoIA}>
                <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                  Perguntar à IA
                </Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.blocoDeNavegacao}>
              <TouchableOpacity>
                <Text>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>
                  Produtos
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>
                  Carrinho  
                </Text>
              </TouchableOpacity>
            </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linha: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  aba: {
    fontFamily: 'arial',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  containerA: {
    backgroundColor: '#FFF9EB',
    marginBottom: 10,
    height: 125,
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  containerB: {
    alignItems: 'center',
  },
  containerC: {
    backgroundColor: '#FFF9EB',
    marginBottom: 0,
    marginTop: 15,
    height: 190,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
  letras: {
    fontFamily: 'arial',
    fontSize: 13,
    marginLeft: 20
  },
  letrasG: {
    fontFamily: 'arial',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  letrasM: {
    fontFamily: 'arial',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  },
  letrasInputG: {
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  letrasS:{
    fontFamily: 'arial',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 35,
    marginBottom: 10,
    marginTop: 10,
  },
    letrasInput: {
     fontFamily: 'arial',
    fontSize: 13,
    marginLeft: 20,
  },
  botao: {
    padding: 3,
    backgroundColor: 'white',
    border: '1px solid #DEE1E6 ',
    borderRadius: 6,
    width: 330,
    height: 80,
    margin:10,
  },
  inputIA: {
    backgroundColor: "white",
    border: '1px solid #DEE1E6 ',
    borderRadius: 6,
    width: 260,
    height: 40,
    marginTop: 10,
  },
  botaoIA:{
    backgroundColor: '#C27E00',
    borderRadius: 6,
    width: 260,
    height: 30,
    margin: 10,
    justifyContent: 'center',
  },
  blocoDeNavegacao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginTop: 20
  },
  iconeBotao:{
    width: 30,
    height: 30,
  },
  conteudoBotao:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  }
})