import React, {Component} from "react";
import { TextInput, View, Button, StyleSheet } from 'react-native';

// function App(){
//   return(
//     <View> 
//       <Text>Oi</Text>
//     </View>
//   );
// }
// export default App;
// View - tela; Text - elemento


// class App extends Component{
//   render(){

//     return(
//       <View>
//         <Text style={{color: 'blue', fontSize: 30, margin: 15}}>Oi</Text>
//         <Image source={{uri: 'caminho https aqui'}} style={{with:300, height:300}}></Image> 
//       </View>
//     );
//   }
// }
// export default App;
//precisa de altura e largura img
// em componentes

// ---------------------
// 06/03/2024

// mais de um elemento, tem que estar dentro da view

// ----------atividade 13/03----------------

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  handleClear = () => {
    this.setState({ username: '', password: '' });
  };

  handleLoginPress = () => {
    const { username, password } = this.state;
    if (username !== '' && password !== '') {
      alert('Login Preenchido');
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };


  render(){

    return(
      <View style={styles.container}>

        <View style={styles.content}>
          <View style={[styles.box, { backgroundColor: 'red' }]}>
          </View>
          <View style={[styles.box, { backgroundColor: 'green' }]}>
          </View>
          <View style={[styles.box, { backgroundColor: 'blue' }]}>
          </View>
        </View>

        <View style={styles.formContainer}>
          <TextInput
          style={styles.input}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          placeholder="Usuário"
          underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <Button title="Limpar" onPress={this.handleClear} style={styles.button} />
            <Button title="Entrar" onPress={this.handleLoginPress} style={styles.button} />
          </View>
        </View>

        <View>
          <View style={[styles.box1, { backgroundColor: 'red' }]}>
          </View>
          <View style={[styles.box1, { backgroundColor: 'blue' }]}>
          </View>
          <View style={[styles.box1, { backgroundColor: 'green' }]}>
          </View>
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  formContainer:{
    flex:1,
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize:20,
    padding:10
  },
  content: {
    flexDirection: 'row',
  },
  box: {
    width: '34%', 
    height: 100, 
  },
  box1: {
    width: '100%', 
    height: 50, 
  },
 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  // button: {
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  // },
});

export default App;