import React from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import { login, logout } from "../lib/auth";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";

//Style
const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #a3b18a;
    box-shadow: 0 1px 5px #344e41;
`;

const CompanyName = styled.h1`
    font-size: 60px;
    margin: 25px;
`;

const HeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
`;

const HeaderLi = styled.li`
    font-size: 25px;
    margin: 25px;
    cursor: pointer;
`;

const LoginBtn = styled.button`
    font-size: 30px;
    font-weight: bold;
    margin: 25px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const LoginImg = styled(BiLogIn)`
    font-size: 30px;
    position: relative;
    top: 6px;
`;

const LogoutBtn = styled.button`
    font-size: 30px;
    font-weight: bold;
    margin: 25px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const LogoutImg = styled(BiLogOut)`
    font-size: 30px;
    position: relative;
    top: 6px;
`;

const NavLink = styled.a`
text-decoration: none;
color: inherit;
position: relative;
transition: transform 0.2s ease-in-out; 

&:hover {
    text-decoration: underline;
   transform: translateY(-50px) !important ;
}

&.active {
    text-decoration: underline !important;
    font-weight: bold;
}
`;

function Header() {
    const user = useAuth();
    const router = useRouter();

    return (
        <HeaderDiv>
            <CompanyName>FRIDGEFY</CompanyName>
            <HeaderUl>
                <HeaderLi>
                    <NavLink
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                        className={router.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </NavLink>
                </HeaderLi>
                <HeaderLi>
                    <NavLink
                        href="recipes"
                        style={{ textDecoration: "none", color: "inherit" }}
                        className={router.pathname === "/recipes" ? "active" : ""}
                    >
                        Resipes
                    </NavLink>
                </HeaderLi>
                <HeaderLi>
                    <NavLink
                        href="shopping-list"
                        style={{ textDecoration: "none", color: "inherit" }}
                        className={router.pathname === "/shopping-list" ? "active" : ""}
                    >
                        Shopping List
                    </NavLink>
                </HeaderLi>
            </HeaderUl>
            {user ? (
                <LogoutBtn onClick={logout}>
                    <LogoutImg />
                    &nbsp;Logout
                </LogoutBtn>
            ) : (
                <LoginBtn onClick={login}>
                    <LoginImg />
                    &nbsp;Login
                </LoginBtn>
            )}
        </HeaderDiv>
    );
}
export default Header;
