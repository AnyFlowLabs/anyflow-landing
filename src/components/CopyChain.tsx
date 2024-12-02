import { Flex, Text, Tooltip, useClipboard } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

export const CopyChain = ({ chainId }: { chainId: string }) => {
  const { onCopy, hasCopied } = useClipboard(chainId);

  return (
    <Tooltip label="Chain ID">
      <Flex onClick={onCopy} alignItems={"center"} cursor="pointer" bg="gray.800" p={2} borderRadius="md">
        <Text w="100px" fontSize="sm">{chainId}</Text>
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Flex>
    </Tooltip>
  );
};
