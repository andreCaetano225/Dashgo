import { Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine, RiUserLocationLine } from 'react-icons/ri'
import { Logo } from './logo';
import { NotificationNav } from './NotificcationNav';
import { Profile } from './Profile';
import { SerchBox } from './SerchBox';

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as="header"
            w={'100%'}
            maxWidth={'1480'}
            h={"20"}
            mx={"auto"}
            mt={"4"}
            px={"6"}
            align={"center"}
        >
            <Logo />
            {isWideVersion ? (
                <SerchBox />

            ) : (null)
            }
            <Flex
                align={'center'}
                ml="auto"
            >
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}