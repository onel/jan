import { useRef } from 'react'
import { useTranslation } from '@/i18n/react-i18next-compat'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

/**
 * Props for the DeleteAssistantDialog component
 */
interface DeleteAssistantDialogProps {
  /** Whether the dialog is open */
  open: boolean
  /** Callback function to handle dialog open state changes */
  onOpenChange: (open: boolean) => void
  /** Callback function to handle confirmation action */
  onConfirm: () => void
}

/**
 * A confirmation dialog for deleting an assistant
 * @param props - The component props
 * @returns The rendered dialog component
 */
export function DeleteAssistantDialog({
  open,
  onOpenChange,
  onConfirm,
}: DeleteAssistantDialogProps) {
  const { t } = useTranslation()
  const deleteButtonRef = useRef<HTMLButtonElement>(null)

  /**
   * Handles the confirm action by calling the onConfirm callback
   */
  const handleConfirm = () => {
    onConfirm()
  }

  /**
   * Handles the cancel action by closing the dialog
   */
  const handleCancel = () => {
    onOpenChange(false)
  }

  /**
   * Handles keyboard events, triggering confirm on Enter key press
   * @param e - The keyboard event
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirm()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[425px] max-w-[90vw]"
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          deleteButtonRef.current?.focus()
        }}
      >
        <DialogHeader>
          <DialogTitle>{t('assistants:deleteConfirmation')}</DialogTitle>
          <DialogDescription>
            {t('assistants:deleteConfirmationDesc')}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
          <Button
            variant="link"
            onClick={handleCancel}
            className="w-full sm:w-auto"
          >
            {t('assistants:cancel')}
          </Button>
          <Button
            ref={deleteButtonRef}
            variant="destructive"
            onClick={handleConfirm}
            onKeyDown={handleKeyDown}
            className="w-full sm:w-auto"
            aria-label={t('assistants:delete')}
          >
            {t('assistants:delete')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}