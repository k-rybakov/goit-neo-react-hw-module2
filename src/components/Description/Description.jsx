import css from "./Description.module.css";

export default function Description() {
  return (
    <div>
      <p className={css.name}>Sip Happens Café</p>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
