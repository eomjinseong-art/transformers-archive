export type Source = {
  label: string;
  href: string;
};

export type SearchHit = {
  kind: "영화" | "차량" | "브랜드";
  href: string;
  title: string;
  hint: string;
  keywords?: string;
};
