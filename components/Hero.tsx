import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { FaArrowRight } from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import IconButtonLink from "./IconButtonLink";


const Hero = () => {
  return (
    <Flex px="1rem" py="4rem" flexDir="column">
      <Heading px="1rem" textAlign="center" fontWeight="bold">Travelling in style, learning  along the way...</Heading>
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
