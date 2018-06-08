import React, { Component } from 'react';
import {View,FlatList, StyleSheet, Dimensions, BackHandler} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconButtonTextButtonExample extends Component {

  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Home');
    return true;
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent
             onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
        
            <Title>Your Cart</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name='cart' />
            </Button>
          </Right>
          
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 45, 
    paddingBottom: 25, 
    backgroundColor: 'gray'
  }
});
