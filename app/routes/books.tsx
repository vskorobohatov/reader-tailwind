import type { Route } from "./+types/books";
import Filters from "~/components/BooksFilters";
import BooksList from "~/components/BooksList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books" },
    { name: "description", content: "Browse our collection of books." },
  ];
}

export default function Books() {
  return (
    <div>
      <Filters />
      <BooksList />
    </div>
  );
}
