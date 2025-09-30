import { CV } from "./model/cv.js";

const cv_es: CV = {
	profile: '<p>Desarrollador Senior con mas de 15 años de experiencia con Java, Javascript y Oracle PL-SQL, y mas de 10 años de experiencia con Meta4 PeopleNet.</p>' +
		'<p>Con mucha experiencia en desarrollo, implementación, análisis ' +
		'y liderazgo técnico en proyectos de diversas áreas de negocio ' +
		'trabajando con múltiples tecnologías, tales como Meta4 PeopleNet ' +
		'(RichClient, SelfService), Java EE (JSF, JPA/Hibernate, JSP, etc.), ' +
		'Oracle PL-SQL, Desarrollo Web (Javascript, VueJs, etc) entre otros. ' +
		'Habiendo realizado muchos proyectos en países como Argentina, ' +
		'México, Chile, El Salvador entre otros, en dichos ambientes.</p><p>' +
		'Con experiencia principalmente en el área de desarrollo, así como ' +
		'también en el liderazgo técnico de proyectos, análisis funcional, ' +
		'capacitación y trato con usuarios.</p>',
	experience: [
		{
			position: 'Software Engineer', company: 'META', start: 'Mayo 2022', end: 'actual', country: 'USA',
			description: 'Trabajando con tecnologías como ReactJS, GraphQL, Html5, ES6+, PHP, Python'
		},
		{
			position: 'Senior Software Developer', company: 'COLLABERA Inc', start: 'Octubre 2021', end: 'Abril 2022', country: 'USA',
			description: 'Trabajando por contrato para Wayfair Inc. con tecnologías como ReactJS, GraphQL, Html5, ES6+, Python'
		},
		{
			position: 'Senior Software Developer', company: 'AUSTIN SOFTWARE', start: 'Abril 2021', end: 'Octubre 2021', country: 'Chile/USA',
			description: 'Trabajando para una StartUp basada en Austin, TX, con una variedad de tecnologías, incluidas ReactJS, Material-UI, Html5, ES6+, Python'
		},
		{
			position: 'Solutions Analyst', company: 'EVERIS', start: 'Noviembre 2020', end: 'Abril 2021', country: 'Chile',
			description: 'Desarrollador Senior Full-Stack en Everis, destacado en Scotiabank Chile, trabajando con tecnologías como ReactJS, SpringBoot entre otras.'
		},
		{
			position: 'Desarrollador Senior', company: 'TRITIUM', start: 'Octubre 2014', end: 'Actualidad', country: 'Chile',
			description: "Partner y Consultor, dedicado principalmente al apoyo a clientes en sus sistemas de Recursos humanos y otros, especializándome sobre todo en los sistemas Meta4 PeopleNet, Meta4 SelfService, Oracle Java y PL-SQL, R, entre otros, y en la integración de dichas tecnologías con otros sistemas de software y hardware.<br>" +
				"<p>Entre las actividades realizadas en proyectos en los que he participado se encuentran:</p>" +
				"<p data-bullet>• Implementación de software Meta4/PeopleNet, Nómina, AutoServicio y RRHH (Evaluación, Selección, Capacitación, entre otros)</p>" +
				"<p data-bullet>• Optimización, mantenimiento y mejoras de procesos de nómina PeopleNet</p>" +
				"<p data-bullet>• Implementación, modificaciones y mantenimiento de sistemas de control de asistencia</p>" +
				"<p data-bullet>• Extracción, análisis y publicación de datos</p>" +
				"<p data-bullet>• Actualización infraestructura</p>" +
				"<p data-bullet>• Pruebas de Rendimiento (Stress Testing)</p>" +
				"<p data-bullet>• Capacitaciones de usuarios y desarrolladores</p>"
		},
		{
			position: 'Desarrollador Senior', company: 'LEMA', start: 'Agosto 2013', end: 'Octubre 2014', country: 'Chile',
			description: "Trabajando con diversos clientes en Chile como Consultor Sr. Meta4 PeopleNet, proporcionando soluciones para sus sistemas de Recursos Humanos, mejorando, migrando y actualizando sus instalaciones. Este puesto requería que trabajara con los clientes para decidir las mejores soluciones para sus ambientes y luego aplicar las mismas al sistema, desarrollando con PeopleNet LN4, Java, SQL, PL/SQL entre otros.<br>" +
				"Funciones principales:<br>" +
				"<ul><li>Implementación de software Meta4/PeopleNet, Nómina, AutoServicio y RRHH</li>" +
				"<li>Trato con clientes</li>" +
				"<li>Control de proyectos</li>" +
				"</ul>"
		},
		{
			position: 'Desarrollador Senior Java', company: 'Huenei (Destacado en Citibank)', start: 'Julio 2012', end: 'Julio 2013', country: 'Argentina',
			description: "Trabajando en la integración de un sistema CRM global, como parte de un proyecto de estandarización que apuntaba a tener un sistema único corriendo en todos las oficinas del mundo. Trabajando con Java basado en tecnología de portales IBM.<br>" +
				"Logros:<br>" +
				"Ayudar a integrar el sistema CRM, y también haber ayudado a otros equipos a finalizar sus asignaciones."
		}
	],
	education: [
		{ institution: "Universidad Centroamericana UCA (El Salvador)", degree: "Licenciatura en Ciencias de la Computación", description: "", duration: "2003 - 2008" }
	],
	skills: ['Javascript/NodeJS/TS', 'Java', 'SQL', 'PL/SQL', 'Spring Framework', 'Python', 'FullStack Development', 'Oracle, SQL Server, etc.', 'Git'],
	personalProjects: [
		{
			name: 'Mapas Covid El Salvador', description: 'Mapa y gráficos interactivos con detalle de casos Covid históricos, desarrollado con JS/TS, REST API, NodeJs, VueJs, Express, TypeORM, Charts.js ', duration: '2020 - Current',
			repo: {
				name: 'Github',
				url: 'https://github.com/tritiumcl/covid-maps-sv',
				icon: 'fab fa-github'
			},
			web: {
				name: 'Mapas Covid El Salvador',
				url: 'https://www.facebook.com/share/v/1CfysHAoCF/',
				icon: 'fas fa-globe'
			}
		},
		{
			name: 'UglyLinks', description: 'Extensión web para Chrome y Firefox para marcar links que no se quieren seguir viendo. (Typescript, VueJs, Bootstrap, IndexedDB, Mocha/Chai).', duration: '2019',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/UglyLinks',
				icon: 'fab fa-github'
			},
			web: null
		},
		{
			name: 'Diff Viewer', description: 'Herramienta web para visualizar archivos .diff de la misma forma que se visualizan por ejemplo en github. (Typescript, VueJs).', duration: '2017 - Current',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/diff-viewer',
				icon: 'fab fa-github'
			},
			web: {
				url: 'https://tritium.cl/diff-viewer/diffviewer.html',
				icon: 'fas fa-globe'
			}
		},
		{
			name: 'Retailer.org', description: 'Herramienta POS orientada a pequeños comercios, que permite llevar control en tiempo real de inventario, ventas entre otros', duration: '2005 - 2006',
			repo: {
				name: 'SourceForge',
				url: 'https://sourceforge.net/projects/retailerorg/',
				icon: 'fas fa-code-branch'
			},
			web: null
		},
		{
			name: 'Este CV', description: 'Este CV, desarrollado con Vue y Typescript, para ver una versión actualizada vea el link abajo de éste párrafo', duration: '2020 - A la fecha',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/mycv/',
				icon: 'fab fa-github'
			},
			web: {
				name: 'My CV',
				url: 'https://cv.frank-orellana.com/',
				icon: 'fas fa-globe'
			}
		}
	],
	links: [
		{ name: 'Linkedin', url: 'https://linkedin.com/in/frank-orellana-pineda/?locale=en_US', icon: 'fab fa-linkedin-in' },
		{ name: 'Github', url: 'https://github.com/frank-orellana', icon: 'fab fa-github' },
		{ name: 'StackOverflow', url: 'https://stackoverflow.com/users/1583422/frank-orellana', icon: 'fab fa-stack-overflow' },
		{ name: 'HackerRank', url: 'https://www.hackerrank.com/frank_orellana', icon: 'fab fa-hackerrank' },
		{ name: 'Kaggle', url: 'https://www.kaggle.com/frankorellana', icon: 'fab fa-kaggle' }
	],
	interests: [
		{ name: 'IA, Machine Learning' },
		{ name: 'DataScience' },
		{ name: 'Viajar' }
	],
	languages: [
		{ name: 'Español', level: 'Nativo' },
		{ name: 'Ingles', level: 'Avanzado/Conversacional' },
		{ name: 'Francés', level: 'Básico' },
	],
	courses: [
		{
			institution: 'MITx MicroMasters Program',
			name: 'Statistics and Data Science',
			description: 'Currently coursing program.<br>\
			From probability and statistics to data analysis and machine learning, master the skills needed to solve complex challenges with data.',
			duration: '2021-Current',
			link: {
				url: 'https://micromasters.mit.edu/ds/',
				icon: 'fas fa-globe'
			}
		}
	],

	wsapLnk: 'https://wa.me/18573899796',
	phone: '+1 (857) 389-9796'
}

const cv_en: CV = {
	profile: `
	<p>Software engineer with 15+ years building production systems and experience in data analysis, combining statistics and machine learning coursework with hands-on projects. Demonstrated ability to merge solid software engineering practices (scalable services, testing, CI/CD) with data-oriented skills in Python and R for reproducible analysis, visualization and prototyping.</p>
	<p>Completed extensive coursework in linear models, statistics, data analytics and machine learning. Keen interest in computational biology and bioinformatics applications, with focus on applying engineering and data skills to scientific datasets such as genomics and high-throughput experiments.</p>
	<p>Key strengths: designing and implementing robust data pipelines and APIs, exploratory data analysis and visualization, reproducible analysis, and collaborating with cross-functional teams to deliver production-ready solutions.</p>
	<p>Technical highlights:</p>
	<p data-bullet>• Engineering: Backend APIs (Node.js, Express, Java/SpringBoot), relational databases (Oracle, SQL Server, Postgres), and CI/CD-driven deployments.</p>
	<p data-bullet>• Frontend engineering: interactive UI development, client-side data visualization and mapping with React and JavaScript, attention to performance and usability for large datasets.</p>
	<p data-bullet>• Data pipelines & interactive visualization: scripting for ETL and reproducible analysis; practical experience building interactive visualizations and mapping front-ends using React and JavaScript.</p>
	<p data-bullet>• Data & ML (interest): basic familiarity with Python for data tasks (primarily used for ETL, cleaning and processing; introductory exposure to pandas/NumPy) and coursework in statistical concepts and introductory ML.</p>
	<p>Strong experience in extracting, cleaning and visualizing datasets, with active development of projects demonstrating applied data skills. Seeking opportunities to apply software engineering expertise and growing data-science capabilities to scientific problems.</p>
	`,
	experience: [
		{
			position: 'Software Engineer', company: 'META', start: 'May 2022', end: 'actual', country: 'USA',
			description:
				'<p>Software Engineer on the Actionable Insights team, responsible for developing and enhancing features for Meta\'s Network Insights product.</p>' +
				'<p>Led development and optimization of Network Insights features, focusing on data handling efficiency, user experience improvements, and successful feature releases to drive business growth and partner satisfaction.</p>' +
				'<p>Key Achievements:</p>' +
				'<p data-bullet>• Developed and optimized features for Actionable Insights, improving data handling efficiency and network performance.</p>' +
				'<p data-bullet>• Collaborated with cross-functional teams to ensure successful release of new features and improvements.</p>' +
				'<p data-bullet>• Conducted thorough code reviews and provided constructive feedback to strengthen team code quality.</p>' +
				'<p data-bullet>• Defined and implemented efficient processes for handling partner and internal requests through backlog and service ticket management.</p>' +
				'<p data-bullet>• Mentored junior team members and bootcampers, fostering technical growth and best practices.</p>',
				icon: 'fa-brands fa-meta'
		},
		{
			position: 'Senior Software Developer', company: 'COLLABERA', start: 'October 2021', end: 'April 2022', country: 'USA',
			description: '<p>Working as a contract for Wayfair Inc. for building external facing login portal, with technologies such as ReactJS, GraphQL, Html5, ES6+, Python</p>'
		},
		{
			position: 'Senior Software Developer', company: 'AUSTIN SOFTWARE', start: 'April 2021', end: 'October 2021', country: 'Chile/USA',
			description: '<p>Working for an Austin, TX based startup, with a variety of technologies, including ReactJS, Material-UI, Html5, ES6+, Python</p>'
		},
		{
			position: 'Solutions Analyst', company: 'EVERIS', start: 'November 2020', end: 'April 2021', country: 'Chile',
			description: '<p>Senior Full-Stack developer at Everis, working for Scotiabank Chile with technologies such as ReactJS, SpringBoot, Jenkins, Sonarcube among others, in a project driven with the scrum methodology</p>'
		},
		{
			position: 'Partner / Sr. Consultant', company: 'TRITIUM', start: 'October 2014', end: 'Current', country: 'Chile',
			description: "<p>Working for our customers with enterprise class HR software, especially with Meta4 PeopleNet, providing consulting services in different HR and tech areas.</p>" +
				"<p>Projects Responsibilities:</p>" +
				"<p data-bullet>• Software implementation: Meta4/PeopleNet, Payroll, SelfService and HR (Personnel Evaluation, Selection, Training, among others)</p>" +
				"<p data-bullet>• PeopleNet Payroll Performance Improvement, maintenance and customization</p>" +
				"<p data-bullet>• Attendance control system implementation, customization and maintenance.</p>" +
				"<p data-bullet>• Data extraction, analysis and publication.</p>" +
				"<p data-bullet>• Technological upgrades</p>" +
				"<p data-bullet>• Stress Testing</p>" +
				"<p data-bullet>• User and developer trainings</p>"
		},
		// {
		// 	position: 'Senior Developer', company: 'LEMA', start: 'August 2013', end: 'October 2014', country: 'Chile',
		// 	description: "Working for different clients in Chile as a Sr. Meta4 PeopleNet consultant, \
		// 		providing solutions for their HR systems, improving, migrating and updating their installations. \
		// 		This job required me to work with clients to decide the best solutions for their environments and \
		// 		then applying those solutions to the system. Developing with PeopleNet LN4, Java, SQL among others.<br>"
		// },
		// {
		// 	position: 'Senior Java Developer', company: 'Huenei (Working at Citibank)', start: 'July 2012', end: 'July 2013', country: 'Argentina',
		// 	description: "Working in the integration of a global CRM system, as part of a global standardization project which \
		// 		aimed to have the same basic system running in all of their offices around the world. Working with Java based IBM Portals technology.<br>" +
		// 		"Achievements: Helped integrate CRM system, and also helped other teams to finalize their assignments."
		// }
	],
	education: [
		{ institution: "Universidad Centroamericana UCA (El Salvador)", degree: "Bachelor in Computer Science", description: "", duration: "2003 - 2008" }
	],
	skills: ['Python (primarily for ETL, data cleaning and processing; basic pandas/NumPy exposure)', 'R (coursework exposure)', 'Familiarity with statistical concepts and linear models (coursework)', 'Data analysis & visualization (introductory)', 'Foundational machine learning concepts (coursework)', 'Interactive visualizations & mapping (React, D3, Leaflet)', 'Javascript/Typescript', 'Vue, React', 'NodeJS, Express', 'SQL / PL-SQL / T-SQL', 'Java (Spring/SpringBoot)', 'Bash, CI/CD', 'Git', 'NoSQL, TypeORM', 'TDD/Jest/Mocha/Chai'],

	personalProjects: [
		{
			name: 'Covid Maps El Salvador (archived)', description: 'Interactive maps and charts showing historical Covid cases by region; developed as a public data visualization project using JS/TS, REST APIs, Node.js and Vue.js.', duration: '2020 - 2021',
			repo: {
				name: 'Github',
				url: 'https://github.com/tritiumcl/covid-maps-sv',
				icon: 'fab fa-github'
			},
			web: {
				name: 'Covid Maps El Salvador',
				url: 'https://www.facebook.com/share/v/1CfysHAoCF/',
				icon: 'fas fa-globe'
			}
		},
		{
			name: 'UglyLinks', description: 'Browser Extension to uglify links in websites to mark items you don\'t want to click anymore. (Typescript, VueJs, Bootstrap, IndexedDB).', duration: '2019',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/UglyLinks',
				icon: 'fab fa-github'
			},
			web: null
		},
		{
			name: 'Diff Viewer', description: 'Web Utility to visualize diff files as they are seen in github. (Typescript, VueJs).', duration: '2017 - Current',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/diff-viewer',
				icon: 'fab fa-github'
			},
			web: {
				url: 'https://tritium.cl/diff-viewer/diffviewer.html',
				icon: 'fas fa-globe'
			}
		},
		{
			name: 'Retailer.org', description: 'Retailer.Org is a POS(Point Of Sale) program aimed specially to mini market alike retailers, allowing them to have a real time control of their inventory, sales and other basic data.', duration: '2005 - 2006',
			repo: {
				name: 'SourceForge',
				url: 'https://sourceforge.net/projects/retailerorg/',
				icon: 'fas fa-code-branch'
			},
			web: null
		},
		{
			name: 'This CV', description: 'This CV, developed with Vue and Typescript, to see an updated version click the link below', duration: '2020 - Current',
			repo: {
				name: 'Github',
				url: 'https://github.com/frank-orellana/mycv/',
				icon: 'fab fa-github'
			},
			web: {
				name: 'My CV',
				url: 'https://cv.frank-orellana.com/',
				icon: 'fas fa-globe'
			}
		}
	],
	links: cv_es.links,
	interests: [
		{ name: 'Computational Biology / Bioinformatics' },
		{ name: 'Machine Learning' },
		{ name: 'Data Science' },
		{ name: 'Traveling' }
	],
	languages: [
		{ name: 'Spanish', level: 'Native' },
		{ name: 'English', level: 'Advanced/Conversational' },
		{ name: 'French', level: 'Basic' },
	],
	courses: [
		...(cv_es.courses || []),
		{
			institution: 'Self-study / online courses',
			name: 'Linear Models, Statistics, Data Analytics, Machine Learning (MOOCs)',
			description: 'Coursework and exercises covering linear models, statistical inference, exploratory data analysis and introductory machine learning. Focus on reproducible analysis with Python and practical ETL/data-cleaning workflows.<br> \
			   Certificates: <ul> \
				   <li><a href="https://courses.edx.org/certificates/0dceabcc6368451594cb631a99d03b22" target="_blank" rel="noopener">Statistics and R</a></li> \
					 <li><a href="https://courses.edx.org/certificates/4a14d3096d1d4e039d66e1442367f1da" target="_blank" rel="noopener">Machine Learning with Python-From Linear Models to Deep Learning</a>.</li>\
				</ul>',
			duration: '2020-2024',
			link: null
		}
	],
	wsapLnk: 'https://wa.me/18573899796',
	phone: '(857)389-9796'
}


// FULLSTACK CV

// FS ES

const cv_fs_es = JSON.parse(JSON.stringify(cv_es)) as typeof cv_es;

cv_fs_es.profile = '<p>Desarrollador FullStack con mas de 5 años de experiencia con Javascript/Typescript, \
NodeJs, Express, VueJs, React, Vanilla Js (ES6+), Java (Spring/SpringBoot/Thymeleaf), \
Bases de datos relacionales (Oracle, MSSqlServer, MariaDB/MySQL, etc).</p>'+
	'<p>Con mas de 10 años de experiencia experiencia en desarrollo, implementación, análisis ' +
	'y liderazgo técnico en proyectos de diversas áreas de negocio ' +
	'trabajando también con múltiples tecnologías en todas las capas de aplicación, tales como \
 Java EE (JSP, JSF, JPA/Hibernate, etc.), Oracle PL-SQL, MSSQL T-SQL, entre otros. '+
	'Habiendo realizado muchos proyectos en países como Argentina, ' +
	'México, Chile, El Salvador entre otros, con dichas tecnologías.</p><p>' +
	'Con experiencia principalmente en el área de desarrollo, así como ' +
	'también en el liderazgo técnico de proyectos, análisis funcional, ' +
	'capacitación y trato con usuarios.</p>';

cv_fs_es.skills = ['Javascript/Typescript', 'Vue, React', 'NodeJS', 'Express', 'HTML/CSS', 'JQuery/Bootstrap', 'REST, GraphQL, SOAP', 'Java', 'SQL, PL/SQL', 'Spring Framework', 'Python, R', 'Oracle, SQL Server, etc.', 'Git', 'NoSQL, TypeORM', 'TDD/Jest/Mocha/Chai', 'ESLint/TSLint/Prettier', 'Mockito', 'Sonarcube'];


export { cv_es, cv_en, cv_fs_es };