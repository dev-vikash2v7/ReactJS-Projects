import styles from './styles.module.css'
import { VerifiedOutlined , StarOutlined } from '@mui/icons-material';

function Navbar(){
	return(
		<div className={styles.navbar}> 

		<div className={styles.nav_left}> 
		 <a href= "#home" className={styles.nav_link}> <VerifiedOutlined/>  Vikash 
		 
		 </a>
		</div>


		<div  className={styles.nav_right}>

		<a href= "#about" className={styles.nav_link}> <StarOutlined/>  About Me </a>
		<a href= "#work"  className={styles.nav_link}> <StarOutlined/>  Work </a>
		<a href= "#contact"  className={styles.nav_link}><StarOutlined/> Contact</a>
		<a href= "#certificate"  className={styles.nav_link}> <StarOutlined/>Certificate</a>

		<a className={styles.nav_resume_btn} href= "./documents/resume.pdf" target="__blank">Resume</a>

		</div>

		</div>

	)	
}

export default Navbar;

