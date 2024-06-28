import React from "react";
import { Box, Heading, keyframes } from "@chakra-ui/react";
const Loading = () => {
  const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        className="loader"
        border="8px solid #f3f3f3"
        borderTop="8px solid #3498db"
        borderRadius="50%"
        width="50px"
        height="50px"
        animation={`${spin} 1s linear infinite`}
      />
    </Box>
  );
};

export default Loading;
