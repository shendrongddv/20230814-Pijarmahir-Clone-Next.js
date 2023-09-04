import HeaderMain from "@/components/header/header";
import FooterMain from "@/components/footer/footer-main";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <FooterMain />
    </>
  );
}
