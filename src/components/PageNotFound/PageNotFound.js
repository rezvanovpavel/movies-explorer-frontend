import "./PageNotFound.css";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <section className="pagenotfound">
            <div className="pagenotfound__container">
                <h1 className="pagenotfound__title">404</h1>
                <p className="pagenotfound__subtitle">Страница не найдена</p>
            </div>
            <Link to='/' className="pagenotfound__link">Назад</Link>
        </section>
    );
}

export default PageNotFound;