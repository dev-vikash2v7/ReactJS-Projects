import styles from "./styles.module.css";
import Heading from "../../Components/Heading/heading";


function Skills(){

    return(

		<section id="skills">

		<Heading index="02" heading="Skills" />

<div className={styles.skills_container}>

<div className={styles.skill_container}>
		<h1 className={styles.title}>Programming Skillset</h1>
	<div className={styles.skills}>
			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python"/>
			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML 5"/>
			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="Css"/>
			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javaScript" />
	</div>
</div>


<div className={styles.skill_container}>
	<h1 className={styles.title}>Web Development Skillset</h1>
	<div className={styles.skills}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django"/>
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="BootStrap" />
		{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDb"/> */}
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySql" />
		{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs"/> */}
	</div>
</div>


<div className={styles.skill_container}>
<h1 className={styles.title}>Data Science  Skillset</h1>

<div className={styles.skills}>

		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Numpy"/>
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt="Pandas"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" />
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySql"/>
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original-wordmark.svg"alt="Kaggle" /> */}
</div>  
</div>


<div className={styles.skill_container}>
<h1 className={styles.title}>Tools Skillset</h1>
<div className={styles.skills}>
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VSCode"/>
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github"/>
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku" />
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"/> */}
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows"/>
</div>
</div>


	</div>

	</section>
)
}

export default Skills;
