import { BsInstagram } from "react-icons/bs";
import facebook from "../../assets/facebook-icon.svg"
import github from "../../assets/github-icon.svg"
import linkedin from "../../assets/linkedin-icon.svg"


const Footer = () => {  // Tahun sekarang untuk footer
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer">
            <div className="container">
                <a href="mailto:rahmatsuhadi32@gmail.com">rahmatsuhadi32@gmail.com</a>
                {/* <!-- Social links --> */}
                <div className="social">
                    {/* <a href="#" target="_blank"
                    ><img src={facebook} alt="Facebook"
                        /></a> */}
                    {/* <a href="#" target="_blank"><img src="./assets/twitter-icon.svg" alt="Twitter" /></a> */}
                    <a href="https://linkedin.com/in/rahmat-suhadi" target="_blank"
                    ><img src={linkedin} alt="Linkedin"
                        /></a>
                    <a href="https://github.com/rahmatsuhadi" target="_blank"><img src={github} alt="GitHub" /></a>
                    <a href="https://www.instagram.com/m.matt_/" target="_blank"
                    ><BsInstagram size={20}/></a>
                </div>
                {/* <!-- Attribution --> */}
                {/* <div className="attribution">
                    <a
                        href="https://github.com/CommunityPro/portfolio-html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
                            alt="attribution"
                            width="150px"
                        />
                    </a>
                </div> */}
                <p>Copyright &copy;{currentYear}, All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer