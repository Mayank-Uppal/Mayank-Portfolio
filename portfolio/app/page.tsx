import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import NavbarComponent from "./Navbar/navbarComponent";
import HomeComponent from "./Home/homeComponent";
import SkillComponent from "./Skills/skillComponent";
import ProjectComponent from "./Projects/ProjectComponent";
import ExperienceComponent from "./Experience/experienceComponent";
import ContactComponent from "./contact/contactComponent";
import FooterComponent from "./Footer/footerComponent";
export default function Home() {
  return (
    <>
    {/* <BackgroundRippleEffectDemo/> */}
    <HomeComponent/>
   <ProjectComponent />
    <SkillComponent />
   <ExperienceComponent />
    <ContactComponent />
    <FooterComponent/> 
    </>

  );
}
