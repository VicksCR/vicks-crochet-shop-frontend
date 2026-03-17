export default function FooterColumn({ title, children, id }) {
  return (
    <section className="footer__column" id={id}>
      <h3 className="footer__column-heading">{title}</h3>
      {children}
    </section>
  );
}
