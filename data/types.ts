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

export type LicensedImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  objectPosition?: string;
  /** Shown when the photo is a nearby model, not the film car's exact variant. */
  referenceNote?: string;
};
