import { Button, Container } from "../components/ui"

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold">
        This page has not arrived.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-slate-600">
        The address may be incorrect or the page may have moved.
      </p>
      <Button to="/" className="mt-8">
        Return home
      </Button>
    </Container>
  )
}
