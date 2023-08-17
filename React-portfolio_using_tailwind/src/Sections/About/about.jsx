import Heading from "../../Components/Heading/heading";
import styles from "./styles.module.css";
import Education from "./education";
import Contact from "./contact";
 
function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			
			<div className={styles.container}>

				<div className={styles.left}>

								<p className={styles.desc}>Hi Everyone, I am <span>Vikash Verma</span> from <span>Bhopal , India.</span>I am an Under Graduate pursuing B.Tech in <span>Computer Science Engineering with specialisation in Artificial Intelligence and Machine Learning.</span></p>

								<h4>Apart from coding, some other activities that I love to do!</h4>

								<ul className={styles.desc}>
									<li> Signing  </li>
									<li> Playing Games  </li>
									<li> Travelling  </li>
								</ul>
				</div>


				<div className={styles.right}>
					<img
						src="./images/bg.png"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>

			</div>


	

					<Heading index="" heading="Awards and Achivements" />
<ul className={styles.awards}>
<li> Runner Up Team in Science Exhibition for project in  Attendance system with Machine Learning.</li>
<li>  Topper of NPTEL Certification program in DSA using Python among 2000+ students with above 90% score.</li> 
<li>  HackerRank Certifications on Python , Problem Solving(intermediate) , JavaScript(basic) and SQL(advance).</li> 
<li>  Certificates - Machine Learning with IBM</li> 
</ul>

			<Education/>
			<Contact/>


		</section>
	);
}

export default About;
