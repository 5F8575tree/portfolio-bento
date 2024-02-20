import styles from "../grid.module.css";
import GitHub from "./GitHub";
import Language from "./Language";
import LightDarkMode from "./LightDarkMode";
import Profile from "./Profile";
import Project from "./Project";
import Resume from "./Resume";
import WorkTogether from "./WorkTogether";
import AboutMe from "./aboutMe";
import LinkedIn from "./linkedIn";
import Skills from "./skills";

const Grid = () => {
  return (
    <div className={styles.wrapper}>
      <Profile />
      <Project
        title="PHP website"
        intro="A company website built in PHP and JavaScript. The brief was for improved performance and some redesign."
        imageSrc="/outblast.jpg"
        designBit="/green-looper.svg"
        number="1"
        />
      <LightDarkMode />
      <Resume />
      <Language />
      <Project
        title="Shopify app"
        intro="Built to speed up use of the Shopify Admin, Storefront, and Checkout Extensibility API's. The user can fetch real store data using a simple UI."
        imageSrc="/shopify.jpg"
        designBit="/pink-looper.svg"
        number="2"
        />
      <WorkTogether />
      <LinkedIn />
      <GitHub />
      <Project
        title="Book app"
        intro="React app through which the user can search for books that are fetched from a dummy database and then store those books in various categories."
        imageSrc="/books.jpg"
        designBit="/purple-looper.svg"
        number="3"
      />
      <Project
        title="Landing page"
        intro="The user can search for a particular rental car and then customise their order. Registered members can also view their nearest dealership and rental history."
        imageSrc="/outblast.jpg"
        designBit="/orange-looper.svg"
        number="4"
      />
      <Skills />
      <AboutMe />
    </div>
  )
}

export default Grid
