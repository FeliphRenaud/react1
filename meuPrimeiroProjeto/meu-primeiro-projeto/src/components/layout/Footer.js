import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.modules.css'

function Footer () {

    return(
     <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li> <FaInstagram/> </li>
            <li> <FaLinkedin/> </li>
            <li> <FaGithub/> </li>

        </ul>
        <p>Nosso Roda pé </p>
     </footer>
     );
    
}

export default Footer;