import React from 'react';
import { Font, AppLoading } from "expo";
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Home from './src/components/Home';
import Smartphones from './src/components/Smartphones';
import Groceries from './src/components/Groceries';
import Garments from './src/components/Garments';
import Electronics from './src/components/Electronics';
import Cart from './src/components/Cart';


const DrawerStack=createDrawerNavigator({
  Home:{screen: Home ,navigationOptions:{
    header:null}},

  Smartphones : {screen: Smartphones,navigationOptions:{
    header:null}},

  Groceries : {screen: Groceries,navigationOptions:{
    header:null}}, 

  Garments : {screen: Garments,navigationOptions:{
    header:null}}, 

  Electronics : {screen: Electronics,navigationOptions:{
    header:null}}, 

  Cart : {screen: Cart,navigationOptions:{
    header:null}}, 
  }, 
  
    {
      initialRouteName: 'Home',
});


const StackApp= createStackNavigator({
  Signup:{screen:Signup,navigationOptions:{
    header:null
  }},

  Login:{screen:Login, navigationOptions:{
    header:null
  }},

  DrawerStack:{screen: DrawerStack, navigationOptions:{
    header:null
  }},
  
},
  {
  initialRouteName: 'DrawerStack',
  });


export default class App extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
        loading: true,
      };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("./src/fonts/Roboto.ttf"),
      Roboto_medium: require("./src/fonts/Roboto_medium.ttf"),
    });

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        Expo.AppLoading
        );
    }

    return (
    <StackApp/>
    )
  }
}
