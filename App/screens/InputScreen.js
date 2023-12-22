import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Dimensions  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';

const InputScreen = () => {
 //containerHeight is a state variable (used to keep track of data that can change)
  //setContainerHeight is a setter function that is used to update the value of containerHeight
  const [containerHeight, setContainerHeight] = useState(0);

  //this runs everytime you load the page, it gets the window height which is later used to determine
  //dynamic dimensions of stuff like the mic button
  useEffect(() => {
    //this gets the current window height 
    const windowHeight = Dimensions.get('window').height;
    //update the value of containerHeight with the setter function
    setContainerHeight(windowHeight/2);
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
        {/*This conditional statement below is used to make sure containerHeight is calculated before the Mic Button gets rendered*/}
        {containerHeight > 0 && (
            <TouchableOpacity style={[styles.micButton, { height: containerHeight, width: containerHeight, borderRadius:containerHeight/2 }]}>
                <Ionicons name="mic-outline" size={100} color="#00A67E" />
            </TouchableOpacity>
        )}
    </SafeAreaView>
  )
}

export default InputScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00A67E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    micButton:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#fff",
    },
  });