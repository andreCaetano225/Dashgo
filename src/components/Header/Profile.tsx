import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export interface ProfileProps {
    showProfileData: boolean
}

export const Profile = ({ showProfileData }: ProfileProps) => {
    return (
        <Flex
            align={"center"}
        >
            {showProfileData ? (
                <>

                    <Box mr={"4"} textAlign={"right"}>
                        <Text>
                            André Sousa
                        </Text>
                        <Text color={"gray.300"} fontSize={"small"}>
                            andre.sousa2007@hotmail.com
                        </Text>

                    </Box>
                    <Avatar size="md" name='Andre Sousa' />

                </>

            ) : (
                <Avatar size="md" name='Andre Sousa' />

            )}
        </Flex>
    )
}