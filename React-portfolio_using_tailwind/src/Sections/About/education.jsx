import styles from "./education.module.css";

import Heading from "../../Components/Heading/heading";


function Education(){

    return(

<section id="education">
			<Heading index="" heading="Education" />
    
<div className={styles.education_container}>

        <ul className={styles.education}>
            <li className={styles.institute}>Oriental Institute Of Science and Technology            </li>
            <li className={styles.year}>Present - Sep 2021 - May 2025 </li>
            <li className={styles.course}> Bachelor’s degree in computer science engineering </li>
            <li className={styles.percentage}>  
            <span>1st sem : 8.8 CGPA</span> <br />
            <span>2nd sem : 7.9 CGPA</span>             
              </li>
        </ul>
<hr />
        <ul className={styles.education}>
            <li className={styles.institute}> Kendriya Vidyalaya Narmada Nagar      </li>
            <li className={styles.year}>2019 –  2021 </li>
            <li className={styles.course}> Higer secondary scool  </li>

            <li className={styles.percentage}>  
            <span>10th : 91.8 % </span> <br />
            <span>12th : 8.3 % </span>             
              </li>
            
        </ul>
       
</div>
</section>


    )}

export default Education ;
