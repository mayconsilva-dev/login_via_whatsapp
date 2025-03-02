import { GluestackUIProvider, VStack } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'


import { StatusBar, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <VStack flex={1}>
        <StatusBar 
          barStyle={'light-content'} 
          backgroundColor="transparent"
          translucent
        />
          <LoginScreen/>
      </VStack>
    </GluestackUIProvider>
  );
}

