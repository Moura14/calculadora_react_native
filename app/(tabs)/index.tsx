import { StyleSheet, View} from 'react-native';
import Button from './src/componentes/Button';
import React, { Component } from 'react';
import Display from './src/componentes/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class App extends Component {

  state = {...initialState}


  addDigito = (n: string | number) => {
   if(n === '.' && this.state.displayValue.includes('.')){
      return 
   }

   const clearDisplay = this.state.displayValue == '0'
   || this.state.clearDisplay
   const currentValue = clearDisplay ? '': this.state.displayValue
   const displayValue = currentValue + n
   this.setState({displayValue, clearDisplay: false
   })

   if(n !== '.'){
    const newValue = parseFloat(displayValue)
    const values = [...this.state.values]
    values[this.state.current] = newValue
    this.setState({values})
   }
  }

  clearMemory = () => {
   this.setState({...initialState})
  }

  setOperation = (_operation: string) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}></Button>
          <Button label='/' operation onClick={() => this.setOperation('/')}></Button>
          <Button label='7' onClick={() => this.addDigito(7)}></Button>
          <Button label={'8'} onClick={() => this.addDigito(8)}></Button>
          <Button label={'9'} onClick={() => this.addDigito(9)}></Button>
          <Button label={'*'} operation onClick={() => this.setOperation}></Button>
          <Button label={'4'} onClick={() => this.addDigito(4)}></Button>
          <Button label={'5'}  onClick={() => this.addDigito(5)}></Button>
          <Button label={'6'}  onClick={() => this.addDigito(6)}></Button>
          <Button label={'-'} operation onClick={() => this.setOperation}></Button>
          <Button label={'1'}  onClick={() => this.addDigito(2)}></Button>
          <Button label={'2'}  onClick={() => this.addDigito(2)}></Button>
          <Button label={'3'}  onClick={() => this.addDigito(3)}></Button>
          <Button label={'+'} operation onClick={() => this.setOperation}></Button>
          <Button label={'0'}  onClick={() => this.addDigito(0)}></Button>
          <Button label={'.'} operation onClick={() => this.addDigito('.')}></Button>
          <Button label={'='} operation onClick={() => this.setOperation}></Button>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
 
});
