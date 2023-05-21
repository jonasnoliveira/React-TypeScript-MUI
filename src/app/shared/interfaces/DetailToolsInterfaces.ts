export interface IDetailTools {
  newButtonText?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

  whenClickingOnNew?: () => void;
  whenClickingBack?: () => void;
  whenClickingDelete?: () => void;
  whenClickingSave?: () => void;
  clickingOnSaveAndClose?: () => void;
}
