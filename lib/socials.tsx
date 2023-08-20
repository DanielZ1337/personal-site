import {siteConfig} from "@/lib/site";
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiMailSend} from "react-icons/bi";

const socials = {
    "LinkedIn": {
        "href": siteConfig.links.linkedin,
        "icon": <BiLogoLinkedin/>
    },
    "GitHub": {
        "href": siteConfig.links.github,
        "icon": <BiLogoGithub/>
    },
    "Email": {
        "href": siteConfig.links.emailto,
        "icon": <BiMailSend/>
    },
    "Twitter": {
        "href": siteConfig.links.twitter,
        "icon": <BiLogoTwitter/>
    },
    "YouTube": {
        "href": siteConfig.links.youtube,
        "icon": <BiLogoYoutube/>
    }
}

export default socials;