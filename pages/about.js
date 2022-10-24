import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <Container>
      <Head>
        <title>about me</title>
      </Head>
      <Text h2>Stuff about me </Text>
      <Link href="/">back home</Link>
    </Container>
  );
}

export default About;
