import Navbar from "./_components/shared/navbar";
import Footer from "./_components/shared/Footer";
import ContactButtons from "./_components/shared/Contact-bottons";

export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>
    <Navbar />
    {children}
    <Footer />
    <ContactButtons />
    </>;
  }