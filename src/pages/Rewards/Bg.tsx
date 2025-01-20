import { Box } from "@chakra-ui/react";

export function RetroGrid({
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <Box
      position="absolute"
      w="full"
      h="full"
      overflow="hidden"
      opacity={0.5}
      pointerEvents="none"
      style={{
        perspective: "2000px",
      }}
    >
      <Box
        position="absolute"
        inset={0}
        style={{
          transform: `rotateX(${angle}deg)`,
        }}
      >
        <Box
          position="absolute"
          h="300vh"
          w="600vw"
          inset="0% 0px"
          marginLeft="-50%"
          style={{
            transformOrigin: "100% 0 0",
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
            animation: `gridAnimation 60s linear infinite`,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 0), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 0)",
          }}
        />
      </Box>

      {/* Background Gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient={"linear(to-t, transparent, transparent 90%)"}
      />
    </Box>
  );
}
