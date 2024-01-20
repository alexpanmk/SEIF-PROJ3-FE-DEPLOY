import React from "react";

function successModal(props) {
  //Props
  const { onDismiss, onCancel, title, message } = props;

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={onDismiss}>
                Ok
              </button>
              {onCancel && (
                <button className="btn" onClick={onCancel}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
