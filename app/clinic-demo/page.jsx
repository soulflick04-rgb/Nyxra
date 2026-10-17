import { Frame, Intro, Concept, CTA } from "../components/Studio";
export const metadata = { title: "Clinic concept | Nyxra" };
export default function Page() {
  return (
    <Frame>
      <Intro
        eyebrow="Interactive concept"
        title="A clearer first step for patients."
      >
        Illustrative clinic design. This demonstration does not collect patient
        information or make appointments.
      </Intro>
      <section className="wrap portfolio-stage">
        <Concept interactive />
      </section>
      <CTA />
    </Frame>
  );
}
