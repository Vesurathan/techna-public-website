import Link from "next/link";

export default function FacultyNotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Faculty member not found</h1>
      <p className="mt-2 text-muted-foreground">They may be inactive or removed from the public directory.</p>
      <Link href="/faculty" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
        Back to faculty
      </Link>
    </div>
  );
}
