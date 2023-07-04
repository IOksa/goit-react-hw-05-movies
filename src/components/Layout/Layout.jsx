import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './Layout.module.css';

const Layout=()=>(
    <>
        <header>
            <nav>
                <ul className={css.menuList}>
                    <li>
                        <NavLink className={css.menuLink} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.menuLink} to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
);

export default Layout;