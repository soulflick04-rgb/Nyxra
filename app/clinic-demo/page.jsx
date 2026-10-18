import { Frame, Intro, Concept, CTA } from "../components/Studio";
export const metadata = { title: "Clinic concept | Nyxra" };
export default function Page() {
  return (
    <Frame>
      <Intro
        eyebrow="Interactive concept"
        title="A clearer first step for patients."
      >
        Explore the clinic website demo. Click the preview to open the external
        sample site. This is demonstration work, not a real clinic or client
        project.
      </Intro>
      <section className="wrap portfolio-stage">
        <Concept interactive />
      </section>
      <CTA />
    </Frame>
  );
}
