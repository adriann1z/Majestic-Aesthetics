import React from 'react';
import { X } from 'lucide-react';
import { BookingFocus, generalBookingFocus } from '../data/booking';
import { useDialogFocus } from '../hooks/useDialogFocus';
import { BrandLogo } from './BrandLogo';
import { ConsultationRequestForm } from './ConsultationRequestForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFocus?: BookingFocus;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultFocus = generalBookingFocus,
}) => {
  useDialogFocus(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div
      className="booking-modal-overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-xs sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="booking-modal-panel relative my-auto flex max-h-[calc(100dvh-1rem)] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-border-blush bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]">
        <div className="flex shrink-0 items-center justify-between border-b border-border-blush bg-blush-white px-5 py-3 sm:px-6 sm:py-4">
          <div className="w-48 sm:w-56">
            <BrandLogo variant="full" showSubtitle={true} />
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-text-muted transition-colors hover:bg-blush-pale hover:text-text-charcoal"
            aria-label="Close booking modal"
            type="button"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ConsultationRequestForm
          idPrefix="booking-modal"
          defaultFocus={defaultFocus}
          onClose={onClose}
          scrollable
        />
      </div>
    </div>
  );
};
