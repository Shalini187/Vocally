import React, { useContext, useEffect, useState } from "react"
import { View } from "react-native";
import { IconToggle } from "react-native-material-ui";
import { Context } from "../../../App";
import { flexStyle } from "../../styles";
import { themeGetter } from "../../utils";

const SystemStatus = () => {
    const { theme = 'dark', setTheme, state, setBorderColor }: any = useContext(Context);

    useEffect(() => {
        let obj = themeGetter(theme);
        setBorderColor(obj);
    }, [theme]);

    let { star, navigation } = flexStyle || {};
    let { color, borderColor } = state || {};

    let data = [
        {
            name: 'star',
            style: { ...star, backgroundColor: color },
            onPress: () => setTheme(theme == 'dark' ? 'light' : 'dark')
        },
        {
            name: 'navigation',
            style: { ...navigation, backgroundColor: color },
            onPress: () => { }
        }
    ];

    return (
        <>
            {
                data?.map((ef: any, index: number) => {
                    let { name, style, onPress } = ef || {};
                    return (
                        <>
                            <View key={index} style={style}>
                                <IconToggle name={name} color={borderColor} size={24} onPress={onPress} />
                            </View>
                        </>
                    )
                })
            }
        </>
    )
}

export default SystemStatus;