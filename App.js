/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component {
  constructor() {
    super()
    this.state={
        resultText:"",
        calculationText:""
    }
  }

  calculateResult(){
    const text = this.state.resultText
    this.setState({
      calculationText:eval(text)
    })
  }
  validate(){
      let text = this.state.resultText
      if (text.slice(-1)=='+'||text.slice(-1)=='-'||text.slice(-1)=='/'||text.slice(-1)=='*'){
        return false;
      }
      return true;
  }

  btnPressed(text){
      if (text=='='){
        return  this.validate() && this.calculateResult(this.state.resultText)
      }
      this.setState({
        resultText:this.state.resultText+text
      })
  }
  operate(operation){
    switch (operation){
      case 'Del':
        let text = this.state.resultText.split('')
        text.pop()
        
        this.setState({
          resultText:text.join('')
        })
        return
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.resultText=="") return
        this.setState({
          resultText:this.state.resultText+operation
        })
    }

  }

  render() {
    let elements=[]
    let temp = ['0','.','=']
    for (let i = 0; i<3;i++){
      let row=[]
      for (let j=0;j<3;j++){
        row.push(<TouchableOpacity onPress={()=> this.btnPressed(3*i+j+1)} style={styles.btn }><Text style={styles.btnText}>{3*i+j+1}</Text></TouchableOpacity>)
      }
      elements.push(<View style={styles.row}>{row}</View>)
      if(i==2){
        row = []
        for (let j=0;j<3;j++){
          row.push(<TouchableOpacity onPress={()=> this.btnPressed(temp[j])} style={styles.btn }><Text style={styles.btnText}>{temp[j]}</Text></TouchableOpacity>)
        }
        elements.push(<View style={styles.row}>{row}</View>)
      }
    }

    return (

      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {this.state.resultText}
          </Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
              {elements}
          </View>
          <View style={styles.operations}>
              <TouchableOpacity style={styles.btn } onPress={()=> this.operate('Del')}><Text><Text style={[styles.btnText,styles.white]}>Del</Text></Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn } onPress={()=> this.operate('+')}><Text><Text style={[styles.btnText,styles.white]}>+</Text></Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn } onPress={()=> this.operate('-')}><Text><Text style={[styles.btnText,styles.white]}>-</Text></Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn } onPress={()=> this.operate('*')}><Text><Text style={[styles.btnText,styles.white]}>*</Text></Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn } onPress={()=> this.operate('/')}><Text><Text style={[styles.btnText,styles.white]}>/</Text></Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  btnText:{
    fontSize: 25,
    color:'white',

  },
  white:{
    color:'white',
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center',
    fontSize:30,
  },
  
  result: {
    flex: 2,
    color:'black',
    justifyContent:'center',
    alignItems:'flex-end',  
  },
  calculation: {
    flex: 1,
    color:'black',
    justifyContent:'center',
    alignItems:'flex-end',  
  },

  calculationText:{
    fontSize:24,
    color:"black",
  },

  resultText:{
    fontSize:30,
    color:"black",
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {

    flex: 3,
    backgroundColor: '#434343',
    color:'white',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363'
  },
  row:{
    flexDirection:"row",
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
  operations:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around' ,
    backgroundColor:'#636363',
  }



});


