import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandTwitter,
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
  Image,
  Text,
  Avatar,
} from "@mantine/core";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import promlabsLogo from "./assets/promlabs-logo.svg";
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
        <Text c="dimmed">
          julius.volz@gmail.com&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;julius.volz@promlabs.com
        </Text>
      </Stack>
      <Stack mt="lg">
        <Button
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/julius-volz/"
          size="xl"
          leftSection={<IconBrandLinkedin />}
        >
          LinkedIn
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://bsky.app/profile/juliusv.com"
          size="xl"
          leftSection={<IconBrandBluesky />}
        >
          Bluesky
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://twitter.com/juliusvolz"
          size="xl"
          leftSection={<IconBrandTwitter />}
        >
          Twitter
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://chaos.social/@juliusvolz"
          size="xl"
          leftSection={<IconBrandMastodon />}
        >
          Twitter
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://github.com/juliusv/"
          size="xl"
          leftSection={<IconBrandGithub />}
        >
          GitHub
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://www.youtube.com/@PromLabs"
          size="xl"
          leftSection={<IconBrandYoutube />}
        >
          YouTube
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://promlabs.com/"
          size="xl"
          leftSection={<Image src={promlabsLogo} w={20} />}
        >
          PromLabs
        </Button>
      </Stack>
    </MantineProvider>
  );
}

export default App;
