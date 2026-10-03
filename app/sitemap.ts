import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { films } from "@/data/films";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/films",
    "/cars",
    "/brands",
    "/sources",
    ...films.map((film) => `/films/${film.slug}`),
    ...cars.map((car) => `/cars/${car.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
