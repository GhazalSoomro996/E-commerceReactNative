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
        ]
    }
  }

  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }
 
  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
        
        <Container>
            <View style={{height: statusBarHeight, backgroundColor: '#fff'}}></View>
            <Header style={{paddingTop: 45, paddingBottom: 20}}>
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
                    <Button transparent
                    onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text>Signup</Text>
                    </Button>
                </Right>

            </Header>

            <Content>
                <View style={{flex:1, backgroundColor: "#F5FCFF"}}>
                    <Swiper
                        autoplay
                        height={240}
                    >
                    {
                        this.state.imagesSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }

                    </Swiper>
                </View>

                <View style={styles.container}>
                        <FlatList
                        data={this.state.data}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) =>
                            <Card
                                title='HELLO WORLD'
                                image={{uri:'https://cdn-images-1.medium.com/max/2000/1*oc4pOoEeR_QMrCA6LkF5Kw.jpeg'}}>
                                <Text style={{marginBottom: 10}}>
                                    The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                                
                                <Button  block info
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
    }
});
