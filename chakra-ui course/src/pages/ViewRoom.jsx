import { useParams , Link } from "react-router-dom";
// import { StarIcon } from '@chakra-ui/icons';

// // import useFetch from "../../hooks/useFetch"
import {
    Box,
    Flex,
    Text,
    Image ,
    Badge
} from "@chakra-ui/react";
import { GoVerified } from 'react-icons/go';


const ViewRoom = () => {

  const { id } = useParams();

  // const {data , loading , error } = {4,5,3}; useFetch('room/viewRoom/'+id)
  // console.log(data)
  // let data , loading , error ;
  let rooms , baths, isVerified , price ,randBoostScore , rentFrequency,title ,score_l1;

  return (
    <Link href={`/property/`} passHref >
        <Box
            bg="white"
            _dark={{ bg: "gray.800" }}
            maxW="sm"
            borderWidth="1px"
            roundedTop="md"
            padding={23}
            shadow="lg"
            style={{ cursor: 'pointer' }}
            _hover={{ transform: 'scale(1.02)' }}
        >
            <Image
                src={""}
                alt='property'
                roundedTop="lg"
            />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" colorScheme="red">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        <Flex alignItems='center' justifyContent='center'>
                            {rooms} Rooms &bull; {baths} baths &nbsp;
                            <Box color='green.400'>{isVerified && <GoVerified />}</Box>
                        </Flex>
                    </Box>
                </Box>

                <Text
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                >
                    AED
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    {rentFrequency && `/${rentFrequency}`}
                </Text>

                <Box>
                    {title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            < StarIcon
                                key={i}
                                color={i < (randBoostScore / 100) ? "red.500" : "gray.300"}
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {score_l1} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    </Link>
  );
};

export default ViewRoom;





// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import React from "react";
// export default function ViewRoom() {
//   return (
//     <ChakraProvider>

//     <Center h="100vh">
//       <Box p="5" maxW="320px" borderWidth="1px">
//         <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
//         <Flex align="baseline" mt={2}>
//           <Badge colorScheme="pink">Plus</Badge>
//           <Text
//             ml={2}
//             textTransform="uppercase"
//             fontSize="sm"
//             fontWeight="bold"
//             color="pink.800"
//           >
//             Verified &bull; Cape Town
//           </Text>
//         </Flex>
//         <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
//           Modern, Chic Penthouse with Mountain, City & Sea Views
//         </Text>
//         <Text mt={2}>$119/night</Text>
//         <Flex mt={2} align="center">
//           <Box as={faStar} color="orange.400" />
//           <Text ml={1} fontSize="sm">
//             <b>4.84</b> (190)
//           </Text>
//         </Flex>
//       </Box>
//     </Center>
//     </ChakraProvider>

//   );
// }






