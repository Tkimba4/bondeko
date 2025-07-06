const Section = ({ children, ...props }) => {
  return (
    <section {...props}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
