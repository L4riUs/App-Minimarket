import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const HomeIcon = (props) => {
    return <Foundation name="home" size={30} color="black" {...props} />
}
export const BoxIcon = (props) => {
    return <FontAwesome6 name="boxes-stacked" size={27} color="black" {...props} />
}
export const InvoiceIcon = (props) => {
    return <FontAwesome6 name="file-invoice-dollar" size={27} color="black" {...props} />
}
export const StatisticIcon = (props) => {
    return <Entypo name="bar-graph" size={27} color="black" {...props} />
}
export const UserIcon = (props) => {
    return <FontAwesome name="user-circle-o" size={35} color="black" {...props}/>
}