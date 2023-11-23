import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/start/Hero";
import Partners from "@/components/start/Partners";

export default function Home() {
  return (
    <section className="">
      <section className="bgImage hero min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <Partners />
    </section>
  );
}
