import logo from "./raho-logo.png";

import {FaUserCircle ,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import { AuthContext  } from "../context/AuthContext";
import { useContext } from "react";
import axios from "../axios";
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  useBreakpointValue,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';



const NavLink = ({nav ,  text , link }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={()=>nav(link)}
   >
    {text}
      </Link>
);


 export default function Navbar()  {
const  nav = useNavigate()

  const { user } = useContext(AuthContext);
  
  const logOutUser = (e)=> {
    e.preventDefault()
    localStorage.clear();
    window.location.reload()
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md : 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />


          <HStack spacing={8} alignItems={'center'}          
                cursor={'pointer'}
          
          >
            <Image src={logo} alt="Logo" boxSize="40px" />
            <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            // color={useColorModeValue('green.800', 'blue')}
            >
              Raho
            </Text>


            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              cursor={'pointer'}
              
              >

                <NavLink nav={nav} text={'View Room'} link ='/viewRoom' />
                <NavLink nav={nav} text={'Add Room'} link ='addRoom' />
                <NavLink nav={nav} text={'About'} link ='/about' />
            </HStack>

          </HStack>


          <Flex alignItems={'center'}>

          <Button onClick={toggleColorMode} mr={4} 
                cursor={'pointer'}
          
          >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            <Box>


              <Button 
                textDecoration={'none'}
                color = 'black'
                variant={'solid'}
                colorScheme={'green'}
                size={'sm'}
                mr={5}
                leftIcon={<FaUserCircle />}
                borderRadius={'20px'}
                cursor={'pointer'}
                onClick={() =>nav('/register') }
                > 
              Sign In  
              </Button>

              <Button 
                 textDecoration={'none'}
                 color = 'black'
                 variant={'solid'}
                 colorScheme={'blue'}
                 size={'sm'}
                 mr={8}
                 leftIcon={<FaSignInAlt />}
                 borderRadius={'20px'}
                 cursor={'pointer'}
                 onClick={() =>nav('/login') }
                > 

Log In                
              </Button>


            </Box>

            <Menu>


              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
           user ?  axios.defaults.baseURL +  user.photoUrl :
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>

              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>

                <MenuDivider />

                <MenuItem><FaSignOutAlt spacing={2}/> Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <NavLink text={'View Room'} link ='/viewRoom' />
                <NavLink text={'Add Room'} link ='addRoom' />
                <NavLink text={'About'} link ='/about' />
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}