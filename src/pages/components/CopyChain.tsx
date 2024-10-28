
import {
  Flex,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

export const CopyChain = ({ chainId }: { chainId: string }) => {
  const { onCopy, hasCopied } = useClipboard(chainId);

  return (
    <Tooltip label="Chain ID">
      <Flex onClick={onCopy} alignItems={"center"}>
        <Text w="100px">{chainId}</Text>
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Flex>
    </Tooltip>
  );
};