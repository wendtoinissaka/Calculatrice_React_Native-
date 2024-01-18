import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PhotoProfil from './TL TWITER/composantImages/photoProfil';
import Tweet from './components/Twist';
import donnee from './components/donnee.json'
import Calculatrice from './Calculatrice/Calculatrice';
import { Button, TextInput } from 'react-native-web';
import { useState } from 'react';


export default function App() {
  //const citation = donnee.tweet[0].citation
  const [saisi , setSaisi] = useState('')
  const [resultat , setResultat] = useState('0')
  const [precedent, setPrecedent] = useState(0)
  const recuperation = (recuperer) =>{
    if(recuperer ==='='){
      
      
      try {
          setResultat(eval(saisi))
          setPrecedent(resultat)
      } catch (error) {
          setResultat('error')
      }
  }else if (recuperer ==='AC'){
      setSaisi('')
      setResultat('')
      setPrecedent(0)
  }else if(recuperer ==='C'){
      setSaisi(saisi.slice(0,-1))
  }
  else{
      setSaisi(saisi+ recuperer)
  }
  }
  return (

    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={{color:'white', backgroundColor:'blue', alignContent:'center'}}> by_lacapacitee</Text>
        <TextInput value={saisi} onChangeText={setSaisi} style={styles.saisi}/>
        <Text style={styles.result} >{resultat}</Text>
      </View>
      <View style={styles.ali} >
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('AC')}>AC</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('()')}>()</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('%')} >%</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('/')} >/</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('7')} >7</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('8')} >8</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('9')} >9</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('*')} >*</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('4')} >4</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('5')} >5</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('6')} >6</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('-')} >-</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('1')} >1</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('2')} >2</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('3')} >3</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator]} onPress={() =>recuperation('+')} >+</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('0')} >0</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('.')} >.</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,]} onPress={() =>recuperation('C')} >C</TouchableOpacity>
      <TouchableOpacity  style={[styles.essai,styles.operator, styles.egal]} onPress={() =>recuperation('=')} >=</TouchableOpacity>
    </View>
  
    </View>


/*    
  <View style={styles.mere} >
  <View style={styles.header} >
    
  </View>
    <View style ={styles.parent}>
      {['1', '2', ,'3', '4', '5', '6', '7', '8', '9', '0', ,'C', '+', '-', '/', '%',].map((nombre,index) =>
      <Button style={styles.enfant} title={nombre} />
      )}
    </View> 
  </View>
*/

    /*
    <View style={styles.container}>
      <Tweet style={styles.imageStyle}  profil={donnee.tweet[0].profil} nom={donnee.tweet[0].nom} pseudo={donnee.tweet[0].pseudo}  citation= {donnee.tweet[0].citation}/>
      <Tweet  nom={donnee.tweet[1].nom} pseudo={donnee.tweet[1].pseudo}  citation={donnee.tweet[1].citation}/>
      <Tweet like='200' citation ="Le bienfait n'est jamais perdu!" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  result:{
    flex:1,
    fontSize:30,
    backgroundColor:'white',
    minWidth:'100%',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    borderBottomEndRadius:'20px',
    borderBottomStartRadius:'20px',
    color:'black'
  },
  saisi:{
    flex:1,
    backgroundColor:'white',
    width:'100%',
    fontSize:40,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    borderBottomColor :'blue',
    borderBottomWidth:'2',
    color:'blue'
  },
  ali:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    fontWeight:'bold',
    gap:'5px',
    width:'100%'
  },
  essai:{
    justifyContent:'center',
    alignItems:'center',
    width:'20%',
    height:'18%',
    backgroundColor:'#777',
    color:'white',
    fontSize:30,
    borderRadius:'50%'
  },
  mere:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  header:{
    flex:1,
  },
  parent:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    flexWrap:'wrap',
    gap:'15px'
    
    
  },enfant:{
    fontSize:10,
    flex:1,
    width:'100%',
    justifyContent:'space-between',
    flexShrink:-1,
    backgroundColor:'yellow'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:'center',
    alignItems:'center',
    Height:'100vh'
  }, operator:{
    backgroundColor:'blue'
  }, egal:{
    color:'#000',
    backgroundColor:'white'
  }
/*    
  },imageStyle:{
    width:60,
    height:60,
    borderRadius:'50%',
    marginRight:'20px'
},
  */
});
