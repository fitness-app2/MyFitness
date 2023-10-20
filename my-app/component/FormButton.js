import { StyleSheet, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../Dimensions/Dimension'

const FormButton = ({buttonTitle,...rest}) => {
  return (
   <TouchableOpacity style={styles.buttonContainer} {...rest}>
    <Text style={styles.buttonText}>{buttonTitle}</Text>
   </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:"black",
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
        
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
       
    }
})