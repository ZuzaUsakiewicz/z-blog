import { Grid, Navbar, NextUIProvider, Text } from "@nextui-org/react";
import Link from "next/link";
import { globalStyles } from "../utils/globalStyles";
import GithubLogo from "../public/images/GithubLogo.svg";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <NextUIProvider>
      <link rel="icon" href="/images/PersonalComputer.svg" />
      <Navbar shouldHideOnScroll variant="sticky" maxWidth="lg">
        <Navbar.Brand>
          <Link href="/">
            <Text weight="bold" size={16} css={{ cursor: "pointer" }}>
              💙Z
            </Text>
          </Link>
        </Navbar.Brand>
        <Link href="/about">
          <Text weight="bold" size={16} css={{ cursor: "pointer" }}>
            About
          </Text>
        </Link>

        <Text size={12} weight="bold">
          <a href="https://www.github.com">
            <Image src={GithubLogo} alt="git hub icon" width="30" height="30" />
          </a>
        </Text>
      </Navbar>
      <Component {...pageProps} />
      <Grid.Container justify="center">
        <Text h6 size={10} css={{ padding: "2rem 0" }}>
          Made by <Link href="https://www.github.com">Zuza</Link> 💙 2022
        </Text>
      </Grid.Container>
    </NextUIProvider>
  );
}

export default MyApp;
