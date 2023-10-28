"use client";

import { Text, Flex, VStack, Switch } from "@chakra-ui/react";
import { useStore } from "@/store";

export default function InputsSection() {
  const setInputSettings = useStore((state) => state.setInputSettings);

  return (
    <>
      <Text fontWeight={700}>Required</Text>
      <VStack width="full" spacing={4} mt={4}>
        <Flex alignItems="center" justifyContent="space-between" width="full">
          <Text color="gray.600" fontSize="14px">
            First name
          </Text>
          <Switch
            onChange={(e) =>
              setInputSettings("firstName", { required: e.target.checked })
            }
          />
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" width="full">
          <Text color="gray.600" fontSize="14px">
            Last name
          </Text>

          <Switch
            onChange={(e) =>
              setInputSettings("lastName", { required: e.target.checked })
            }
          />
        </Flex>
      </VStack>
    </>
  );
}
