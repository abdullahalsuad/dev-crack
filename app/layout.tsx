import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import CustomFooter from "../components/shared/CustomFooter";

import "./index.css";

export const metadata = {
  title: "Dev Crack",
};

// Banner component instance
const banner = <Banner storageKey="some-key">Hello</Banner>;

// Navbar component instance
const navbar = (
  <Navbar
    logo={
      <img
        src="https://i.ibb.co/x8cJxqg0/dev-crack.png"
        alt="DEV Crack"
        className="h-90 w-auto"
      />
    }
    logoLink={"/"}
    projectLink="https://github.com/abdullahalsuad/dev-crack"
    chatLink="https://discord.gg/Gzht2qKAn8"
  />
);

// Footer component instance
const footer = <CustomFooter />;

// Search component instance
const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/bhavya-dang/my-project"
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
