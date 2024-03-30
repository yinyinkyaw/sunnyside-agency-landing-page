import Logo from "@images/logo.svg"


const Navigation = () => {
  return (
    <header>
        <div className="nav">
            <img src={Logo} className="logo"  />
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>
                  <a>Contact</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navigation