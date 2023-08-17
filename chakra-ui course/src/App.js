
import {
  Container,
  VStack,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';


function App() {

 
    return (

    <Container maxWidth={'container.lg'} padding={4}>

      <Flex h='100vh' py='10'>

<VStack 
  alignItems={'center'}
  w='full'
  h='full'
  p={10}
  spacing={10}
  align={'flex-start'}
  bg={'green.200'}
> 
<Heading>Your Details</Heading>
<Text> please ener your details to lace order</Text>



</VStack>


<VStack 
  alignItems={'center'}
  w='full'
  h='full'
  p={10}
  spacing={10}
  align={'flex-start'}
  bg={'gray.200'}

> 



</VStack>

      </Flex>





    </Container>

 

    );
}

export default App;
