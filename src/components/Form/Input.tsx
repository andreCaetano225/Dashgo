import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from "@chakra-ui/react";

export interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function InputForm ( {name, label, ...rest} : InputProps){
    return (
        <FormControl>
            {!! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input
            name={name}
            id={name}
            focusBorderColor='pink.500'
            bg={'gray.900'}
            variant={'filled'}
            _hover={{
              bg: 'gray.900'
            }}
            size={'lg'} 
            {...rest}
            />
            </FormControl>
    )
}