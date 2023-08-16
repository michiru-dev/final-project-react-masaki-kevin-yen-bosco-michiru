import Head from "next/head";
import { recipe } from "../shopping-list/practice";
import Header from "../../components/Header";

export default function Recipes() {
  return (
    <div>
      <Head>
        {/* Place the input element inside the Head component */}
        <input id="searchBar" placeholder="Search Recipes" autoComplete="off" />
      </Head>
      <Header />
      {/* Use a valid class or ID for styling */}
      <div className="styledDiv">
        Recipes
      </div>
    </div>
  );
}
