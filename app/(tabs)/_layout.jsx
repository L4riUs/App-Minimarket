import { Tabs } from "expo-router";
import { HomeIcon, BoxIcon, InvoiceIcon, StatisticIcon } from "../../src/components/icons";
import Header from "../../src/components/header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TabsLayout() {
    return (
        <SafeAreaProvider>
            <Header />
            <Tabs
                safeAreaInsets={{ top: 0, bottom: 10, left: 0, right: 15 }}
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: { height: 80, paddingTop: 5 },
                    // tabBarLabelStyle: {
                    //     fontSize: 11,
                    //     fontWeight: "bold",
                    //     textTransform: "uppercase",
                    // },
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        if (!focused) return null;

                        switch (route.name) {
                            case 'init':
                                return <Animatable.Text animation="zoomIn" duration={250}>
                                    <Text className="font-extrabold" style={{ fontSize: 13, color: "green" }}>Inicio</Text>
                                </Animatable.Text>
                            case 'products':
                                return <Animatable.Text animation="zoomIn" duration={250}>
                                    <Text className="font-bold" style={{ fontSize: 13, color: "green" }}>Productos</Text>
                                </Animatable.Text>
                            case 'ventas':
                                return <Animatable.Text animation="zoomIn" duration={250}>
                                    <Text className="font-bold" style={{ fontSize: 13, color: "green" }}>Ventas</Text>
                                </Animatable.Text>
                            case 'statistics':
                                return <Animatable.Text animation="zoomIn" duration={250}>
                                    <Text className="font-bold" style={{ fontSize: 13, color: "green" }}>Estadisticas</Text>
                                </Animatable.Text>
                            default:
                                return null;
                        }
                    }
                })}
            >
                <Tabs.Screen name="init" options={{
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }} />
                <Tabs.Screen name="products" options={{
                    tabBarIcon: ({ color }) => <BoxIcon color={color} />,
                }} />
                <Tabs.Screen name="ventas" options={{
                    tabBarIcon: ({ color }) => <InvoiceIcon color={color} />,
                }} />
                <Tabs.Screen name="statistics" options={{
                    tabBarIcon: ({ color }) => <StatisticIcon color={color} />,
                }} />
            </Tabs>
        </SafeAreaProvider>
    );
}
