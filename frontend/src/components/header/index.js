import { Link } from "react-router-dom";
import "./styles.css"

export default function Header() {
  return (
    <div className="header">
      <h3>Mern Blog App</h3>
      <ul>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/add-blog"}>
          <button>Add Blog</button>
        </Link>
      </ul>
    </div>
  );
}
