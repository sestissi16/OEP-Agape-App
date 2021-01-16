import 'react-native-gesture-handler';
import React from 'react';
import ButtonCustom from '../components/ButtonCustom'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {
    Container,
    Header,
    Body,
    Title,
    Content,
} from 'native-base'

const LandingScreen = ({navigation}) => {
    return (
        <Container style={styles.container}>
            <Header androidStatusBarColor="#02283C" style={styles.header}>
                <Body>
                    <Title style={styles.headerTitle}>Agape Satyagraha</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.logoContainer}>
                    <View>
                        <Image 
                            style={styles.logo}
                            source={require('../media/transparentAgapeLogo.png')} 
                        />
                    </View>
                </View>
                <Text style={styles.sectionTitle}>Ignite the Flame for Conflict Resolution</Text>
                <View style={styles.learnContainer}>
                    <ButtonCustom
                        title="Learn More"
                        onPress={() => navigation.navigate('LearnMore')}
                        backgroundColor='#FB8500'
                    />
                </View>
                <View style={styles.signUpLoginContainer}>
                    <ButtonCustom
                        title="Sign Up"
                        size="med"
                        orientation="row"
                        onPress={() => navigation.navigate('SignUp')}
                        backgroundColor='#FB8500'
                    />
                    <ButtonCustom
                        title="Login"
                        size="med"
                        onPress={() => navigation.navigate('Login')}
                        backgroundColor='#FB8500'
                    />
                </View>
            </Content>
        </Container>
    );
};

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8ECAE6',
        height: ScreenHeight,
        
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    header: {
        backgroundColor: '#023047',
    },
    headerTitle: {
        fontFamily: 'Montserrat-LightItalic',
        fontSize: 20,
        alignSelf: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 200,
        height: 240,
        resizeMode: 'contain',
    },    
    sectionContainer: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 36,
        fontWeight: '400',
        color: 'black',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 24,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBoldItalic',
    },
    highlight: {
        fontWeight: '700',
    },
    learnContainer: {
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpLoginContainer: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        height: 120,
        backgroundColor: '#023047',
        color: 'white',
    },
  });
   
export default LandingScreen;