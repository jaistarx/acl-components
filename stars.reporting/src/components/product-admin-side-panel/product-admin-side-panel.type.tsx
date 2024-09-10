export type ProductAdminSidePanelProps = {
  categories: string[];
  onCategoryClick: (category: string) => void;
  selectedCategory: string;
};
