type NormalizeTextToSlugProps = {
  text: string;
};

export function NormalizeTextToSlug({ text }: NormalizeTextToSlugProps) {
  const slug = text.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "-").toLowerCase();

  return slug;
}
