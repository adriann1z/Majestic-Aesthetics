import { useEffect, useRef } from 'react';

let openDialogs = 0;
let previousOverflow = '';
let previousPosition = '';
let previousTop = '';
let previousWidth = '';
let lockedScrollY = 0;

export const useDialogFocus = (isOpen: boolean, onClose: () => void) => {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return;
    const dialogs = document.querySelectorAll<HTMLElement>('[role="dialog"]');
    const dialog = dialogs[dialogs.length - 1];
    const previousFocus = document.activeElement as HTMLElement | null;
    if (openDialogs++ === 0) {
      lockedScrollY = window.scrollY;
      previousOverflow = document.body.style.overflow;
      previousPosition = document.body.style.position;
      previousTop = document.body.style.top;
      previousWidth = document.body.style.width;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.width = '100%';
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
      if (--openDialogs === 0) {
        document.body.style.overflow = previousOverflow;
        document.body.style.position = previousPosition;
        document.body.style.top = previousTop;
        document.body.style.width = previousWidth;
        const previousScrollBehaviour = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, lockedScrollY);
        document.documentElement.style.scrollBehavior = previousScrollBehaviour;
      }
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);
};
