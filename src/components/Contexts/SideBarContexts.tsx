import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";



export interface SideBarConstextProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarConstext = createContext({} as SideBarDrawerContextData);



export const SideBarConstextProvider = ({ children }: SideBarConstextProps) => {

    const disclosure = useDisclosure()
    return (
        <>
            <SideBarConstext.Provider value={disclosure}>
                {children}
            </SideBarConstext.Provider>
        </>
    );
}


export const useSideBarDrawer = () => useContext(SideBarConstext)