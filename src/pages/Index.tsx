import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Extracurricular } from "@/components/sections/Extracurricular";
import { Contact } from "@/components/sections/Contact";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => (
  <PageLayout>
    <Hero />
    <About />
    <Education />
    <Skills />
    <Experience />
    <Projects />
    <Achievements />
    <Extracurricular />
    <Contact />
  </PageLayout>
);

export default Index;
