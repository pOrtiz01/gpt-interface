import { StyleSheet, View,SafeAreaView,TouchableOpacity,Dimensions,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import text from '../config/text';

const InputScreen = () => {
  //containerHeight is a state variable (used to keep track of data that can change)
  //setContainerHeight is a setter function that is used to update the value of containerHeight
  const [containerHeight, setContainerHeight] = useState(0);
  //same as containerHeight but for the prompt text
  const [prompt, setPrompt]=useState(null);

  //this runs everytime you load the page, it gets the window height which is later used to determine
  //dynamic dimensions of stuff like the mic button
  useEffect(() => {
    //this gets the current window height 
    const windowHeight = Dimensions.get('window').height;
    //update the value of containerHeight with the setter function
    setContainerHeight(windowHeight/2);
  }, []);
  
  return (
    
    <SafeAreaView style={styles.container}> {/*The page is encapsuled by a safe area container*/}
        
        {/*This contains anything we want in the header, takes up top 25% of page*/}
        <View style={styles.headerContainer}>

        </View>    

        {/*This contains the main body, takes up 50% of the page height*/}   
        <View style={styles.bodyContainer}>
          {/*This conditional statement below is used to make sure containerHeight is calculated before the Mic Button gets rendered*/}
          {containerHeight > 0 && (
            <TouchableOpacity style={[styles.micButton, { height: containerHeight, width: containerHeight, borderRadius:containerHeight/2 }]}>
                <Ionicons name="mic-outline" size={100} color="#00A67E" />
            </TouchableOpacity>
          )}
        </View>

        {/*This contains the footer, takes up bottom 25% of the page */}
        <View style={styles.footerContainer}>
            {/*This is the prompt container */}
            <View style={styles.promptContainer}>
              {/*This is the text input */}
              <TextInput
                value={prompt}
                onChangeText={text =>setPrompt(text)}
                style={text.prompTextInput}
                placeholder='Edit Your Prompt Here...'
            />
            </View>
        </View> 
    </SafeAreaView>
  )
}

export default InputScreen

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
      flexDirection:"column-reverse",
      alignItems:"center"
    },
    promptContainer:{
      backgroundColor:"#fff",
      alignItems:"flex-start",
      justifyContent:"center",
      padding:".5%",
      height:"50%",
      width:"95%",
      marginBottom:"1%",
      borderRadius: 10,
      boxShadow: '2px 2px 2px rgba(0, 0, 0, .5)',
    },
    micButton:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#fff",
      boxShadow: '2px 2px 2px rgba(0, 0, 0, .5)',
    },
  });