type Props = {
    title: string
}

const Header = (props: Props) => {
  return (
    <h1 className ="title is-1 is-size-2-mobile has-text-weight-semibold has-text-white p-6 m-6">
        {props.title}
    </h1>
  )
}

export default Header