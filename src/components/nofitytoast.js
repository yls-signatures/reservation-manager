import { Toast, ToastContainer } from "react-bootstrap"

export default function NotifyToast({ show, setShow, order }) {
  return (
    <ToastContainer
      className="p-3"
      style={{
        position: "fixed",
        zIndex: 1,
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
      }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <div className="d-flex ms-auto gap-4">
            <strong
              className="my-auto "
              style={{ fontSize: 16 }}
            >{`Ordered ${order} x 1`}</strong>
            <img src="/walking-kaws.gif" className="rounded me-2 kaws-image" alt="" />
          </div>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  )
}
