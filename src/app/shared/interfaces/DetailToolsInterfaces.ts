export interface IDetailTools {
  newButtonText?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveAndCloseButtonLoading?: boolean;

  whenClickingOnNew?: () => void;
  whenClickingBack?: () => void;
  whenClickingDelete?: () => void;
  whenClickingSave?: () => void;
  clickingOnSaveAndClose?: () => void;
}
