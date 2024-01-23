/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        textDecoration: "none",
        mr: 15,
      }}
      {...rest}
    >
      {/* <Image src={src} alt="startup landing logo" /> */}
      <Text as="p" variant="logo">
        rethink
        <Text as="span" variant="logo2">
          studio
        </Text>
      </Text>
    </Link>
  );
}
