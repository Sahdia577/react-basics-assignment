import logo from '../utils/Images/logo.jpg';
import { Button } from '../components/ui/Button'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import {
    Text,
    Tag,
    Image,
    Center,
    Card,
    CardBody,
    Stack,
    Flex,
    Box, 
    List,
} from '@chakra-ui/react';

export const RecipePage = ({ recipe, clickFn }) => {
    // Display each ingredient on separate line
    const ingredientList = recipe.ingredientLines.map(
        line => <li key={line}>{line}</li>
    );
    
    // Get the 7 nutrients
    const totalNutrients = recipe.totalNutrients;
    const calories = totalNutrients.ENERC_KCAL;
    const carbs = totalNutrients.CHOCDF;
    const protein = totalNutrients.PROCNT;
    const fat = totalNutrients.FAT;
    const cholesterol = totalNutrients.CHOLE;
    const sodium = totalNutrients.NA;

    return (
        <>
            <Center h='100%' overflow='hidden' bg='pink.600'>
                <Card
                    bgColor='white'
                    borderRadius={0}
                    overflow='hidden'
                    w={{ base: 'sm', md: 'lg', lg: '3xl' }}
                    h='100%'
                >
                    <CardBody p={0}>
                        <Stack direction='row' spacing={0}>
                            <Button
                                w={20}
                                h='5rem'
                                mt={-1}
                                borderRadius={0}
                                variant='ghost'
                                bg='white'
                                onClick={() => clickFn()}
                            >
                                <ArrowLeftIcon />
                            </Button>
                            <Box h='4.7rem' mt={-1} w='38rem' align='center'>
                                <Image
                                    alt='Winc Logo'
                                    w='35px'
                                    h='35px'
                                    src={logo}
                                />
                                <Text color='blue.300' fontWeight={500} fontSize={11}>
                                    WINC
                                </Text>
                                <Text color='blue.300' fontWeight={400} fontSize={11}>
                                    Academy
                                </Text>
                            </Box>
                        </Stack>
                        <Flex>                          
                            <Image
                                h='17rem'
                                w='100%'
                                objectFit='cover'
                                mx={0}
                                src={recipe.image} 
                            /> 
                        </Flex>
                        <Stack
                            direction={{ base:'column', lg:'row'}}
                            spacing={4}
                            mt={5}
                        >
                            <Flex
                                flexDir='column'
                                gap={2}
                                w={{ base: '100%', lg: '50%' }}
                                align={{ base: 'center', lg:'flex-start' }}
                            >
                            <Text textTransform='uppercase' fontSize={12}>
                                {recipe.mealType}
                            </Text>
                            <Text
                                textTransform='capitalize'
                                fontWeight={600}
                                fontSize={18}
                                >
                                    {recipe.label}
                                </Text>                               
                                <Flex gap={2}>
                                    <Text>Total cooking time:</Text>
                                    <Text fontWeight={500}>
                                        {recipe.totalTime} Minutes
                                    </Text>
                                </Flex>
                                <Flex gap={2} mt={-2}>
                                    <Text>Servings:</Text>
                                    <Text fontWeight={500}>
                                        {recipe.yield}
                                    </Text>
                                </Flex>
                                <Text fontWeight={500}>Ingredients:</Text>
                                <List spacing={2}>
                                    {ingredientList}
                                </List>                        
                            </Flex>
                            <Flex
                                direction='column'
                                w={{ base: '100%', lg: '50%' }}
                                align={{ base: 'center', lg:'flex-start'}}
                            >
                                <Text>Health labels:</Text>
                                <Flex                                
                                    justify={{ base: 'space-around', lg:'start' }}
                                    gap={2}
                                    wrap='wrap'
                                >
                                    <>
                                        {recipe.healthLabels.map((labels) => (                 
                                            <Tag
                                                key={recipe.healthLabels}
                                                textTransform='uppercase'
                                                fontSize={10}
                                                bgColor='yellow.400'
                                                color='gray.900'
                                            >
                                                {labels}
                                            </Tag>
                                        ))}
                                    </>
                                </Flex>
                                <Text mt={2}>Diet:</Text>
                                <Flex justify='start' gap={2} wrap='wrap'>
                                    <>
                                        {recipe.dietLabels.map((labels) => (     
                                            <Tag
                                                key={recipe.dietLabels}
                                                textTransform='uppercase'
                                                fontSize={10}
                                                bgColor='green.400'
                                                color='gray.900'
                                            >
                                                {labels}
                                            </Tag>
                                        ))}
                                    </>
                                </Flex>
                                <Flex justify='start' gap={2} wrap='wrap' mt={2}>
                                    <>
                                        {recipe.cautions.length > 0 && <Text fontWeight={500}>
                                            Cautions:
                                        </Text>}
                                        {recipe.cautions.map((cautions) => (
                                            <Tag
                                                key={recipe.cautions}
                                                textTransform='uppercase'
                                                fontSize={10}
                                                bgColor='purple.400'
                                                color='gray.800'
                                            >    
                                                {cautions}
                                            </Tag>
                                        ))}
                                    </>
                                </Flex>
                                <Text fontWeight={500} mt={2}>Total nutrients:</Text>
                                <Flex
                                    gap={5}
                                    wrap='wrap'
                                    justify={{ base:'center', lg:'start' }}
                                    key={calories.label}
                                >
                                    <Flex direction='column'>
                                        <Text>{calories.quantity.toFixed(0)}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            Calories
                                        </Text>
                                    </Flex>
                                    <Flex direction='column'>
                                        <Text>{carbs.quantity.toFixed(0)} {carbs.unit}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            {carbs.label}
                                        </Text>
                                        </Flex>
                                        <Flex direction='column'>
                                        <Text>{protein.quantity.toFixed(0)} {protein.unit}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            {protein.label}
                                        </Text>
                                        </Flex>
                                        <Flex direction='column'>
                                        <Text>{fat.quantity.toFixed(0)} {fat.unit}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            {fat.label}
                                        </Text>
                                        </Flex>
                                        <Flex direction='column'>
                                            <Text>{cholesterol.quantity.toFixed(0)} {cholesterol.unit}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            {cholesterol.label}
                                        </Text>
                                        </Flex>
                                        <Flex direction='column'>
                                        <Text>{sodium.quantity.toFixed(0)} {sodium.unit}</Text>
                                        <Text
                                            fontWeight={700}
                                            fontSize={12}
                                            textTransform='uppercase'
                                        >
                                            {sodium.label}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Stack>                                                   
                    </CardBody>
                </Card>
            </Center>
        </>
    );
};



          