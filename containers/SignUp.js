import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const SignUp = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up Screen</Text>
        <Button
            title="Landing"
            onPress={() => navigation.navigate('Landing')}
        />
      </View>
    );
};

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
    title: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
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
   
export default SignUp;
