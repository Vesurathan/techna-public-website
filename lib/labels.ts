export function moduleCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    main: "Main programme",
    compulsory: "Compulsory",
    basket: "Basket / elective",
  };
  return map[category] ?? category;
}
