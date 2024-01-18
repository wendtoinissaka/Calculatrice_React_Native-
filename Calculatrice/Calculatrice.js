import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import { View, StyleSheet,Text,Image, TextInput, Button, SafeAreaView, StatusBar, Touchable, TouchableOpacity} from "react-native-web";


// export class Calculatrice extends Component

 // static propTypes = {}
 const Calculatrice = () => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const onButtonPress = (value) =>{
        if(value ==='='){
            try {
                setInput(eval(input))
            } catch (error) {
                setResult('error')
            }
        }else if (value === 'C'){
            setInput('')
            setResult('')
        }else{
            setInput(input+ value)
        }
    }
    return (
        <SafeAreaView styles={styles.container} >
            <StatusBar style='auto' />
            <View style={styles.resultContainer} >
                <Text style={styles.resultText} >{result}</Text>
            </View>
            <View style={styles.buttonContainer} >
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C',  '=', '+'].map(
                    (item, index) =>(
                        <TouchableOpacity key={index} style={styles.button} onPress={() => onButtonPress(item)} >
                            <Text style={styles.buttontext}>{item}</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}
                value = {input}
                onChangeText={setInput}
                keybordType='numeric'

                />
                
            </View>
            
        </SafeAreaView>
/*
<View style={styles.conteneur}>
    <View style={styles.entreeResultat}>
        <Text style={styles.resultat}>25*35</Text>
        <TextInput value='0' style={styles.entreeUtilisateur}/>
    </View>
    <View style={styles.bouttons}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', '-', 'C', '*', '/'].map((valeur, index) =>(
            <Button style={styles.boutton} title='alifvfffgg' />
        ))
        }
    </View>
        </View>
*/

    )
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
    },resultContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flext-end'
    }, resultText:{
        fontSize:40
    },inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flext-end'
    }, inputText:{
        fontSize:30,
    }, buttonContainer:{
        flex:7,
        flexDirection : 'row',
        flexWrap : 'wrap'
    }, button:{

        width : "25%",
        height:"20%",
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 1,
        borderColor:'#ccc'
    },
    buttontext:{
        fontSize:24,

    }
    /*
    conteneur:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },entreeResultat:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        

    },entreeUtilisateur:{
        
    },resultat:{
        
    }, bouttons:{
        
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',

    }, boutton:{
        color:'black'
    }
    */
})


export default Calculatrice

