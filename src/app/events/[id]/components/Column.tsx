type Props = {
  title: string;
  content: string;
};

const Column = ({ title, content }: Props) => {
  return (
    <div className="column">
      <h3 className="subtitle is-3 is-size-4-mobile mx-6">
        <span className="has-text-weight-semibold">{title}</span>
        <br />
        {content}
      </h3>
    </div>
  );
};

export default Column;
