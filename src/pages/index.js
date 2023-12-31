import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";


//Style
const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("/homePageImg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100vw;


    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("/homePageImg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        height: 100vh;
        width: 100vw;
    }
    @media (max-width: 1024px) {
        height: 100vh;
        width: 100vw;
        
    }
`;

const HomePageDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 450px) {
      width:100vw;
      display: flex;
      flex-direction: column;
    }
`;

const HomePageContents = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 600px;

    @media (max-width: 450px) {
        width:100vw;
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items:center;
      }
    @media (max-width: 1024px) {
        max-width: 90%; /* Adjusted max-width for tablet */
    }
`;

const HomePageQuote = styled.h1`
    font-family: "Lobster", "Poppins";
    font-size: 90px;
    font-weight: bold;
    color: #a7c957;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px black;
    @media (max-width: 450px) {
        width:100vw;
        font-size: 80px;
      }
    @media (max-width: 1024px) {
        font-size: 80px; /* Adjusted font size for tablet */
    }
`;

const StartBtn = styled.button`
    padding: 10px 15px;
    font-size: 25px;
    border-radius: 20px;
    background-color: #dad7cd;
    border: 3px solid black;
    color: black;
    cursor: pointer;
    width: 250px;
    height: 60px;


    @media (max-width: 450px) {
        font-size: 18px;
        width: 200px;
        height: 50px;
        display:flex;
        justify-content:center;
        align-items:center;

    }
`;

const EnterImg = styled(HiCursorClick)`
    font-size: 25px;
    position: relative;
    left: 2px;
    top: 3px;
    @media (max-width: 1024px) {
        font-size: 20px; /* Adjusted font size for tablet */
    }
`;

export default function Home() {
    return (
        <HomePage>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <HomePageDiv>
                <HomePageContents>
                    <HomePageQuote>
                        Recipes capture moments,
                        <br />
                        ingredients capture hearts.
                    </HomePageQuote>
                    <Link href="recipes" style={{ width: "250px" }}>
                        <StartBtn>
                            GET STARTED&nbsp;
                            <EnterImg />
                        </StartBtn>
                    </Link>
                </HomePageContents>
            </HomePageDiv>
        </HomePage>
    );
}
