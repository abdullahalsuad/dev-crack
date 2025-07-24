import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Dev Crack",
};

// const banner = (
//   <Banner storageKey="some-key"></Banner>
// );

// Navbar
const navbar = (
  <Navbar
    logo={<b>📚 Dev Crack</b>}
    logoLink={"/"}
    projectLink="https://github.com/abdullahalsuad/dev-crack"
    chatLink="https://discord.gg/HSkFkxqx"
  />
);

// footer
const footer = <Footer>MIT {new Date().getFullYear()} © Dev Crack</Footer>;

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/abdullahalsuad/dev-crack"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
