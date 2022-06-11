import React, { useContext, useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { Context } from "../../../App";
import { imageStyle } from "../../styles";
import { data, themeGetter } from "../../utils";

const SystemCards = () => {
    const { theme = 'dark', value: search, mapRef, state, setBorderColor }: any = useContext(Context);
    
    let [dataFilter, setFilter] = useState<Array<string>>([]);

    useEffect(() => {
        let obj = themeGetter(theme);
        setBorderColor(obj);
    }, [theme]);

    useEffect(() => {
        let dataVal: any = data?.filter(item => filter(item, search));
        setFilter(dataVal);

        let { coordinate } = dataVal?.[0] || {};
        let r = {
            ...coordinate,
            latitudeDelta: 0.45,
            longitudeDelta: 0.3,
          };
          mapRef?.animateToRegion?.(r, 1000);
    }, [search]);

    let { color, borderColor } = state || {};

    let { container, card } = imageStyle || {};

    const filter = (item: any, query: string) => {
        return item?.['name']?.toLowerCase()?.includes(query?.toLowerCase()) || item?.['title']?.toLowerCase()?.includes(query?.toLowerCase());
    };

    let renderItem = (item: any, index: any) => {
        let { image, name, title } = item || {};

        return (
            <>
                <View key = {index + 10} style={{ width: '30%', height: 60 }}>
                    <Image source={image} style={{ width: 60, height: 60, borderRadius: 100, borderColor, borderWidth: 1.5 }} />
                </View>
                <View style={{ width: '70%' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: borderColor, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                        <Text style={{ color: borderColor, fontSize: 14, paddingVertical: 8 }}>{name}</Text>
                    </View>
                </View>
            </>
        );
    }

    return (
        <ScrollView horizontal style={container} showsHorizontalScrollIndicator={false}>
            {
                dataFilter?.map((ef: any, index: number) => {
                    return (
                        <View key = {index} style={{ ...card, backgroundColor: color, borderColor }}>
                            {renderItem(ef, index)}
                        </View>
                    );
                })
            }
        </ScrollView>
    )
}

export default SystemCards;