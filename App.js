import React, { Component } from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'


export default function App(){

  const [peso,setPeso] = useState('')
  const [altura,setAltura] = useState('')

  function calcular(){
    const alt = altura/100
    const imc = peso/ (alt*alt)
    
    if(imc < 18.5){
      alert("Você está abaixo do peso!")
    }else if((imc >= 18.5) && (imc < 25)){
      alert("Você está com o peso normal!")
    }else if((imc > 25)&&(imc < 30)){

      alert("Você está com sobrepeso")

    }else if((imc > 30)){
      alert("Voce pode estar obeso")
    }
      
  }

  return(
    <View style= {styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <TextInput 
      style={styles.input}
      placeholder="Digite sua altura em (cm)"
      placeholderTextColor='#FFF'
      keyboardType='numeric'
      value={altura}
      color= 'white'
      onChangeText={(altura)=>setAltura(altura)}
      ></TextInput>
      <TextInput
      style={styles.input}
      placeholder="Digite seu peso em (kg)"
      placeholderTextColor='#FFF'
      color = 'white'
      
      keyboardType='numeric'
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      ></TextInput>
      
      <TouchableOpacity 
      style={styles.button}
      onPress={calcular}
      >
        <Text style={styles.buttonText}> Calcular</Text>
      </TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: 'grey',
    textAlign: 'center',
    
  },

  titulo:{
    textAlign: 'center',
    marginTop: 80,
    fontSize: 32,
    color: '#FFF',
    marginBottom: 40,
  },

  input:{
    backgroundColor: 'black',
    borderColor: 'green',
    
    padding: 20,
    borderRadius: 15,
    margin:20,
    fontSize: 23,
  },
  button:{
    backgroundColor: 'red',
    margin: 20,
    padding: 15,
    borderRadius: 20,

  },
  buttonText:{
    textAlign: 'center',
    fontSize: 28,
  }




})

