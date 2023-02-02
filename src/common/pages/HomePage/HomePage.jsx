import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Features from "../../components/Features/Features";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import InquiryForm from "../../components/InquiryForm/InquiryForm";
import OurProjects from "../../components/OurProjects/OurProjects";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => (
  <main>
    <HomeHeader/>
    <HowWeWork/>
    <OurProjects/>
    <Features/>
    <Reviews/>
    <Faq/>
    <InquiryForm/>
    <Blog/>
  </main>
);

export default HomePage;