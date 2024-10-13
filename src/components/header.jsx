import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserIcon, BellIcon } from "./icons"


export default function Header() {

    const inset = useSafeAreaInsets();
    return (
        <View className="flex-row items-center mt-5 ml-4" style={{ paddingTop: inset.top }}>
            <Image source={require('../../assets/logo_header.png')} className="w-48" style={{ height: 78 }} />
            <View className="flex-row items-center gap-x-4 ml-16">
                <BellIcon className="" color="gray" />
                <UserIcon className="" color="gray" />
            </View>
        </View>
    )
}