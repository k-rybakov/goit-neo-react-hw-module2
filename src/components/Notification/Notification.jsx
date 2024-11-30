import css from "./Notification.module.css";

export default function Notification({ children }) {
  return <div className={css.notification}>{children}</div>;
}
