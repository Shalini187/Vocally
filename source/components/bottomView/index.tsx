import React, { useContext, useEffect, useState } from "react";
import { View } from 'react-native';
import { IconToggle } from "react-native-material-ui";
import { Context } from "../../../App";
import { flexStyle } from "../../styles";
import { themeGetter } from "../../utils";

function BottomTabBar(props: any) {
    const { theme = 'dark', state, setBorderColor }: any = useContext(Context);

    let { containerCircle, container, circle } = flexStyle || {};

    useEffect(() => {
        let obj = themeGetter(theme);
        setBorderColor(obj);
    }, [theme]);

    let { color, borderColor } = state || {};

    let data = [
        {
            name: 'explore',
            size: 28,
            color: borderColor
        },
        {
            name: 'map',
            size: 28,
            color: borderColor
        },
        {
            name: 'add',
            size: 30,
            outer: { ...circle },
            inner: { ...containerCircle },
            color: '#fff'
        },
        {
            name: 'notifications',
            size: 28,
            color: borderColor
        },
        {
            name: 'person',
            size: 28,
            color: borderColor
        }
    ]

    return (
        <View style={{ ...container, backgroundColor: color }}>
            {
                data?.map((ef: any, key: number) => {
                    let { name, outer, inner, size, color } = ef || {};
                    return (
                        <View key={key} style={outer || {}}>
                            <View key={key + 10} style={inner || {}}>
                                <IconToggle name={name} color={color} size={size} />
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
}

export default BottomTabBar;