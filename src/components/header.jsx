import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {UserIcon} from "./icons"


export default function Header() {

    const inset = useSafeAreaInsets();
    return (
        <View className="flex-row items-center mt-5 ml-4" style={{ paddingTop: inset.top}}>
            <Image source={require('../../assets/logo_header.png')} className="w-48" style={{ height: 78 }}/>
            <UserIcon className="ml-28" color="gray"/>
        </View>
    )
}