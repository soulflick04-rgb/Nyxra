import { Frame, Button } from "./components/Studio";
export default function NotFound() {
  return (
    <Frame>
      <section className="wrap not-found">
        <p className="eyebrow">404 / A little off course</p>
        <h1>Let’s get you back.</h1>
        <p>The page you’re looking for isn’t here.</p>
        <Button href="/">Back to Nyxra</Button>
      </section>
    </Frame>
  );
}
