import Link from "next/link";


export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler text-white bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" href="/clients">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/products">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/orders">Pedidos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}