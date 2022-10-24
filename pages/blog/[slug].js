import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Container, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Z blog post content" />
        <link rel="icon" href="/images/PersonalComputer.svg" />
      </Head>
      <Container
        justify="center"
        sm
        md
        fluid
        css={{
          padding: "2rem 0.5rem",
          maxWidth: "900px",
        }}
      >
        <Text h4 css={{ lineHeight: "2rem" }}>
          {title}
        </Text>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
        <Row justify="flex-end">
          <Link href="/">
            <Text weight="bold" size={16} css={{ cursor: "pointer" }}>
              back home
            </Text>
          </Link>
        </Row>
      </Container>
    </>
  );
};
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
