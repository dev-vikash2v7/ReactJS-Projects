import styles from "./contact.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Heading from "../../Components/Heading/heading";

function Contact(){

    return(

<section id="contact">
			<Heading index="" heading="Contact" />
    
        <ul className={styles.contact_container}>       

                    <li className={styles.phone}>      +91-8817956935      </li>
                    <li className={styles.email}>vikashvermacom92@gmail </li>

        <li className={styles.icons}>

            <a href='https://github.com/vikash129' target="_blank" rel="noreferrer" className={styles.icon}> 	
            <LinkedInIcon  />
        </a>

        <a  href = 'linkedin.com/in/vikash-verma-/' target="_blank" className={styles.icon}> 	
        <GitHubIcon  />
        </a>
</li>
        </ul>    

        <img style={ {width : '200px' } } src="images/home.svg" alt="img" />   

</section>




    )}

export default Contact ;

