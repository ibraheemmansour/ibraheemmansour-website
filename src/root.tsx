import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Link,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import "./site.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./scripts/custom.js";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Welcome - Ibraheem Mansour</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" type="image/x-icon" href="src/assets/img/favicon.ico" />
        <link rel="stylesheet" href="scripts/bootstrap.css" />
        <Link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <Link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
      </Head>
      <Body>
        <Suspense>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
