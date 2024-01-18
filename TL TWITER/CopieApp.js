import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PhotoProfil from './composants/composantImages/photoProfil';

export default function App() {
  return (
  <View style={styles.container}>
    <Text>okk</Text>
    <PhotoProfil monimage={require('./composants/composantImages/profil.jpg')}/>
    <PhotoProfil monimage={require('./composants/composantImages/profil3.jpg')}/>
    <PhotoProfil monimage={require('./composants/composantImages/profil2.jpg')}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
