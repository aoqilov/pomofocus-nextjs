import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  footerContent?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  children,
  footerContent,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} />

      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{title || "SETTING"}</h2>
          <button onClick={onClose} className="modal-close-button">
            <span>×</span>
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {footerContent && <div className="modal-footer">{footerContent}</div>}
      </div>
    </div>
  );
};

export default Modal;
