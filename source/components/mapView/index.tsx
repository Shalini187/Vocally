import React, { useContext, useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { BottomTabBar, SystemSearch, SystemStatus, LayoutView, SystemCards } from '..';
import { Context } from "../../../App";

interface IProps {
    theme?: string;
    setTheme?: Function;
}

const SystemMapView = (props: IProps) => {
    const { theme = 'dark', setMapRef }: any = useContext(Context);

    const [activeTheme, setActiveTheme] = useState([]);

    useEffect(() => {
        computeMapTheme(theme);
    }, [theme]);

    const computeMapTheme = (theme: any) => {
        switch (theme) {
            case 'dark': {
                let dark = require('../../assets/themes/dark.json');
                setActiveTheme(dark);
                break;
            }
            default: {
                let light = require('../../assets/themes/light.json');
                setActiveTheme(light);
                break;
            }
        }
    };

    return (
        <>
            <MapView
                ref={(ref: any) => setMapRef(ref)}
                mapType={'standard'}
                provider={PROVIDER_GOOGLE}
                style={Dimensions.get('window')}
                customMapStyle={activeTheme}
                zoomEnabled={true}
                zoomTapEnabled={true}
                showsCompass={true}
                initialRegion={{ latitude: 20.59, longitude: 78.96, latitudeDelta: 1, longitudeDelta: 1 }}
                rotateEnabled={true}
            >
                <>
                    <LayoutView />
                </>
            </MapView>
            <SystemSearch />
            <BottomTabBar />
            <SystemStatus />
            <SystemCards />
        </>
    )
}

export default SystemMapView;