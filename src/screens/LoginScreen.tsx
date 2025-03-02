
import React, { useState } from 'react';
import { TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Box, Text, VStack } from '@gluestack-ui/themed';

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
  };

  return (
    <Box 
      flex={1} 
      justifyContent="center" 
      alignItems="center" 
      bg="$backgroundLight0" 
      p="$5"
    >
      <VStack 
        space={'sm'} 
        width="80%"
      >
        <Text 
          fontSize={20} 
          fontWeight="bold"
        >
            Login via WhatsApp
        </Text>
        
        <TextInput
          style={{
            borderWidth: 1, borderColor: 'gray', padding: 10, width: '50%', borderRadius: 5
          }}
          placeholder="Digite seu número"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
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
    </Box>
  );
};

export default LoginScreen;
