import {
  Button,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Stack,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";
import { AwardIcon, PartyPopperIcon } from "lucide-react";
import { useEffect } from "react";

const ModalClose = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleVisibilityChange = () => {
      // Only trigger if document is hidden and not focused on an iframe
      if (document.hidden && document.activeElement?.tagName !== "IFRAME") {
        onOpen();
      }
    };

    const handleBlur = (e: FocusEvent) => {
      // Only trigger if not focusing on an iframe
      if ((e.relatedTarget as HTMLElement)?.tagName !== "IFRAME") {
        onOpen();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Only trigger if not interacting with an iframe
      if (document.activeElement?.tagName !== "IFRAME") {
        e.preventDefault();
        onOpen();
        return (e.returnValue = "");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent
        bg="gray.800"
        borderWidth="1px"
        borderColor="gray.700"
        boxShadow="2xl"
        borderRadius="2xl"
      >
        <ModalBody p={{ base: 4, md: 10 }}>
          <VStack spacing={{ base: 4, md: 6 }} w="full">
            <Box
              p={4}
              bg="brand.500"
              borderRadius="full"
              boxShadow="0 0 20px rgba(66, 153, 225, 0.3)"
            >
              <PartyPopperIcon size={48} color="white" />
            </Box>

            <VStack w="full" align="center" justify="center" spacing={3}>
              <Heading
                as="h2"
                size="lg"
                textAlign="center"
                bgGradient="linear(to-r, brand.200, brand.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Exclusive Early-Bird Offer!
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.300"
                textAlign="center"
              >
                Join now and enjoy these special benefits:
              </Text>
            </VStack>

            <Box
              w="full"
              p={{ base: 4, md: 6 }}
              bg="whiteAlpha.50"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
            >
              <VStack align="start" spacing={4} w="full">
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.100">
                  ✨ $10 early-bird bonus on top of regular rewards
                </Text>
                <Divider borderColor="whiteAlpha.200" />
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.100">
                  🎯 Priority access to the interview stage
                </Text>
                <Divider borderColor="whiteAlpha.200" />
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.100">
                  🗣️ Early feedback privileges to shape the product
                </Text>
              </VStack>
            </Box>

            <Text
              fontWeight="bold"
              color="yellow.400"
              w="full"
              textAlign="center"
              fontSize="sm"
            >
              ⏳ Hurry! Only 50 spots left.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter borderTopWidth="1px" borderColor="whiteAlpha.100" p={6}>
          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing={4}
            align="center"
            justify="center"
          >
            <Button
              size={{ base: "md", md: "lg" }}
              variant="gradient"
              w={{ base: "full", md: "auto" }}
              onClick={onClose}
              rightIcon={<AwardIcon />}
              px={8}
              py={6}
              fontSize="md"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              transition="all 0.2s"
            >
              Claim Your Bonus
            </Button>
            <Button
              variant="subtle"
              w={{ base: "full", md: "auto" }}
              size={{ base: "md", md: "lg" }}
              onClick={onClose}
              color="gray.400"
              _hover={{ color: "white", bg: "whiteAlpha.100" }}
            >
              Maybe Later
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalClose;
