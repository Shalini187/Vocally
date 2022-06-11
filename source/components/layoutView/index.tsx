import React, { useContext, useEffect, useState } from "react"
import { Image, View } from "react-native"
import { Marker } from "react-native-maps";
import { Context } from "../../../App";
import { data, themeGetter } from "../../utils";

const LayoutView = () => {
    const { theme = 'dark', state, setBorderColor }: any = useContext(Context);

    useEffect(() => {
        let obj = themeGetter(theme);
        setBorderColor(obj);
    }, [theme]);

    let { borderColor } = state || {};

    return (
        <View>
            {
                data?.map((ef: any, index: number) => {
                    let { title, coordinate, image } = ef || {};
                    return (
                        <Marker
                            title={title}
                            draggable={false}
                            pinColor={'red'}
                            tracksViewChanges={true}
                            coordinate={coordinate}>
                            {<Image source={image} style={{ height: 50, width: 50, borderRadius: 100, borderWidth: 2, borderColor }} />}
                        </Marker>
                    )
                })
            }
        </View>
    )
}

export default LayoutView;