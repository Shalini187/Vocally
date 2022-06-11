import React, { createContext, useState } from 'react';
import { View } from 'react-native';

import { SystemMapView } from './source/components';

console.disableYellowBox = true;

export const Context = createContext({});

export const App = () => {
  
  let [value, setValue] = useState<string>('');
  let [mapRef, setMapRef] = useState<any>(false);
  let [theme, setTheme] = useState<string>('light');
  let [state, setBorderColor] = useState<any>({ color: '#000', borderColor: '#fff' });

  let obj = { theme, setTheme, value, setValue, mapRef, setMapRef, state, setBorderColor };

  return (
    <Context.Provider value={{...obj}}>
      <View style={{ flex: 1 }}>
        <SystemMapView />
      </View>
    </Context.Provider>
  )
}
