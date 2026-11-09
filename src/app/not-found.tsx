import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Container, Label } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/media/blog-invisible.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="media-veil veil-left" />
        <Container wide className="relative pt-24">
          <Label>Error 404</Label>
          <h1 className="h-display mt-6 max-w-2xl text-5xl sm:text-6xl">This page is not on the map.</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">The link may be old or mistyped. Everything we do starts from the homepage.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/">Back to Maximus AI</Button>
            <Button href="/free-report" variant="ghost">
              Get Your Free Report
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
