import type { Source } from "./types";

export function wiki(title: string, label?: string): Source {
  return {
    label: `Wikipedia — ${label ?? title.replace(/_/g, " ")}`,
    href: `https://en.wikipedia.org/wiki/${title}`,
  };
}

export function tfwiki(page: string, label?: string): Source {
  return {
    label: `TFWiki — ${label ?? page.replace(/_/g, " ")}`,
    href: `https://tfwiki.net/wiki/${page}`,
  };
}

export const WIKI_CAST = wiki(
  "List_of_Transformers_film_series_cast_and_characters",
  "List of Transformers film series cast and characters",
);
export const WIKI_TF1 = wiki("Transformers_(film)", "Transformers (2007)");
export const WIKI_ROTF = wiki("Transformers:_Revenge_of_the_Fallen", "Revenge of the Fallen");
export const WIKI_DOTM = wiki("Transformers:_Dark_of_the_Moon", "Dark of the Moon");
export const WIKI_AOE = wiki("Transformers:_Age_of_Extinction", "Age of Extinction");
export const WIKI_TLK = wiki("Transformers:_The_Last_Knight", "The Last Knight");
export const WIKI_BB = wiki("Bumblebee_(film)", "Bumblebee (2018)");
export const WIKI_ROTB = wiki("Transformers:_Rise_of_the_Beasts", "Rise of the Beasts");
export const WIKI_ONE = wiki("Transformers_One", "Transformers One");
export const WIKI_BEE = wiki("Bumblebee_(Transformers)", "Bumblebee (Transformers)");
