import { Frame, Intro, Pricing, CTA } from "../components/Studio";
export const metadata = {
  title: "Packages and pricing | Nyxra",
  alternates: { canonical: "/pricing" },
};
export default function Page() {
  return (
    <Frame>
      <Intro
        eyebrow="Packages & pricing"
        title={
          <>
            Start with the essentials.
            <br />
            <em>Build from there.</em>
          </>
        }
      >
        A clear starting point, with the final scope and terms agreed before
        work begins.
      </Intro>
      <Pricing full />
      <CTA />
    </Frame>
  );
}
