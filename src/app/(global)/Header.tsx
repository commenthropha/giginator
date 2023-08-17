type Props = {
    title: string
}

const Header = (props: Props) => {
  return (
    <div className="gradient">
        <h1 className ="title is-1 is-size-2-mobile has-text-weight-semibold has-text-white p-12">
            {props.title}
        </h1>
    </div>
  )
}

export default Header