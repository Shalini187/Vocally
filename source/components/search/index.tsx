import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { IconToggle } from 'react-native-material-ui';
import { Context } from "../../../App";

import { searchStyle } from '../../styles';
import { themeGetter } from "../../utils";

function SystemSearch(props: any) {
    const { theme = 'dark', state, setBorderColor, setValue, value }: any = useContext(Context);

    let { centeredView, input, buttons, buttonSearch, buttonClose } = searchStyle || {};

    useEffect(() => {
        let obj = themeGetter(theme);
        setBorderColor(obj);
    }, [theme]);

    let { color, borderColor } = state || {};

    return (
        <KeyboardAvoidingView behavior={'padding'}
            enabled style={{ ...centeredView, backgroundColor: color }}>
            <TextInput
                value={value}
                style={{ ...input, borderColor: color, color: borderColor }}
                keyboardType={'web-search'}
                returnKeyLabel={'Go'}
                placeholderTextColor={'#c3c3c3'}
                placeholder={'Search here...'}
                onChangeText={(text: string) => setValue(text)}
            />
            <View style={buttons}>
                <View style={buttonSearch}>
                    <IconToggle name={'search'} color={borderColor} size={34} onPress={() => { }} />
                </View>
                {
                    value ?
                        <View style={buttonClose}>
                            <IconToggle name={'close'} color={borderColor} size={28} onPress={() => setValue('')} />
                        </View>
                        : <></>
                }
            </View>
        </KeyboardAvoidingView>
    );
};

export default SystemSearch;