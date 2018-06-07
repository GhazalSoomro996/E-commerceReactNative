import React from 'react';
import {View,FlatList, StyleSheet,Image, ScrollView, Dimensions, BackHandler} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Card ,} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Constants from 'expo';

const statusBarHeight = Constants.statusBarHeight;

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container1}>
    <Image style={styles.image} source={props.uri}/>
</View>
)

BackHandler.addEventListener('hardwareBackPress' , () =>{
    BackHandler.exitApp} );

export default class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        imagesSlider: [
            require('../images/slide1.jpg'),
            require('../images/slide2.jpg'),
            require('../images/slide3.jpg'),
            require('../images/slide4.jpg'),
            require('../images/slide5.jpg'),
        ],

        cart:[],

        Mobforshop1: [],

        gforshop2: [],
        
        eforshop3: [],

        grforshop4: [],
    }
  }



  componentWillMount() {
    this.fetchData();
  }
 
   fetchData = async () => {
    const response = await fetch("https://i-ecom.herokuapp.com/getdata");
    console.log(response);
    const json = await response.json();

    this.setState({ Mobforshop1: json[0].s_phone_data});

    this.setState({ gforshop2: json[1].groceries__data});
    
    this.setState({ eforshop3: json[2].electronics__data});

    this.setState({ grforshop4: json[3].garments__data});

     };
     
  render() {
    return (
        
        <Container>
            <View style={{height: statusBarHeight, backgroundColor: '#fff'}}></View>
            <Header style={styles.header}>
                <Left>
                    <Button transparent
                    onPress= {() => this.props.navigation.openDrawer()}
                    >
                    <Icon name='menu' />
                    </Button>
                </Left>

                <Body>
                    <Title>AAA</Title>
                </Body>

                <Right>                   
                    <Button transparent
                     onPress={() => this.props.navigation.navigate('Cart')}>
                        <Icon name='cart' />
                    </Button>

                    <Button transparent
                    onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>Login</Text>
                    </Button>
                </Right>
            </Header>

            <Content>
                <View style={{flex:1, backgroundColor: "#F5FCFF"}}>
                    <Swiper
                        autoplay
                        height={240}>
                    {
                        this.state.imagesSlider.map((item, i) => 
                        <Slider 
                            uri={item}
                            key={i}
                        />)
                    }

                    </Swiper>
                </View>

                <View style={styles.container}>
                    <FlatList
                        data={this.state.Mobforshop1}
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

                    <FlatList
                        data={this.state.eforshop3}
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

                    <FlatList
                        data={this.state.grforshop4}
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
    container1: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: "#F5FCFF"
    },
    image: {
        flex: 1,
        width
    },
    text:{
        textAlign: 'center',
        marginBottom: 10
      },
      header:{
        paddingTop: 45, 
        paddingBottom: 20, 
        backgroundColor: 'gray'
      }

});
