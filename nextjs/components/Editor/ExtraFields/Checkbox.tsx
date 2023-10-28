"use client";

import { Input, Text, Flex, Divider, Switch } from "@chakra-ui/react";
import { useStore } from "@/store";

export default function CheckboxField() {
  const setCheckboxSettings = useStore((state) => state.setCheckboxSettings);
  const form = useStore((state) => state.formSettings);
  const { extraFields } = form;

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="full">
        <Text fontSize="14px" fontWeight={700}>
          Checkbox
        </Text>
        <Switch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCheckboxSettings({
              ...extraFields.checkbox,
              enabled: e.target.checked,
            })
          }
          checked={extraFields.checkbox.enabled}
        />
      </Flex>

      {extraFields.checkbox.enabled && (
        <>
          <Input
            type="text"
            value={extraFields.checkbox.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCheckboxSettings({
                ...extraFields.checkbox,
                text: e.target.value,
              })
            }
          />
          <Flex alignItems="center" justifyContent="space-between" width="full">
            <Text color="gray.600" fontSize="14px">
              Required
            </Text>
            <Switch
              checked={extraFields.checkbox.required}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCheckboxSettings({
                  ...extraFields.checkbox,
                  required: e.target.checked,
                })
              }
            />
          </Flex>
          <Divider />
        </>
      )}
    </>
  );
}
