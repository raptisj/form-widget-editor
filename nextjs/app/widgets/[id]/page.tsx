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
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditWidget() {
  const formSettings = useStore((state) => state.formSettings);
  const setSettingsState = useStore((state) => state.setSettingsState);
  const { push } = useRouter();
  const { id } = useParams();

  const onSaveSetings = async () => {
    const url = `http://localhost:4000/edit/${id}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/widgets/${id}`);
      const data = await response.json();
      setSettingsState({ ...data.settings.settings });
    };

    fetchData();
  }, []);

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
          Edit widget
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
            <Flex gap={2} justifyContent="space-between" position="sticky" top={4}>
              <Box>
                <Link href="/">
                  <Button>Cancel</Button>
                </Link>
                <Button colorScheme="linkedin" onClick={onSaveSetings}>
                  Save
                </Button>
              </Box>
              <Link
                href={`http://localhost:4000/preview/widgets/${id}`}
                target="_blank"
              >
                <Button>Preview</Button>
              </Link>
            </Flex>
            <PreviewForm />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
