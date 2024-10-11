import { View, Text, ScrollView, Image } from "react-native";
import { ClientIcon, GananciasIcon, IntroIcon, InvoiceIcon, SupplierIcon } from "../../src/components/iconSvg"
import { ArrowRightIcon, InstaIcon, BookMarkIcon } from "../../src/components/icons"

export default function index() {

    const marcas = []
    let productos = []
    for (let index = 0; index < 10; index++) {
        marcas.push(
            <View className="w-24 items-center" key={index}>
                <InstaIcon className="bg-gray-300 p-1.5 rounded-full" size={75} color="white" />
                <Text className="mt-2 text-sm font-medium">Polar</Text>
            </View>
        )
        productos.push(
            <View className="border-2 border-gray-300 w-60 rounded-lg py-4 justify-center items-center" key={index}>
                <View className="w-56 ml-3">
                    <View className="relative">
                        <Image source={require('../../assets/IMG_PRODUCTOS/arroz.jpeg')} className="w-52 h-52 rounded-lg"></Image>
                        <Text className="absolute bottom-2 left-2 bg-green-700 text-white p-1.5 rounded-lg text-sm ">25 Bs</Text>
                    </View>

                    <Text className="text-left font-bold text-lg mt-4">ARROZ</Text>

                    <View className="flex-row gap-x-2 gap-y-2 mt-1 flex-wrap">
                        <View className="flex-row gap-x-2">
                            <BookMarkIcon color="#9ca3af" size={17} />
                            <Text className="text-gray-400">Polar</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <ScrollView >
            <View className="flex-row items-center justify-center mt-10 ml-4" style={{ height: 91 }}>
                <View>
                    <Text className="text-3xl font-extrabold text-green-700">BIENVENIDO</Text>
                    <Text className="text-gray-400">LUIS GARNICA</Text>
                </View>
                <IntroIcon width={170} height={200} />
            </View>
            {/* <View className="border-t border-gray-300 w-10"></View> */}

            <View className="flex-row flex-wrap gap-y-3 items-center justify-around mt-10">
                <View className="bg-gray-200 rounded-md pb-3">
                    <GananciasIcon width={190} height={110} />
                    <View className="flex-row items-center justify-evenly">
                        <Text className="text-center font-light text-green-900 text-xs">GANANCIAS:</Text>
                        <Text className="text-center font-light text-green-900 text-xs">5670 BS</Text>
                    </View>
                </View>
                <View style={{ width: 190 }} className="pb-3 items-center">
                    <ClientIcon width={120} height={110} />
                    <View className="flex-row gap-x-5">
                        <Text className="text-center font-light text-green-900 text-xs">CLIENTES:</Text>
                        <Text className="text-center font-light text-green-900 text-xs">20</Text>
                    </View>
                </View>
                <View className=" pb-3">
                    <SupplierIcon width={180} height={110} />
                    <View className="flex-row items-center justify-evenly">
                        <Text className="text-center font-light text-green-900 text-xs">PROVEEDORES:</Text>
                        <Text className="text-center font-light text-green-900 text-xs">20</Text>
                    </View>
                </View>
                <View style={{ width: 190 }} className="bg-gray-200 rounded-md pb-3 items-center">
                    <InvoiceIcon width={140} height={110} />
                    <View className="flex-row gap-x-5">
                        <Text className="text-center font-light text-green-900 text-xs">FACTURAS</Text>
                        <Text className="text-center font-light text-green-900 text-xs">150</Text>
                    </View>
                </View>
            </View>


            <View className="flex-row mt-10 items-center justify-between px-4 mb-8">
                <Text className="text-xl font-bold">Marcas registradas</Text>
                <ArrowRightIcon />
            </View>

            <ScrollView horizontal={true}>
                <View className="flex-row gap-x-3 mb-10">
                    {marcas}
                </View>
            </ScrollView>


            <View className="flex-row mt-10 items-center justify-between px-4 mb-8">
                <Text className="text-xl font-bold w-64">Productos recientemente agregados</Text>
                <ArrowRightIcon />
            </View>


            <ScrollView className="mx-2" horizontal={true}>
                <View className="flex-row gap-x-10 mb-10">
                    {productos}
                </View>
            </ScrollView>



        </ScrollView>
    );
}
