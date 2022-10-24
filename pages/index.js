import Head from "next/head";
import { Container, Text, Grid, Loading } from "@nextui-org/react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "../components/PostCard";
import { useMediaQuery } from "../utils/useMediaQuery";

export default function Home({ posts }) {
  const isMd = useMediaQuery(960);

  return (
    <Container>
      <Head>
        <title>Z Blog</title>
        <meta name="description" content="Z blog" />
        <link rel="icon" href="/images/PersonalComputer.svg" />
      </Head>
      <main>
        <Grid.Container justify="center">
          <Text
            h1
            size={isMd ? 24 : 48}
            css={{
              textGradient: "45deg, $pink700 -20%, $cyan600 50%",
              padding: "2rem 0 0.5rem 0",
            }}
          >
            Welcome to my Blog!
          </Text>
        </Grid.Container>
        <Grid.Container justify="center" css={{ padding: "2rem 0" }}>
          <>
            {posts
              ? posts
                  .reverse()
                  .map((post, index) => <PostCard key={index} post={post} />)
              : `${(<Loading color="primary" />)}`}
          </>
        </Grid.Container>
      </main>
    </Container>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
