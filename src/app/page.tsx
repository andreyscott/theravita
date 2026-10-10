import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Lenses } from "@/components/Lenses";
import { Featured } from "@/components/Featured";
import { NotAnother } from "@/components/NotAnother";
import { CommunityCTAs } from "@/components/CommunityCTAs";
import { FromAfrica } from "@/components/FromAfrica";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Lenses />
      <Featured />
      <NotAnother />
      <CommunityCTAs />
      <FromAfrica />
    </>
  );
}
