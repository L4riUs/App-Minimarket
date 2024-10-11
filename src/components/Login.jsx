import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Alert, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { UserIconLogin, LockIcon } from "./icons"

export default function Login() {
  return (
    <SafeAreaView className="flex-1 items-center bg-gray-200">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Image source={require('../../assets/banner_app.png')} className="w-96 h-60" />
            <Image source={require('../../assets/logo_m.png')} style={{ borderColor: '#fff', borderWidth: 3, borderRadius: 100 }} className="w-44 h-44 absolute left-1/4 top-28" />
            <StatusBar style="auto" />
          </View>
          <View className="">
            <Text className="text-green-700 uppercase font-extrabold mt-20 text-3xl text-center">iniciar sesión</Text>
          </View>
          <View className="items-center" style={{ flex: 1, marginTop: 30 }}>


            <View>
              <Text className="text-gray-400 uppercase font-bold mb-2">Usuario</Text>
              <View className="relative">
                <TextInput placeholder="Usuario" className="bg-white rounded-lg p-2.5 w-80 mb-4 pl-12" />
                <UserIconLogin className="absolute top-2 left-2" color="gray" />
              </View>
            </View>


            <View>
              <Text className="text-gray-400 uppercase font-bold mb-2">Password</Text>
              <View className="relative">
                <TextInput secureTextEntry placeholder="Usuario" className="bg-white rounded-lg p-2.5 w-80 mb-4 pl-12"/>
                <LockIcon className="absolute top-2 left-2" color="gray" />
              </View>
            </View>


            <Link href="/init" asChild>
              <Pressable className="flex items-center justify-center mt-7 transition-all active:scale-105">
                <ImageBackground source={require('../../assets/fondo2.jpg')} className="w-52 h-12 flex items-center justify-center" style={{ borderRadius: 8, overflow: 'hidden' }}>
                  <Text className="text-white uppercase font-bold text-center">INGRESAR</Text>
                </ImageBackground>
              </Pressable>
            </Link>


            <Pressable className="mt-4">
              <Text className="text-green-700 uppercase font-bold mb-4 text-center text-xs">¿Olvidaste tu contraseña?</Text>
            </Pressable>
          </View>

          <View>
            <Image source={require('../../assets/bannerB_app.png')} className="w-96 h-60 absolute -bottom-24 -left-0" resizeMode='contain' />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}