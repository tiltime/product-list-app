import { Link } from '../routes';

const linkStyle = {
    marginRight: 15
};
const Header = () => (
  <div>
    <Link to="/">
        <a style={linkStyle}>Index Page</a>
    </Link>
  </div>
);

export default Header;
