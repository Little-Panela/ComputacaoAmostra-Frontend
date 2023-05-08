export function NormalizeTextToSearch(text: string) {
  const search = text
    .normalize("NFD")
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return search;
}
