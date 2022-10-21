import Head from "next/head";
import { Container, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Z blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text
          h1
          size={48}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          Welcome to my Blog!
        </Text>
      </main>

      <footer></footer>
    </Container>
  );
}
