import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-600">
      <Text className="text-white">Esta sera la app del minimarket, jajaja xD</Text>
      <Image width={500} source={require('./assets/icon.png')} className="w-40 h-40"/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
