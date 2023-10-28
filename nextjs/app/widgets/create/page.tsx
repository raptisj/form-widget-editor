"use client";

import PreviewForm from "@/components/PreviewForm";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import HeaderSection from "@/components/Editor/HeaderSection";
import InputsSection from "@/components/Editor/InputsSection";
import ButtonsSection from "@/components/Editor/ButtonsSection";
import CheckboxField from "@/components/Editor/ExtraFields/Checkbox";
import RadioGroup from "@/components/Editor/ExtraFields/RadioGroup";
import Dropdown from "@/components/Editor/ExtraFields/Dropdown";
import { useStore } from "@/store";
import EditorAccordion from "@/components/Editor/EditorAccordion";
import { useRouter } from "next/navigation";

export default function CreateWidget() {
  const formSettings = useStore((state) => state.formSettings);
  const { push } = useRouter();

  const onSaveSetings = async () => {
    const url = "http://localhost:4000/create";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formSettings),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    } catch (e) {
      console.log(e, "e");
    } finally {
      push("/");
    }
  };

  const accordionItems = [
    { title: "Header", component: <HeaderSection /> },
    { title: "Inputs", component: <InputsSection /> },
    { title: "Buttons", component: <ButtonsSection /> },
    {
      title: "Extra fields",
      component: (
        <VStack width="full" spacing={4} mt={4}>
          <CheckboxField />
          <RadioGroup />
          <Dropdown />
        </VStack>
      ),
    },
  ];

  return (
    <Box maxW="1280px" margin="auto" padding={4} pb={10}>
      <Box padding={4}>
        <Heading as="h2" size="lg" textAlign="center">
          Create widget
        </Heading>
      </Box>
      <Grid gridTemplateColumns="400px minmax(800px, 1fr)" gap={4} mt={4}>
        <GridItem>
          <EditorAccordion accordionItems={accordionItems} />
        </GridItem>
        <GridItem position="relative">
          <Box
            background="gray.100"
            minH="700px"
            borderRadius={5}
            position="sticky"
            top={4}
            padding={2}
          >
            <Flex gap={2} justifyContent="flex-start" position="sticky" top={4}>
              <Link href="/">
                <Button>Cancel</Button>
              </Link>
              <Button colorScheme="linkedin" onClick={onSaveSetings}>
                Save
              </Button>
            </Flex>
            <PreviewForm />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
