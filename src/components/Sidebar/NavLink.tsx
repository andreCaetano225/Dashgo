import { Icon, Link as LinkChakara, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"
import { ActiveLink } from "../ActiveLink";

export interface NavLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
    return (
        <ActiveLink href={href} passHref>
            <LinkChakara display={"flex"} alignItems={"center"} {...rest}>
                <Icon as={icon} fontSize={"20"} />
                <Text ml={"4"} fontWeight={"medium"}>{children}</Text>
            </LinkChakara>
        </ActiveLink>

    )
}