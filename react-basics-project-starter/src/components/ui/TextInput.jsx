import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn, matchedRecipe, ...props }) => {
    return (
        <Input
            size='md'
            variant='outline'
            w={[ '220px', '300px', '400px' ]}
            my={5}
            fontSize={18}
            bgColor='white'
            onChange={changeFn}
            matchedRecipe={matchedRecipe}
            {...props} 
        />
    );
};