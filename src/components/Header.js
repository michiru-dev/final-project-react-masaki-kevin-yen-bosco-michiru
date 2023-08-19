import React from "react";
import Link from "next/link";

import useAuth from "../hooks/useAuth";
import { login, logout } from "../lib/auth";
import { styled } from "styled-components";

function Header() {
    const user = useAuth();

    //Style
    const Header = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    `;

    const CompanyName = styled.h1`
        margin: 0 20px;
    `;

    const HeaderUl = styled.ul`
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
    `;

    const HeaderLi = styled.li`
        margin: 0 10px;
        cursor: pointer;
    `;

    const LoginBtn = styled.button`
        margin: 0 20px;
        background: none;
        border: none;
        appearance: none;
        cursor: pointer;
    `;

    const LogoutBtn = styled.button`
        margin: 0 20px;
        background: none;
        border: none;
        appearance: none;
        cursor: pointer;
    `;

    return (
        <Header>
            <CompanyName>FIRDGEFY</CompanyName>
            <HeaderUl>
                <HeaderLi>
                    <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Home
                    </Link>
                </HeaderLi>
                <HeaderLi>
                    <Link
                        href="recipes"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Resipes
                    </Link>
                </HeaderLi>
                <HeaderLi>
                    <Link
                        href="shopping-list"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Shopping List
                    </Link>
                </HeaderLi>
            </HeaderUl>

            {user ? (
                <LogoutBtn onClick={logout}>Logout</LogoutBtn>
            ) : (
                <LoginBtn onClick={login}>Login</LoginBtn>
            )}
        </Header>
    );
}

export default Header;
