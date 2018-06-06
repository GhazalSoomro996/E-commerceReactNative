import React, { Component } from 'react';
import {View,FlatList, StyleSheet,Image, ScrollView, BackHandler} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Card ,} from 'react-native-elements';



export default class Electronics extends Component {

  constructor(props){
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  state = {
    data: []
  };

  handleBackButtonClick() {
      this.props.navigation.navigate('Home');
      return true;
  }
 
  componentWillMount() {
    this.fetchData();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
 

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

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
            <Title>Smartphones</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <View style={styles.container}>
                <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                    <Card
                        title='HELLO WORLD' // item.name, {item.description}
                        image={{uri:'https://cdn-images-1.medium.com/max/2000/1*oc4pOoEeR_QMrCA6LkF5Kw.jpeg'}}>
                        <Text style={{marginBottom: 10}}> 
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        
                        <Button  block info
                        onPress = {()=> {this.props.navigation.navigate('Cart')}}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, justifyContent: 'center'}}
                          ><Text> Add to Cart </Text>
                        
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
  }
});
