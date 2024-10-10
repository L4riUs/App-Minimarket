import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export const HomeIcon = (props) => {
    return <Foundation name="home" size={32} color="black" {...props} />
}
export const BoxIcon = (props) => {
    return <FontAwesome6 name="boxes-stacked" size={29} color="black" {...props} />
}
export const InvoiceIcon = (props) => {
    return <FontAwesome6 name="file-invoice-dollar" size={29} color="black" {...props} />
}
export const StatisticIcon = (props) => {
    return <Entypo name="bar-graph" size={30} color="black" {...props} />
}
export const UserIcon = (props) => {
    return <FontAwesome name="user-circle-o" size={35} color="black" {...props}/>
}
export const UserIconLogin = (props) => {
    return <Feather name="user" size={28} color="black" {...props}/>
}
export const LockIcon = (props) => {
    return <Feather name="lock" size={28} color="black" {...props}/>
}