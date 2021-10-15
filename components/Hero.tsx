import Icon from "@chakra-ui/icon";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { FaArrowRight } from "react-icons/fa";
import IconButtonLink from "./IconButtonLink";


const Hero = () => {
  const headingSize = useBreakpointValue({ base: 'xl', lg: '2xl' });

  return (
    <Flex px="1rem" py="4rem" flexDir="column">
      <Heading size={headingSize} px="1rem" textAlign="center" fontWeight="bold">Travelling in style, learning  along the way...</Heading>
      <Text py="2rem" textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta vel doloribus libero quisquam? Ab eveniet alias ipsum impedit sunt inventore excepturi nostrum iure. 
      </Text>
      <Flex justify="center">
        <IconButtonLink href="#" aria-label="article" borderRadius="full" pt="2rem" pb="2rem" pl="1.25rem" pr="1.25rem">
          <Icon as={FaArrowRight} boxSize="1.5rem"/>
        </IconButtonLink>
      </Flex>
    </Flex>
  )
};

export default Hero;
