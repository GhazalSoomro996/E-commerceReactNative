import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconButtonTextButtonExample extends Component {
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