'use client';

import { type ElementRef, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
  path: string;
}

type DialogElementWithMethods = HTMLDialogElement & {
  showModal: () => void;
  close: () => void;
};

export const Modal = forwardRef<DialogElementWithMethods, ModalProps>(function Modal({ children, path }, ref) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    ...(dialogRef.current as HTMLDialogElement),
    showModal: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    }
  }), []);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add('no-scroll');
    } else {
      dialogRef.current?.close();
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const handleRouteChange = (path:string) => {
    // setIsOpen(false);
    router.push(path);
  };

  return (
    isOpen ? (
      <div className="modal-backdrop" id="backdrop">
        <dialog ref={dialogRef} className="modal" onClose={()=>handleRouteChange(path)} onClick={(e) => e.stopPropagation()}>
          {children}
        </dialog>
      </div>
    ) : null
  );
});
