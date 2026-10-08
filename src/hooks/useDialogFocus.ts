import { useEffect, useRef } from 'react';

let openDialogs = 0;
let previousOverflow = '';

export const useDialogFocus = (isOpen: boolean, onClose: () => void) => {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return;
    const dialogs = document.querySelectorAll<HTMLElement>('[role="dialog"]');
    const dialog = dialogs[dialogs.length - 1];
    const previousFocus = document.activeElement as HTMLElement | null;
    if (openDialogs++ === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    const getControls = () => Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]')).filter(el => !el.hasAttribute('disabled') && el.getClientRects().length > 0);
    getControls()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      const currentDialogs = document.querySelectorAll('[role="dialog"]');
      if (currentDialogs[currentDialogs.length - 1] !== dialog) return;
      if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); }
      if (event.key !== 'Tab') return;
      const controls = getControls();
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (--openDialogs === 0) document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);
};
