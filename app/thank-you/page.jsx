import { Frame, Intro, Button } from "../components/Studio";
export default function Page() {
  return (
    <Frame>
      <Intro
        eyebrow="Your next step"
        title="Let’s keep the conversation going."
      >
        If you submitted an enquiry, check the confirmation shown on the contact
        form. This page alone does not confirm delivery or a booking.
      </Intro>
      <section className="wrap section">
        <Button href="/contact">Back to contact</Button>
      </section>
    </Frame>
  );
}
