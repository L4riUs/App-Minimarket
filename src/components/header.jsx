import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {UserIcon} from "./icons"


export default function Header() {

    const inset = useSafeAreaInsets();
    return (
        <View className="ml-80 mt-4" style={{ paddingTop: inset.top}}>
            <UserIcon color="gray"/>
        </View>
    )
}
