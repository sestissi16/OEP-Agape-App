/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Landing';
import LearnMoreScreen from './LearnMore';
import SignUp from './SignUp';
import Login from './Login';
import { Alert, UIManager, LayoutAnimation, StyleSheet, View, Button } from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';
// import { Page, Button, ButtonContainer, Form, Heading } from './components';
import {
    Container,
    Header,
    Body,
    Title,
    Content,
    Form,
    Item,
    Input,
    Label
} from 'native-base'

const RootStack = createStackNavigator();

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const config = {
  issuer: 'https://dev-4232548.okta.com/oauth2/default',
  clientId: '0oa1mnncdbBTBCwKd5d6',
  redirectUrl: 'com.okta.oepagape:/callback',
  additionalParameters: {},
  scopes: ['openid', 'profile', 'email', 'offline_access']
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            hasLoggedInOnce: false,
            accessToken: '',
            accessTokenExpirationDate: '',
            refreshToken: ''
        };
    }
    
    
    // animateState(nextState: $Shape<State>, delay: number = 0) {
    // setTimeout(() => {
    //     this.setState(() => {
    //     LayoutAnimation.easeInEaseOut();
    //     return nextState;
    //     });
    // }, delay);
    // }
    
      authorize = async () => {
        try {
          const authState = await authorize(config);
          this.animateState(
            {
              hasLoggedInOnce: true,
              accessToken: authState.accessToken,
              accessTokenExpirationDate: authState.accessTokenExpirationDate,
              refreshToken: authState.refreshToken
            },
            500
          );
        } catch (error) {
          Alert.alert('Failed to log in', error.message);
        }
      };
    
      refresh = async () => {
        try {
          const authState = await refresh(config, {
            refreshToken: this.state.refreshToken
          });
    
          this.animateState({
            accessToken: authState.accessToken || this.state.accessToken,
            accessTokenExpirationDate:
              authState.accessTokenExpirationDate || this.state.accessTokenExpirationDate,
            refreshToken: authState.refreshToken || this.state.refreshToken
          });
        } catch (error) {
          Alert.alert('Failed to refresh token', error.message);
        }
      };
    
      revoke = async () => {
        try {
          await revoke(config, {
            tokenToRevoke: this.state.accessToken,
            sendClientId: true
          });
          this.animateState({
            accessToken: '',
            accessTokenExpirationDate: '',
            refreshToken: ''
          });
        } catch (error) {
          Alert.alert('Failed to revoke token', error.message);
        }
      };
    render() {
        const {state} = this;
        return (
            // <NavigationContainer>
            //     <RootStack.Navigator>
            //         <RootStack.Screen 
            //             name="Landing" 
            //             component={LandingScreen} 
            //             options={{
            //                 headerShown: false,
            //                 headerStyle: {
            //                     backgroundColor: '#023047',
            //                 },
            //                 headerTintColor: '#fff',
            //                 headerTitleStyle: {
            //                     alignSelf: 'center',
            //                     fontFamily: 'Montserrat-Light',
            //                     fontSize: 24,
            //                     fontWeight: '200',
            //                 },
            //         }}
            //         />
            //         <RootStack.Screen 
            //             name="LearnMore" 
            //             component={LearnMoreScreen} 
            //             options={{headerShown: false,}}
            //         />
            //         <RootStack.Screen 
            //             name="SignUp" 
            //             component={SignUp} 
            //             options={{headerShown: false,}}
            //         />
            //         <RootStack.Screen 
            //             name="Login" 
            //             component={Login} 
            //             options={{headerShown: false,}}
            //         />
            //     </RootStack.Navigator>
            // </NavigationContainer>
            <Container>
                {!!state.accessToken ? (
                <Form>
                    <Label>accessToken</Label>
                    <Item>{state.accessToken}</Item>
                    <Label>accessTokenExpirationDate</Label>
                    <Item>{state.accessTokenExpirationDate}</Item>
                    <Label>refreshToken</Label>
                    <Item>{state.refreshToken}</Item>
                </Form>
                ) : (
                <Header>{state.hasLoggedInOnce ? 'Goodbye.' : 'Hello, stranger.'}</Header>
                )}

                <View>
                    {!state.accessToken && (
                        <Button onPress={this.authorize} title="Authorize" />
                    )}
                    {!!state.refreshToken && <Button onPress={this.refresh} title="Refresh" />}
                    {!!state.accessToken && <Button onPress={this.revoke} title="Revoke" />}
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'lightgray',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'darkblue',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: 'darkblue',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

export default App;
