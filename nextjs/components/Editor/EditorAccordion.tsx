"use client";

import { ReactNode } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
type AccordionItem = {
  title: string;
  component: ReactNode;
};
type AccordionItemsProps = {
  accordionItems: AccordionItem[];
};

export default function EditorAccordion({
  accordionItems,
}: AccordionItemsProps) {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {accordionItems.map((a) => (
        <AccordionItem
          borderWidth={1}
          borderColor="gray.100"
          borderBottom={0}
          key={a.title}
        >
          <h2>
            <AccordionButton borderBottomWidth={1} borderColor="gray.100">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={600}
                textTransform="uppercase"
                fontSize="14px"
              >
                {a.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={8}>{a.component}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
