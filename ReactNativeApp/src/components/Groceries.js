import React, { Component } from 'react';
import {View,FlatList, StyleSheet,Image, Dimensions, BackHandler} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Card ,} from 'react-native-elements';

export default class Groceries extends Component {

  constructor(props){
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

      this.state = {
        cart:[],
        gforshop2: [],
      }
  }

  handleBackButtonClick() {
      this.props.navigation.navigate('Home');
      return true;
  }
 
  componentWillMount() {
    this.fetchData();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
 
  fetchData = async () => {
    const response = await fetch("https://i-ecom.herokuapp.com/getdata");
    console.log(response);
    const json = await response.json();

    this.setState({ gforshop2: json[1].groceries__data});

  };

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
            <Title>Groceries</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <View style={styles.container}>
              <FlatList
                  data={this.state.gforshop2}
                  keyExtractor={(x, i) => i}
                  renderItem={({ item }) =>
                <Card
                  containerStyle={{width: Dimensions.get('window').width - 30}}
                    title= "Hello World" 
                    image={{uri:'https://cdn-images-1.medium.com/max/2000/1*oc4pOoEeR_QMrCA6LkF5Kw.jpeg'}}>
                    <Text style={styles.text}>
                      {item.name}
                    </Text>
                      <Text style={styles.text}>
                      {item.price}
                    </Text>
                      <Text style={styles.text}>
                      {item.description}
                    </Text>
                    
                    <Button  block info
                      onPress = {()=> {this.props.navigation.navigate('Cart')}}>
                      <Text> Add to Cart </Text>
                    </Button>
                </Card>
                  }   
                />
            </View>
            </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text:{
    textAlign: 'center',
    marginBottom: 10
  },
  header:{
    paddingTop: 45, 
    paddingBottom: 25, 
    backgroundColor: 'gray'
  }
});
