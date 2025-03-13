
import React, { useState } from 'react';
import { TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, HStack, Text, VStack } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';


const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleLogin = async () => {
    if (!phoneNumber) {
      Alert.alert('Erro', 'Digite um número de telefone');
      return;
    }

      try {
      // Simulação da requisição ao backend
      const response = await fetch('https://seu-backend.com/auth-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber })
      });
      
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        Alert.alert('Sucesso', 'Login realizado!');
      } else {
        Alert.alert('Erro', data.message || 'Falha ao autenticar');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao conectar ao servidor');
    } 


      /*try {
        // Simula um pequeno atraso como se estivesse fazendo a requisição
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        // Simula um token gerado
        const fakeToken = 'fake-jwt-token-123456';
    
        // Armazena o token como se fosse uma resposta real
        await AsyncStorage.setItem('token', fakeToken);
    
        // Exibe um alerta de sucesso
        Alert.alert('Sucesso', 'Login realizado!');
      } catch (error) {
        Alert.alert('Erro', 'Falha ao processar o login');
      }*/
  }; 

  return (
    <VStack flex={1}>
      <VStack 
        w="$full"
        h="$3/5"
        bg="$purple500"
        justifyContent='center'
        alignItems='center'
        pt="$20"
        >
          <HStack 
            pb="$16"
            pr="$32">
            <Image 
              source={require('../../assets/logo_g3.png')}
              alt='Imagem da logo g3'
              w="$10"
              h="$16"
              pt="$2"
            />
            <Text
             fontFamily='$body'
             color='$gray100'
             pt="$8"
             >
              FINANÇAS
            </Text>
          </HStack>
        <Text 
          fontSize="$3xl"
          fontFamily="$heading"
          color="$gray100"
          pb="$10"
          pl="$11"
          
        >
          Controle suas {'\n'}
          finanças de forma {'\n'}
          muito simples
        </Text>
        <Text
          fontSize="$md"
          fontFamily="$body"
          color="$gray100"
          pt="$10"
          pl="$48"
          pr="$full"
        >
          Faça seu login {'\n'}
          via WhatsApp
        </Text>
    </VStack>
    
    <VStack 
      justifyContent='center'
      alignItems='center'
      position="absolute"
      paddingTop="$full" 
      top="11.5%"
      right="$1"
      left="$1"
      zIndex={1} 
      >
        <TextInput
          style={{
            backgroundColor: 'white',
            width: '55%',
            padding: 14,
            borderRadius: 5,
            
          }}
          placeholder="Digite seu número"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber} />
      </VStack>
      
      <VStack 
        alignItems='center'
        bg="$orange400"
        h="$4/6"
        pt="$16">
        <Button
          onPress={handleLogin}
          bg="$primary500"
          p="$3"
          w="$32"
          h="$10"
        >
          <Text
            color="$white"
          >
            Entrar
          </Text>
        </Button>
       </VStack>
    </VStack>
  );
};

export default LoginScreen;
