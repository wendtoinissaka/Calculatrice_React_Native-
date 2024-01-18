import { View, StyleSheet,Text,Image} from "react-native-web";
import donnee from './donnee.json'
import { Button } from "react-native";
import { useState } from "react";
//<Text>C'est mon premier Tweet</Text>
const Tweet = (props) =>{
    const {nom, profil=require('./profil.jpg'), pseudo,citation ="La patience est un chémin d'or", like =100} = props
    const [count, setCount] = useState(Math.floor(Math.random()*1000)+1)
    const [part, setPart] = useState(Math.floor(Math.random()*10000)+1)
    return(
    <View style={[styles.view, styles.couleurBlanc]}>
            <View style={[styles.header, styles.couleurBlanc]}>
            <Image style={[styles.imageStyle, styles.couleurBlanc]} source={profil} />
            <View style={[styles.couleurBlanc,]}>
                <Text style={{fontSize:30, fontWeight:'bold',color:'white' }}>{nom} </Text>
                <Text style={{color:'white'}}>{pseudo}</Text>
            </View>
        </View>
        <View style={styles.corps} >{citation}
        </View>
        <View style={styles.footer} ><Text style={[styles.couleurBlanc,]}><Text style={[styles.nbrReaction,styles.couleurLike]}>{count}</Text> <Button title="Retweets" onPress={() =>setCount(count+1)} /> 
        <Text style={[styles.nbrReaction,styles.couleurLike]}> {part}</Text> <Button title="J'aime"  onPress={()=>setPart(part+1)} /> 
        </Text></View>
    </View>
    )
}

const styles = StyleSheet.create({
    view:{
        color:'white',
        width:'100%',
        padding:'20px',
        borderRadius:'20px',
        backgroundColor:'#18A3FF',
        color:'white',
        marginBottom :10,
      },
      header:{
        flexDirection:'row',
        marginBottom:'40px',
        color:'white'
      }
      ,
    imageStyle:{
        width:60,
        height:60,
        borderRadius:'50%',
        marginRight:'20px'
    },
    nbrReaction:{
        fontWeight:'bold',
        
    },
    corps:{
        marginBottom:'50px',
        
        fontSize:25,
        fontFamily:'Jokerman normal'
    },
    couleurBlanc:{
        color:'white'
    },
    footer:{
        color:'white',
        borderTopColor:'green',
        borderTopWidth:1,
        paddingTop:'15px'
    },
    couleurLike:{
        color:'yellow',
        letterSpacing:1.5,
        fontSize:30
    },
    
})

export default Tweet

// react native tools
// react native snippets



