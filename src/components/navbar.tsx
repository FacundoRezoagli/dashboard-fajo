"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle');
  })
  const pathname = usePathname();
  return (
    <nav className="navbar nav-pills navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler text-white bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className={`${pathname === "/clients" ? "nav-link active" : "nav-link text-white"}`} aria-current="page" href="/clients">Clientes</Link>
            </li>
            <li className="nav-item">
              <Link className={`${pathname === "/products" ? "nav-link active" : "nav-link text-white"}`} href="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className={`${pathname === "/orders" ? "nav-link active" : "nav-link text-white"}`} href="/orders">Pedidos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}