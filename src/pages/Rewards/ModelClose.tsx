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
  HStack,
  Heading,
} from "@chakra-ui/react";
import { AwardIcon, PartyPopperIcon } from "lucide-react";
import { useEffect } from "react";

const ModalClose = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         onOpen();
//       }
//     };

//     const handleBlur = () => {
//       onOpen();
//     };

//     const handleBeforeUnload = (e: BeforeUnloadEvent) => {
//       e.preventDefault();
//       onOpen();
//       return (e.returnValue = "");
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     window.addEventListener("blur", handleBlur);
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       window.removeEventListener("blur", handleBlur);
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <VStack spacing={4}>
            <VStack w="full" align="center" justify="center" spacing={2}>
              <PartyPopperIcon size={48} />
              <Heading as="h2" size="lg" textAlign="center">
                Exclusive Early-Bird Offer!
              </Heading>
            </VStack>
            <Text>Join now and unlock these special benefits:</Text>
            <VStack align="start" spacing={2}>
              <Text>• $10 early-bird bonus on top of regular rewards</Text>
              <Text>• Priority access to interview stage</Text>
              <Text>• Exclusive early feedback privileges</Text>
            </VStack>
            <Text fontWeight="bold">
              Limited time offer - Only 50 spots remaining!
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing={2}
            align="center"
            justify="center"
          >
            <Button
              size="lg"
              variant="gradient"
              w={{ base: "full", md: "auto" }}
              onClick={onClose}
              rightIcon={<AwardIcon />}
            >
              Claim Your Bonus
            </Button>
            <Button
              variant="ghost"
              w={{ base: "full", md: "auto" }}
              size="lg"
              onClick={onClose}
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
