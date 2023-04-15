import React from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import { ROUTES } from "@routes/config";
import { LINK_TO_TOP_STORIES, LINK_TO_NEW_STORIES, LINK_TO_BEST_STORIES } from "@constants/links";

export const Header = () => (
  <div className="header">
    <Link to={LINK_TO_TOP_STORIES} className="logo">
      Hacker News
    </Link>
    <div className="nav">
      <NavLink to={LINK_TO_TOP_STORIES} className={({ isActive }) => cn("nav__link", { nav__link_underline: isActive })}>
        Top
      </NavLink>
      <NavLink to={LINK_TO_NEW_STORIES} className={({ isActive }) => cn("nav__link", { nav__link_underline: isActive })}>
        Latest
      </NavLink>
      <NavLink to={LINK_TO_BEST_STORIES} className={({ isActive }) => cn("nav__link", { nav__link_underline: isActive })}>
        Best
      </NavLink>
    </div>
    <div className="login">
      <Link to={ROUTES.LOGIN} className="login">
        Login
      </Link>
    </div>
  </div>
);
