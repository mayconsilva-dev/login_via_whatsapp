import { FlatList } from "react-native"
import { VStack, HStack, Text, Image } from "@gluestack-ui/themed"
import { Eye, Power, ArrowCircleDown, ArrowCircleUp, CurrencyDollar, ListBullets } from "phosphor-react-native"

export function Start() {

    return(
        <VStack 
          flex={1}
          bg="$gray200"
        >
            <VStack 
              h="$80"
              bg="$purple500"
            >
                <HStack 
                  alignItems="center"
                  justifyContent="space-around"
                  pt="$8"
                >
                  
                    <Image
                      source={{ uri: "https://github.com/mayconsilva-dev.png" }}
                      alt="Foto de perfil"
                      w="$16"
                      h="$16"
                      top="$8"
                      left="$5"
                      borderRadius={7}
                    />

                    <Text 
                      fontFamily="$body"
                      fontSize="$md"
                      color="$gray100"
                      pt="$16"
                      pl="$10"
                      
                      >
                        Olá, {"\n"}
                        Maycon
                    </Text>
                    
                    <HStack 
                      flex={1}
                      justifyContent="space-around"
                      pt="$16"
                      pl="$32">
                      <Eye
                        size={30}
                        color="#FF872C"
                      />
                  
                      <Power
                        size={30}
                        color="#FF872C"
                      />
                    </HStack>
                </HStack>

                <VStack 
                  justifyContent="center"
                  bg="$gray100"
                  w="$80"
                  h="$40"
                  pb="$10"
                  m="$12"
                  borderRadius={5}
                  position="relative"
                >
                  
                    <HStack 
                      flexDirection="row"
                      justifyContent="space-around"
                      pt="$5"
                    >
                      <Text 
                        fontFamily="$body"
                        fontSize="$sm"
                        pr="$24"
                      > 
                        Entradas
                      </Text>
  
                      <VStack 
                        pl="$5"
                      >
                        <ArrowCircleUp
                          size={30}
                          color="#12A454"
                        />
                      </VStack>
                    </HStack>
  
                    <Text 
                     fontFamily="$heading"
                     fontSize="$3xl"
                     color="$blueGray800"
                     pt="$5"
                     pl="$7">
                      R$ 17.400,00
                    </Text>
  
                    <Text 
                      fontFamily="$body"
                      fontSize="$xs"
                      color="gray300"
                      pl="$7"
                    >
                      Última entrada 13 de abril
                    </Text> 
                   
                    
                  
                </VStack>
            </VStack>
        </VStack>
    )
}