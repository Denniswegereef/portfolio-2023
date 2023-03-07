import { Box } from "@/components/base";
import Link from "next/link";

const ROUTES = ["scroll-experience"];

export default function Home() {
  return (
    <Box>
      <ul>
        {ROUTES.map((route, index) => (
          <li>
            <Link key={`${route}-${index}`} href={`experiments/${route}`}>
              {route}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}
