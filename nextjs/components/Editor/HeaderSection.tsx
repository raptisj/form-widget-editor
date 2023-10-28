"use client";

import { Box, Input, Text, Select, Flex, Divider } from "@chakra-ui/react";
import { useStore } from "@/store";
import { SUBTITLE_FONT_SIZES, TITLE_FONT_SIZES } from "@/constants";

export default function HeaderSection() {
  const setTitleSettings = useStore((state) => state.setTitleSettings);
  const setSubtitleSettings = useStore((state) => state.setSubtitleSettings);
  const { header } = useStore((state) => state.formSettings);
  const { title, subtitle } = header;

  return (
    <>
      <Box>
        <Text fontWeight={700}>Title</Text>
        <Box mt={2}>
          <Input
            type="text"
            value={title.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitleSettings({ ...title, text: e.target.value })
            }
          />

          <Flex flexDirection="column" gap={2} mt={8}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Font Size
              </Text>
              <Select
                width="120px"
                size="sm"
                borderRadius={5}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTitleSettings({ fontSize: e.target.value })
                }
              >
                {TITLE_FONT_SIZES.map((t) => (
                  <option value={t} key={t}>
                    {t}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Color
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
                  value={title.color}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTitleSettings({ color: e.target.value })
                  }
                />
                <Text fontSize="14px">{title.color}</Text>
              </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Alignment
              </Text>
              <Select
                width="120px"
                size="sm"
                borderRadius={5}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTitleSettings({ alignment: e.target.value })
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </Select>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Divider mt={8} />

      <Box mt={8}>
        <Text fontWeight={700}>SubTitle</Text>
        <Box mt={2}>
          <Input
            type="text"
            value={subtitle.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubtitleSettings({ ...subtitle, text: e.target.value })
            }
          />

          <Flex flexDirection="column" gap={2} mt={8}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Font Size
              </Text>
              <Select
                width="120px"
                size="sm"
                borderRadius={5}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSubtitleSettings({ fontSize: e.target.value })
                }
              >
                {SUBTITLE_FONT_SIZES.map((t) => (
                  <option value={t} key={t}>
                    {t}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Color
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
                  value={subtitle.color}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSubtitleSettings({ color: e.target.value })
                  }
                />
                <Text fontSize="14px">{subtitle.color}</Text>
              </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="14px">
                Alignment
              </Text>
              <Select
                width="120px"
                size="sm"
                borderRadius={5}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSubtitleSettings({ alignment: e.target.value })
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </Select>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
