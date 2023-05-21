export interface IToolbar {
  searchText?: string;
  showSearchInput?: boolean;
  whenChangingSearchText?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  WhenClickingOnNew?: () => void;
}
