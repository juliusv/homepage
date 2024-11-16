import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  // IconBrandMastodon,
  IconBrandYoutube,
} from "@tabler/icons-react";
import "./App.css";
import {
  Button,
  createTheme,
  MantineColorsTuple,
  MantineProvider,
  Stack,
  Title,
  Avatar,
  Anchor,
  Group,
  Box,
  List,
} from "@mantine/core";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import juliusHeadshot from "./assets/julius-volz-headshot.jpg";

const promlabsOrange: MantineColorsTuple = [
  "#ffefe5",
  "#ffded0",
  "#f8bca2",
  "#f39670",
  "#ef7746",
  "#ec632b",
  "#ec581c",
  "#d3480f",
  "#bc3f0a",
  "#a43303",
];

const theme = createTheme({
  colors: {
    promlabsOrange,
  },
  primaryColor: "promlabsOrange",
  primaryShade: 7,
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Stack align="center" p="xl">
        <Avatar size={110} src={juliusHeadshot} alt="Julius Volz" />
        <Title c="gray.7">Julius Volz</Title>
        <Stack gap="xs" hiddenFrom="xs">
          <Anchor c="dimmed" href="mailto:julius.volz@gmail.com">
            julius.volz@gmail.com
          </Anchor>
          <Anchor c="dimmed" href="mailto:julius.volz@gmail.com">
            julius.volz@promlabs.com
          </Anchor>
        </Stack>
        <List listStyleType="none" spacing="xs">
          <List.Item>
            🚀&nbsp;&nbsp;Co-founder{" "}
            <Anchor target="_blank" href="https://prometheus.io/">
              Prometheus
            </Anchor>
          </List.Item>
          <List.Item>
            🏢&nbsp;&nbsp;Founder{" "}
            <Anchor target="_blank" href="https://promlabs.com/">
              PromLabs
            </Anchor>{" "}
            and{" "}
            <Anchor target="_blank" href="https://promcon.io/">
              PromCon
            </Anchor>
          </List.Item>

          <List.Item>
            👨🏼‍🏫&nbsp;&nbsp;
            <Anchor target="_blank" href="https://training.promlabs.com">
              Teaching Prometheus
            </Anchor>
          </List.Item>
        </List>
        <Group visibleFrom="xs">
          <Anchor c="dimmed" href="mailto:julius.volz@gmail.com">
            julius.volz@gmail.com
          </Anchor>
          <Box c="dimmed">•</Box>
          <Anchor c="dimmed" href="mailto:julius.volz@gmail.com">
            julius.volz@promlabs.com
          </Anchor>
        </Group>
      </Stack>
      <Stack mt="lg">
        <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://bsky.app/profile/juliusv.com"
          size="xl"
          leftSection={<IconBrandBluesky />}
        >
          Bluesky
        </Button>
        <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://www.linkedin.com/in/julius-volz/"
          size="xl"
          leftSection={<IconBrandLinkedin />}
        >
          LinkedIn
        </Button>
        {/* <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://chaos.social/@juliusvolz"
          size="xl"
          leftSection={<IconBrandMastodon />}
        >
          Mastodon
        </Button> */}
        <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://github.com/juliusv/"
          size="xl"
          leftSection={<IconBrandGithub />}
        >
          GitHub
        </Button>
        <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://promlabs.com/"
          size="xl"
          leftSection={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 308.63143 339.7"
            >
              <path
                d="m 161.81281,154.5 c -7.3,-4.2 -17.9,-0.4 -20.8,7.8 -3.1,9.1 5.1,20.3 15.4,19 7.9,-1 14,-9.5 12.3,-17.4 -0.7,-3.9 -3.2,-7.3 -6.9,-9.4 z m -36.8,38.5 c -0.4,-0.4 -0.7,-0.8 -1.1,-1.4 -7.9,-9.9 -10.6,-23.9 -6.9,-36.1 5.2,-17 22.7,-29.3 41,-27.9 5.8,0.5 11.5,2.3 16.7,5.3 12.6,7.4 20.5,22.2 19.4,36.8 -1.3,16.9 -14.5,32.2 -31.1,35.8 -13.4,2.8 -28.1,-1.9 -37.4,-11.9 l 0.1,-0.2 z m 95.4,-164.2 v 0 l 16.7,-28.8 21.7,12.5 -16.7,28.9 c 35.4,24.6 60,64.5 65.4,107.9 6.9,55.3 -18.5,113.8 -65.7,146.2 -37.1,25.5 -85.8,33.5 -129.3,21.3 l 13,-22.6 c 27.1,6.1 56.3,3.5 82,-8 43.1,-19.4 73.9,-63.8 76,-112 1.9,-42.8 -18.8,-85.6 -54.1,-111 l -26.6,46 c -3,-2.6 -6.4,-4.9 -9.8,-6.9 -0.2,-0.1 -0.4,-0.2 -0.6,-0.4 -16.6,-9.5 -36.8,-12.4 -55.4,-8.1 -31.2,7.3 -56.299996,35.5 -58.999996,68.3 -1.3,15.8 2.8,31.7 11,45.3 l -14,24.2 c -21.7,-27.8 -28.6,-67 -15,-101 14.1,-35.1 48.799996,-61 87.499996,-63.7 15.8,-1 31.7,1.7 46.3,7.8 l 13.9,-24.1 v 0 z m -23.8,-8.9 -13.1,22.6 c -39,-8.7 -82.2,0.6 -113.599996,27.8 -31.4,27 -48.4,69.7 -44.1,111.1 3.8,36.4 23.9,70.7 53.7,92.1 l 26.599996,-46.1 c 6.7,5.5 14.3,10 22.6,12.9 22.5,7.9 48.7,4.6 68.7,-9 19.3,-13.1 32,-35.7 33.3,-59.1 0.8,-15 -3.1,-30.1 -10.7,-43 l 13.8,-23.9 c 15,19.3 23.4,43.9 21.9,68.9 -2.2,36.6 -25.7,71.2 -59.7,86.5 -25.3,11.4 -55.1,11.5 -80.9,0.9 l -14,24.3 v 0 l -12.499996,21.7 v 0 l -18.6,32.1 -21.7,-12.5 18.5,-32 c -29,-20.1 -51.1,-50.2 -60.9000003,-84.4 -11.4,-39.5 -6.19999998,-83.7 14.6000003,-119.8 25.1,-43.5 72.2,-73.1 122.899996,-76.8 18,-1.2 36.1,0.8 53.2,5.7 z"
                fill="currentColor"
              />
            </svg>
          }
        >
          PromLabs
        </Button>
        <Button
          component="a"
          variant="light"
          target="_blank"
          href="https://www.youtube.com/@PromLabs"
          size="xl"
          leftSection={<IconBrandYoutube />}
        >
          PromLabs YouTube
        </Button>
      </Stack>
    </MantineProvider>
  );
}

export default App;
