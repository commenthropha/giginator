const Header = ({
  title // The text that we want the Header component to display
}: {
  title: string
}) => {
  return (
    <div className="gradient">
      <h1 className="title is-1 is-size-2-mobile has-text-weight-semibold has-text-white p-12">
        {title}
      </h1>
    </div>
  );
};

export default Header;
