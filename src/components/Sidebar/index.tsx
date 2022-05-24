import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';
import { useSideBarDrawer } from '../Contexts/SideBarContexts';
import { SideBarNav } from './SidebarNav';
export function Sidebar() {

    const { isOpen, onClose } = useSideBarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={'gray.800'} p='4'>
                        <DrawerCloseButton />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as="aside" w={"64"} mr="8">
            <SideBarNav />
        </Box>
    )
}