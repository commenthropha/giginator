// Create a type Alias for the Component props
type Props = {
  // The title for the Header to display
  title: string;
};

const Header = ({title}: Props) => {
  return (
    <div className="gradient">
      <h1 className="title is-1 is-size-2-mobile has-text-weight-semibold has-text-white p-12">
        {title}
      </h1>
    </div>
  );
};

export default Header;
