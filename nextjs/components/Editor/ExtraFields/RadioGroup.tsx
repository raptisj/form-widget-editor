"use client";

import { Input, Text, Flex, Divider, Switch, Box } from "@chakra-ui/react";
import { useStore } from "@/store";
import { stringToArrayOfObjects } from "@/utils";

export default function RadioGroup() {
  const setRadioSettings = useStore((state) => state.setRadioSettings);
  const form = useStore((state) => state.formSettings);
  const { extraFields: { radio} } = form;

  const onChangeAddItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      return setRadioSettings({ ...radio, options: [] });
    }

    const items = stringToArrayOfObjects({
      string: e.target.value,
      lengthOfArray: 5,
    });

    setRadioSettings({ ...radio, options: items });
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="full">
        <Text fontSize="14px" fontWeight={700}>
          Radio
        </Text>
        <Switch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRadioSettings({
              enabled: e.target.checked,
              options: e.target.checked ? radio.options : [],
            })
          }
          checked={radio.enabled}
        />
      </Flex>

      {radio.enabled && (
        <>
          <Box width="full">
            <Input
              type="text"
              placeholder="type and separate with commas..."
              onChange={onChangeAddItems}
            />
            <Text textAlign="left" fontSize="14px" color="gray.400" mt={2}>
              Max 5 items.
            </Text>
          </Box>
          <Divider />
        </>
      )}
    </>
  );
}
