import {
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import car1 from "../assets/car1.jpg";

const Configurator = () => {
  return (
    <Card
      maxW="350px"
      position={{ base: "static", md: "static", lg: "absolute" }}
      top={"10px"}
      className="configurator-container"
      mx={"auto"}
      my={{ base: "20px", md: "0", lg: 0 }}
    >
      <CardBody>
        <Image src={car1} alt="mercedes-amg-a45" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Mercedes-amg-a45</Heading>
          <Text>
            2018 Mercedes-AMG A 45 | 2.0L 5dr Hatchback SpdS DCT Petrol | 15105
            Miles | Finished in Jupiter Red with Black Nappa Leather Interior |
            19inch AMG Double Spoke Wheels in Black with Red AMG Brake Calipers
            etc...
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $220
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Configurator;
