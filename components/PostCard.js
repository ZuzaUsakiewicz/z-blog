import Link from "next/link";
import { Grid, Text, Container, Row } from "@nextui-org/react";
import { useMediaQuery } from "../utils/useMediaQuery";

function PostCard({ post }) {
  const isMd = useMediaQuery(960);
  return (
    <Grid.Container
      justify="center"
      alignItems="flex-start"
      gap={2}
      sm={6}
      md={3}
      lg={3}
    >
      <Link href={`/blog/${post.slug}`} passHref>
        <Grid.Container
          display="flex"
          justify="space-between"
          fluid="true"
          css={{
            cursor: "pointer",
            minHeight: "200px",
            minWidth: "270px",
            mw: "300px",
            padding: "0.5rem 1rem",
            "@md": { h: "300px", w: "400px", minWidth: "400px", mw: "500px" },
          }}
        >
          <Row>
            <Text
              size={isMd ? 10 : 12}
              weight="medium"
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                letterSpacing: "0.4px",
              }}
            >
              {post.frontMatter.date}
            </Text>
          </Row>
          <Row>
            <Text
              h3
              size={isMd ? 16 : 24}
              weight="extrabold"
              css={{
                color: "$blue900",
                letterSpacing: "0.3px",
              }}
            >
              {post.frontMatter.title}
            </Text>
          </Row>
          <Row>
            <Text
              size={isMd ? 12 : 16}
              css={{
                lineHeight: "0.9rem",
                padding: "0.5rem 0",
                "@md": { fontSize: "18px" },
              }}
            >
              {post.frontMatter.summary}
            </Text>
          </Row>
          <Row justify="flex-end">
            <Text
              size={isMd ? 10 : 14}
              weight="bold"
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
            >
              Read more
            </Text>
          </Row>
        </Grid.Container>
      </Link>
    </Grid.Container>
  );
}

export default PostCard;
