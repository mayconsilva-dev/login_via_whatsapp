import { TextInput } from "react-native"

import { VStack, HStack, Text, Image, Button } from "@gluestack-ui/themed"

export function Confirmation(){
    return(
        <VStack flex={1}>
          <VStack
            alignItems="center"
            w="$full"
            h="$3/5"
            bg="$purple500"
          >
            <VStack 
              justifyContent='center'
              alignItems='center'
              pt="$16"
            >
              <HStack 
                pb="$16"
                pr="$32"
              >
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
            </VStack>

            <VStack>
              <Text 
                fontFamily="$heading"
                color="$gray100"
                fontSize="$xl"
                pt="$10"
                pb="$24"
              >
                  Código de Confirmação
              </Text>
            </VStack>

              <Text 
                fontFamily="$body"
                fontSize="$sm"
                color="$gray100"
                pt="$6"
                >
                Insira o código de 6 dígitos que {'\n'}
                foi enviado para você
              </Text>

            <HStack 
                space="sm"
                pt="$10"
            >
                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  
                  keyboardType="phone-pad"
                />
  
                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  keyboardType="phone-pad"
                />

                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  keyboardType="phone-pad"
                />

                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  keyboardType="phone-pad"
                />

                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  keyboardType="phone-pad"
                />

                <TextInput 
                  style={{
                    backgroundColor: 'white',
                    width: 35,
                    height: 40,
                    borderRadius: 5, 
                    fontSize: 25,
                    fontFamily: 'Poppins_400Regular',
                    textAlign: 'center'
                  }} 
                  keyboardType="phone-pad"
                />
            </HStack>

              <Text 
                fontFamily="$body"
                fontSize="$xs"
                color="$gray100"
                pt="$4">
                Não recebeu nenhum código?
              </Text>
          
          </VStack>
          <VStack
            alignItems='center'
            bg="$orange500"
            h="$4/6"
            pt="$5"
            >
              <Button
                bg="$purple500"
              >
                <Text 
                  fontFamily="$body"
                  fontSize="$sm"
                  color="$gray100">
                  Reenviar código
                </Text>
              </Button>
             
          </VStack>
        </VStack>
    )
}