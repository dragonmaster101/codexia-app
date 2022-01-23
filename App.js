import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import {
  Heading,
  NativeBaseProvider,
  Input,
  Box,
  Button,
  Icon,
  Text,
  extendTheme,
  VStack,
} from "native-base";
import { MaterialIcons  , Entypo , Ionicons} from "@expo/vector-icons"



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {

  const [show, setShow] = React.useState(false)
  const [email , setEmail] = React.useState(false);
  const [name , setName] = React.useState(false);
  const [userName , setUserName] = React.useState(false);
  const [password , setPassword] = React.useState(false);
  const [confirmedPassword , setConfirmedPassword] = React.useState(false);

  const handleClick = () => setShow(!show)

  return (
    <NativeBaseProvider>

      <Box bg={"#AEFEFF"} padding={100}>
      
        <Heading textAlign={"center"} margin={17} color={"white"}>Register Account</Heading>
        {/* <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "#EA99D5" }}
          px={4}
          flex={1}
        > */}

          {/* Vertical stack for the text inputs */}
          <VStack space={5} alignItems="center">

            {/* Name text Input */}
            <Input 
              placeholder="Name" bg={"white"} variant={"underlined"}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={3}
                  ml="2"
                  color="muted.400"
                />
              }
              onChange={e => setName(e.target.value)}
              ></Input>

            {/* Email Text Input */}
            <Input 
              InputLeftElement={
                <Icon
                  as={<Entypo name="email" size={24} color="black" />}
                  size={3}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Email" bg={"white"} variant={"underlined"}
              onChange={e => setEmail(e.target.value)}
            ></Input>

            {/* Username text Input */}
            <Input 
              placeholder="Username" bg={"white"} variant={"underlined"}
              InputLeftElement={
                <Icon
                  as={<Entypo name="emoji-flirt" size={24} color="black" />}
                  size={3}
                  ml="2"
                  color="muted.400"
                />
              }
              onChange={e => setUserName(e.target.value)}
            ></Input>

            {/* Password Text Input */}
            <Input
              type={show ? "text" : "password"}
              // InputRightElement={
              //   <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
              //     {show ? "Hide" : "Show"}
              //   </Button>
              // }
              InputLeftElement={
                <Icon
                  as={<Ionicons name="key" size={24} color="black" />}
                  size={3}
                  ml="2"
                  color="muted.400"
                />
              }
              bg={"white"}
              variant={"underlined"}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />

            {/* Confirm Password Text Input */}
            <Input
                type={show ? "text" : "password"}
                // InputRightElement={
                //   <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                //     {show ? "Hide" : "Show"}
                //   </Button>
                // }
                InputLeftElement={
                  <Icon
                    as={<Ionicons name="key" size={24} color="black" />}
                    size={3}
                    ml="2"
                    color="muted.400"
                  />
                }
                bg={"white"}
                variant={"underlined"}
                placeholder="Confirm password"
                onChange={e => setConfirmedPassword(e.target.value)}
              />

              <Button onPress={() => {
                alert(name);
                alert(userName);
                alert(email);
                alert(password);
                alert(confirmedPassword)
              }}>Register!</Button>

            </VStack>
        </Box>
      {/* </Center> */}
    </NativeBaseProvider>
  );
}