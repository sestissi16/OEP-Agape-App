import 'react-native-gesture-handler';
import React from 'react';
import ButtonCustom  from '../components/ButtonCustom'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Dimensions,
    ImageBackground,
} from 'react-native';
import {
    Container,
    Header,
    Footer,
    Body,
    Title,
    Content,
} from 'native-base'

const LearnMoreScreen = ({navigation}) => {
    return (
        <Container style={styles.container}>
            <Header androidStatusBarColor="#E07800" style={styles.header}>
                <Body>
                    <Title style={styles.headerTitle}>Learn More About Agape</Title>
                </Body>
            </Header>
            
            <Content style={styles.content}>
                
                <Text style={styles.sectionTitle}>
                        Conflict may be a part of life, but we can work to handle it nonviolently.
                </Text>
                
                <View style={styles.descriptionSection}>
                    <Text style={styles.bulletTitle}>
                        How it works!
                    </Text>
                    <View style={styles.bulletSection}>
                        <Text style={styles.bulletPoint}>
                            - Play mini games to gain skills
                            {/* Here you'll train to gain skills in nonviolent conflict resolution by playing mini games and leveling up. */}
                        </Text>
                        <Text style={styles.bulletPoint}>
                            - Battle through real conflict examples to level up
                            {/* Battle through real conflict that has happened in recent history and use your new skills to beat it. */}
                        </Text>
                        <Text style={styles.bulletPoint}>
                            - Win gems to have a chance at real life rewards
                        </Text>
                    </View>
                        <View style={styles.descriptionDivider}/>
                        <Text style={styles.endingLine}>
                            You're never too young or old to learn how to handle conflict!
                        </Text>
                    
                </View>
                <View style={styles.signUpButton}>
                    <ButtonCustom
                        title="Let's Get Started"
                        size="lg"
                        onPress={() => navigation.navigate('SignUp')}
                        backgroundColor='#FB8500'
                    />
                </View>
                
                
            </Content>
            
            <Footer style={styles.footer}>
                <View style={styles.landingContainer}>
                    <ButtonCustom
                        title="Back Home"
                        size="med"
                        onPress={() => navigation.navigate('Landing')}
                        backgroundColor='#023047'
                    />
                </View>
            </Footer>   
        </Container>
    );
};

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#011B28',
    },
    header: {
        backgroundColor: '#FB8500'
    },
    headerTitle: {
        fontFamily: 'Montserrat-MediumItalic',
        fontSize: 20,
        alignSelf: 'center',
    },
    content: {
        flex: 1,
        // height: '100%',
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    bottomImage: {
        width: 100,
        height: 140,
        resizeMode: "contain",
    },
    sectionTitle: {
        marginTop: 25,
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: 'rgba(222, 239, 248, 0.7)',
        borderBottomColor:'#219EBC',
        borderBottomWidth: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    descriptionSection: {
        flexGrow: 1,
        marginHorizontal: 6,
        marginBottom: 15,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'rgba(142, 202, 230, 0.8)',
        borderBottomColor:'#FB8500',
        borderBottomWidth: 5,
    },
    bulletTitle: {
        color: "black",
        fontFamily: "Poppins-SemiBoldItalic",
        fontSize: 22,
        textAlign: "center",
    },
    bulletSection: {
        marginHorizontal: 10,
        backgroundColor: "#FFD770",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    bulletPoint: {
      marginTop: 5,
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 5,
      fontSize: 18,
      color: 'black',
      textAlign: 'left',
      fontFamily: 'Poppins-Medium',
    },
    descriptionDivider: {
        backgroundColor: '#010D18',
        height: 2,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6,
    },
    endingLine: {
        marginVertical: 6,
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Poppins-Medium',
        color: 'black',
        textAlign: 'center',
    },
    highlight: {
      fontWeight: '700',
      fontSize: 20,
    },
    signUpButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
      backgroundColor: '#FB8500',
      padding: 4,
    },
  });
   
export default LearnMoreScreen;
