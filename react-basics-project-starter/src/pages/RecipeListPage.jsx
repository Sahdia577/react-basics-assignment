import { data } from '../utils/data';
import { TextInput } from '../components/ui/TextInput';
import { useState } from 'react'
import {
    Flex,
    Card,
    CardBody,
    Center,
    Text,
    Image,
    Stack,
    Tag,
    Heading,
} from '@chakra-ui/react';

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState(''); 
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // Match recipe name or match health label
  let matchedRecipe = data.hits.filter(obj => {
    let matchLabel = obj.recipe.label.toLowerCase().includes(searchField.toLowerCase());
    let matchHealthLabel = obj.recipe.healthLabels.some(label =>
      label.toLowerCase().includes(searchField.toLowerCase()));
    
    return matchLabel || matchHealthLabel
  });
  
  let displayMatchedRecipe = data.hits;
  if (matchedRecipe.length > 0)
  {
    displayMatchedRecipe = matchedRecipe;
  }

  const list = displayMatchedRecipe.map((obj) => (
    <Card
    
      bgColor='white'
      overFlow='hidden'
      borderRadius={15}
      h='sm'
      w='xsm'
      cursor='pointer'
      _hover={{ transform: 'scale(1.03)' }}
      key={obj.recipe.healthLabels}
      onClick={() => clickFn(obj.recipe)}
    >
      <CardBody w='18em' p={0}>
        <Stack direction='column' spacing='2px' align='center'>
          <Image key={obj.recipe.image}
            src={obj.recipe.image}
            h='10rem'
            w='100%'
            mt={-1}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            objectFit='cover'
          />
          <Text textTransform='uppercase' key={obj.recipe.mealType}>
            {obj.recipe.mealType}
          </Text>
          <Text
            fontSize={18}
            fontWeight='bold'
            textAlign='center' 
            key={obj.recipe.label}
          >
            {obj.recipe.label}
          </Text>
          <Flex gap={1} key={obj.recipe.healthLabels}>
            {obj.recipe.healthLabels.filter(
              label => label.includes('Vegetarian')).map(filteredLabel => (
                <Tag
                  key={filteredLabel}
                  textTransform='uppercase'
                  fontSize={10}
                  bgColor='yellow.400'
                  color='gray.900'
                >
                  Vegetarian
                </Tag>
              ))}
            {obj.recipe.healthLabels.filter(
              label => label.includes('Vegan')).map(filteredLabel => (
                <Tag
                  key={filteredLabel}
                  textTransform='uppercase' 
                  fontSize={10}        
                  bgColor='yellow.400'  
                  color='gray.900'     
                >
                  Vegan
                </Tag>
              ))}
          </Flex>
          <Text textTransform='capitalize'>
            Dish: {obj.recipe.dishType}
          </Text>
          <Flex justify='center' gap={2} wrap='wrap'>
            <>
              {obj.recipe.cautions.length > 0 && <Text>Cautions: </Text>}
              {obj.recipe.cautions.map((cautions) => (
                <Tag
                  key={obj.recipe.cautions}
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
        </Stack>
      </CardBody>
    </Card>
  ));
  
  return (
    <>
      <Center bg='pink.600' flexDir="column" h='100%'>
        <Heading size='xl' mt={2} color='white'>
          Winc Recipe Checker
        </Heading>
        <TextInput
          changeFn={handleChange}
          matchedRecipe={matchedRecipe}
        />
        <Flex wrap='wrap' gap={8} justify='center' my={2}>
          {list}          
        </Flex>
      </Center>
    </>
  );
};