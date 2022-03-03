import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { InputForm } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserCreate() {
    return (
        <>
            <Box>
                <Header />
                <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px="6">
                    <Sidebar />
                    <Box flex={'1'} borderRadius={8} bg='gray.800' p={'8'}>
                        <Heading size={'lg'} fontWeight='normal'>
                            Criar usuário
                        </Heading>

                        <Divider my={'6'} borderColor='gray.700'></Divider>

                        <VStack spacing={'8'}>
                            <SimpleGrid minChildWidth={'240px'} spacing='8' w={'100%'}>
                                <InputForm name="name" label="Nome Completo" />
                                <InputForm name="email" label="E-mail" type={'email'} />
                            </SimpleGrid>

                            <SimpleGrid minChildWidth={'240px'} spacing='8' w={'100%'}>
                                <InputForm name="password" label="Senha" type={'password'} />
                                <InputForm name="password_confirmation" label="Confirmação da senha" type={'password'} />
                            </SimpleGrid>
                        </VStack>
                        <Flex mt='8' justify={'flex-end'}>
                            <HStack spacing={'4'}>
                                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
                                <Button colorScheme={'pink'}>Salvar</Button>
                            </HStack>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}