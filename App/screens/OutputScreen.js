import { StyleSheet, View,SafeAreaView,TouchableOpacity,Dimensions,TextInput ,Text} from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import text from '../config/text';

const OutputScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/*This contains anything we want in the header, takes up top 25% of page*/}
        <View style={styles.headerContainer}>

        </View>    

        {/*This contains the main body, takes up 50% of the page height*/}   
        <View style={styles.bodyContainer}>
            <View style={styles.audioIconContainer}>
                <Ionicons name="volume-high" size="5rem" color="#fff" />
            </View>
            <View style={styles.outputTextContainer}>
                <Text style={text.outputText}>Message Transcription...</Text>
            </View>
        </View>

        {/*This contains the footer, takes up bottom 25% of the page */}
        <View style={styles.footerContainer}>
            <View style={styles.audioControlContainer}>
                <TouchableOpacity >
                    <Ionicons name="play-back" size="4rem" color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play" size="4rem" color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-forward" size="4rem" color="#fff" />
                </TouchableOpacity>
            </View>
        </View> 
    </SafeAreaView>
  )
}

export default OutputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer:{
        width:"100%",
        height:"24%",
        backgroundColor: '#00A67E',
    },
    bodyContainer:{
        width:"100%",
        height:"52%",
        backgroundColor: '#00A67E',
        alignItems: 'center',
    },
    footerContainer:{
        width:"100%",
        height:"24%",
        backgroundColor: '#00A67E',
        alignItems:"center",
        justifyContent:"center"
    },
    audioIconContainer:{
        width:"100%",
        height:"40%",
        alignItems: "center",
        justifyContent:"flex-start",
    },
    outputTextContainer:{
        backgroundColor:"#fff",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        padding:".5%",
        height:"59%",
        width:"95%",
        borderRadius: 10,
        boxShadow: '2px 2px 2px rgba(0, 0, 0, .5)',
    },
    audioControlContainer:{
        flexDirection:"row",
        height:"90%",
        width:"50%",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
})
