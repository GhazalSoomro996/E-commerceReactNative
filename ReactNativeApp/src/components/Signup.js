import React from 'react';
import {View, StyleSheet,Image, Text,TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Left,Right, Button, Body, Icon,  } from 'native-base';

export default class Signup extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

  handleSubmit = () => {
    alert("You are signed up!");
  }

  render() {
    return (
      <Container>
      <Header style={{paddingTop: 45, paddingBottom: 20}}>
        <Left>
          <Button transparent
           onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Signup</Title>
        </Body>
        <Right />
      </Header>


      <View style={styles.container}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: "https://i.pinimg.com/originals/cd/30/69/cd3069a8d6040d526fd2495b1c42de7e.jpg"}}
        />
        <Text style={styles.header}>Create new account</Text>

        <TextInput style={styles.textinput} placeholder= "Enter Username" underlineColorAndroid={'transparent'} />
        
        <TextInput style={styles.textinput} placeholder= "Enter Email" underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder= "Enter Password" secureTextEntry = {true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}
        onPress={this.handleSubmit}>
          <Text style={styles.btntext}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    alignSelf : 'stretch'
  },
  header: {
    fontSize: 24,
    color : '#4b2165',
    paddingBottom : 30,
    paddingTop: 30,
    },
    
    textinput: {
    alignSelf : 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#1c2326',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth :1,
    },
    
    button: {
    alignSelf : 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
    },
    
    btntext:{
    color: '#fff',
    fontWeight: 'bold'}
});
