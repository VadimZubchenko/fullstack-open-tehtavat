const Notification = ({ success, error }) => {
  if (!success && !error) return null;

  return (
    <div className={success ? "success" : "error"}>{success || error}</div>
  );
};

export default Notification;
