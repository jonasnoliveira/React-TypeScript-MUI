export interface IListItemLinkProps {
  to: string;
  children: React.ReactNode;
  label: string;
  onClick: (() => void) | undefined;
}
