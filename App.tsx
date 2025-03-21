import { StatusBar } from 'react-native';
import { 
  useFonts, 
  Poppins_700Bold, 
  Poppins_400Regular 
} from '@expo-google-fonts/poppins';

import { GluestackUIProvider, VStack } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'

import Login from './src/screens/Login';
import { Confirmation } from './src/screens/ConfirmationScreen';

import { Loading } from './src/components/Loading';
import { Start } from './src/components/Start';

export default function App() {

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold})

  return (
    <GluestackUIProvider config={config}>
        <StatusBar 
          barStyle={'dark-content'} 
          backgroundColor="transparent"
          translucent
        />

          { fontsLoaded ? <Start/> : <Loading/>}
    </GluestackUIProvider>
  );
}