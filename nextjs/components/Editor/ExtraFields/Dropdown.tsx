"use client";

import { Input, Text, Flex, Switch, Box } from "@chakra-ui/react";
import { useStore } from "@/store";
import { stringToArrayOfObjects } from "@/utils";

export default function Dropdown() {
  const setDropdownSettings = useStore((state) => state.setDropdownSettings);
  const form = useStore((state) => state.formSettings);
  const {
    extraFields: { dropdown },
  } = form;

  const onChangeAddItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const items = stringToArrayOfObjects({
      string: e.target.value,
      lengthOfArray: 10,
    });

    setDropdownSettings({ ...dropdown, options: items });
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="full">
        <Text fontSize="14px" fontWeight={700}>
          Dropdown
        </Text>
        <Switch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDropdownSettings({
              enabled: e.target.checked,
              options: e.target.checked ? dropdown.options : [],
            })
          }
          checked={dropdown.enabled}
        />
      </Flex>
      {dropdown.enabled && (
        <>
          <Box width="full">
            <Input
              type="text"
              placeholder="type and separate with commas..."
              onChange={onChangeAddItems}
            />
            <Text textAlign="left" fontSize="14px" color="gray.400" mt={2}>
              Max 10 items.
            </Text>
          </Box>
        </>
      )}
    </>
  );
}
