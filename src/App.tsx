import * as S from "./styles"

import { FaLaptop, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import Avatar from "../src/assets/logo-principal.png"

function App() {
  return (
    <>
      <S.Container>
        <S.Profile>
          <img src={Avatar} />
          <span>Devs Duo</span>
        </S.Profile>
        <S.Links>
          <ul>
            <li>
                <a href="https://devsduo.netlify.app" target="_blank"><FaLaptop />Site</a>
            </li>
            <li>
                <a href="https://www.instagram.com/devs.duo/" target="_blank"><FaInstagram />Instagram</a>
            </li>
            <li>
                <a href="www.linkedin.com/company/devs-duo/" target="_blank"><FaLinkedinIn />Linkedin</a>
            </li>
            <li>
                <a href="https://www.instagram.com/devs.duo/" target="_blank"><FaGithub />Github</a>
            </li>
            <li>
                <a href="http://api.whatsapp.com/send?phone=55996879174" target="_blank"><FaWhatsapp /> WhatsApp (Arthur)</a>
            </li>
            <li>
                <a href="http://api.whatsapp.com/send?phone=55996051394" target="_blank"><FaWhatsapp /> WhatsApp (Luiz Guilherme)</a>
            </li>
          </ul>
        </S.Links>
        <footer>
          <span>Feito pela Devs Duo!</span>
        </footer>
      </S.Container>
    </>
  )
}

export default App
