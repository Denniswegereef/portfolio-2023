import { Button } from "@/components/Button";
import { Box } from "@/components/base";
import { Container } from "@/components/Container/container";
import { Heading, Text } from "@/components/typography";
import { Link } from "@/components/Link";
import { styled } from "@/theme/stitches.config";
import { Grid, GridItem } from "@/components/Grid";

export default function ElementsPage() {
  return (
    <Container
      size="md"
      css={{
        py: "$32",
      }}
    >
      <Box
        stack="vertical"
        css={{
          gap: "$8",
        }}
      >
        <Heading size="2xl" as="h1">
          Header 2xl
        </Heading>

        <Heading size="xl" as="h2">
          Header xl
        </Heading>

        <Heading size="lg" as="h3">
          Header lg
        </Heading>

        <Heading size="md" as="h4">
          Header md
        </Heading>

        <Heading size="sm" as="h4">
          Header sm
        </Heading>

        <Heading size="xs" as="h4">
          Header xs
        </Heading>

        <Text size="sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere
        </Text>

        <Text size="base">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere
        </Text>

        <Text size="lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et
        </Text>

        <Text size="xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et
        </Text>

        <Text size="2xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et
        </Text>

        <Box stack="horizontal">
          <Button>Button one</Button>
          <Button variant="link">Button two</Button>
        </Box>

        <Box stack="horizontal">
          <Link href="/">Go to main page</Link>
        </Box>

        <Box stack="horizontal" css={{ gap: "$7" }}>
          <Box>
            <Text>Primary</Text>
            <Box stack="horizontal">
              <ColorBox css={{ backgroundColor: "$primary" }} />
              <ColorBox css={{ backgroundColor: "$primary-100" }} />
              <ColorBox css={{ backgroundColor: "$primary-200" }} />
            </Box>
          </Box>
          <Box>
            <Text>Secondary</Text>
            <Box stack="horizontal">
              <ColorBox css={{ backgroundColor: "$secondary" }} />
              <ColorBox css={{ backgroundColor: "$secondary-100" }} />
              <ColorBox css={{ backgroundColor: "$secondary-200" }} />
            </Box>
          </Box>
          <Box>
            <Text>Tertiary</Text>
            <Box stack="horizontal">
              <ColorBox css={{ backgroundColor: "$tertiary" }} />
            </Box>
          </Box>
          <Box>
            <Text>Gray</Text>
            <Box stack="horizontal">
              <ColorBox css={{ backgroundColor: "$gray" }} />
              <ColorBox css={{ backgroundColor: "$gray-light" }} />
              <ColorBox css={{ backgroundColor: "$gray-dark" }} />
            </Box>
          </Box>
          <Box>
            <Text>Black</Text>
            <Box stack="horizontal">
              <ColorBox css={{ backgroundColor: "$black" }} />
              <ColorBox css={{ backgroundColor: "$black-light" }} />
            </Box>
          </Box>
          <Box>
            <Text>White</Text>
            <Box stack="horizontal">
              <ColorBox
                css={{ backgroundColor: "$white", border: "1px solid $black" }}
              />
            </Box>
          </Box>
        </Box>
        <Grid>
          <Text>Simple grid</Text>
          <GridItem
            start={{ "@base": 1, "@md": 1, "@xl": 1 }}
            end={{ "@base": 3, "@md": 7, "@xl": 7 }}
          />
          <GridItem
            start={{ "@base": 3, "@md": 1, "@xl": 1 }}
            end={{ "@base": 5, "@md": 4, "@xl": 7 }}
          />
          <GridItem
            start={{ "@base": 5, "@md": 4, "@xl": 1 }}
            end={{ "@base": 7, "@md": 7, "@xl": 7 }}
          />
        </Grid>
      </Box>
    </Container>
  );
}

const ColorBox = styled("div", {
  backgroundColor: "black",
  height: 25,
  width: 25,
});
