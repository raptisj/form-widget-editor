"use client";

import { Box, Input, Text, Flex } from "@chakra-ui/react";
import { useStore } from "@/store";

export default function ButtonsSection() {
  const setSubmitBtnSettings = useStore((state) => state.setSubmitBtnSettings);
  const form = useStore((state) => state.formSettings);
  const { submitBtn } = form;

  const onChangeSubmitBtnBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitBtnSettings({ background: e.target.value });
  };

  return (
    <Box>
      <Text fontWeight={700}>Submit Button</Text>
      <Box mt={2}>
        <Input
          type="text"
          value={submitBtn.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSubmitBtnSettings({ text: e.target.value })
          }
        />

        <Flex flexDirection="column" gap={2} mt={8}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="gray.600" fontSize="14px">
              Background Color
            </Text>
            <Flex
              alignItems="center"
              borderWidth={1}
              borderColor="gray.200"
              pr={2}
              borderRadius={5}
              width="120px"
              justifyContent="space-between"
            >
              <Input
                cursor="pointer"
                type="color"
                p="0px"
                border={0}
                width="32px"
                height="32px"
                background="gray.100"
                borderRadius={0}
                value={submitBtn.background}
                onChange={onChangeSubmitBtnBgColor}
              />
              <Text fontSize="14px">{submitBtn.background}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
