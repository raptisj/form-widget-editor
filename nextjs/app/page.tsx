"use client";

import "./globals.css";
import { Box, Grid, GridItem, Heading, Button, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SettingsList } from "@/types/Settings";

export default function Home() {
  const [widgets, setWidgets] = useState<SettingsList[] | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/widgets`);
      const { settings } = await response.json();
      setWidgets(settings);
    };

    fetchData();
  }, []);

  if (!widgets) {
    return null;
  }

  return (
    <Box maxW="1280px" margin="auto" padding={4} pb={10}>
      <Box padding={4}>
        <Heading as="h2" size="lg" textAlign="center">
          My widget
        </Heading>
      </Box>
      <Button onClick={() => push("/widgets/create")}>Create +</Button>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4} mt={4}>
        {!widgets.length ? (
          <Heading size="md">nothing to see here!!</Heading>
        ) : null}
        {widgets.map((w: SettingsList) => (
          <GridItem key={w.id}>
            <Link href={`/widgets/${w.id}`}>
              <Box
                borderWidth={1}
                borderColor="gray.300"
                borderRadius="5px"
                p={2}
              >
                {w?.settings?.header.title?.text}
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
