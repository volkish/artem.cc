import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import artemIvanovLogo from './images/artem-ivanov.jpg';
import { INDIVIDUAL_PROJECTS, SHORT_TERM_PROJECTS, LONG_TERM_PROJECTS } from './projects';

const Project = (props) => {
	return (
		<article className="mb-1 row">
			{props.period ?
				<div className="h4 d-none d-lg-block col-lg-3">
					<small className="text-muted">({props.period.join(' - ')})</small>
				</div> : null
			}
			<div className="col">
				<h4>{props.title} {props.period ? <small
					className="d-lg-none text-muted">({props.period.join(' - ')})</small> : null}</h4>
				<p><em>{props.position}</em></p>
				<p dangerouslySetInnerHTML={{ __html: props.description }}></p>
				{props.technologies ? (
					<React.Fragment>
						<p>Used technologies:</p>
						<ul>
							{props.technologies.map((technology) => {
								return <li>{technology}</li>;
							})}
						</ul>
					</React.Fragment>
				) : null}
			</div>
		</article>
	);
};

const SectionHeader = ({ children }) => <h2 className="mt-5 mb-4">{children}</h2>;
const Header = ({ children }) => <h3 className="my-4">{children}</h3>;

class App extends Component {
	render () {
		const fullAccess = '#extended' === window.location.hash;

		return (
			<div className="container pt-5">
				<Helmet>
					<title>Artem Ivanov. Full-Stack Web Developer</title>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
					<meta name="msapplication-TileColor" content="#da532c"/>
					<meta name="theme-color" content="#ffffff"/>
				</Helmet>

				<section className="d-flex align-items-center flex-column">
					<img src={artemIvanovLogo} alt="Artem Ivanov" className="rounded-circle"/>

					<h1 className="text-center pt-5">
						Artem Ivanov
					</h1>

					<address className="text-muted pb-4">
						Full-Stack Web Developer
					</address>
				</section>

				<section>
					Location: Russia, Moscow<br/>
					Email: ai@artem.cc<br/>
					Skype: artem.cc
				</section>

				<section>
					<SectionHeader>KEY SKILLS</SectionHeader>
					<ul>
						<li>Approx. 13 years of strong experience in Web Development</li>
						<li>Highly proficient with PHP and JavaScript</li>
						<li>Highly proficient with Laravel Framework</li>
						<li>Proficient with React and React Native</li>
						<li>Very well experienced in CSS, HTML</li>
						<li>Familiar with Redmine, Gitlab</li>
						<li>Familiar with Ruby + Rails, Python</li>
						<li>Successfully led a small team and completed verification on time</li>
						<li>Willing to adopt a new approach and methodology for problem-solving</li>
						<li>Played the key role in four successful projects</li>
					</ul>
				</section>

				<section className="pb-5">
					<SectionHeader>PROFESSIONAL EXPERIENCE</SectionHeader>
					<Header>Individual projects</Header>
					{INDIVIDUAL_PROJECTS.map((project, index) => {
						if (project.full && !fullAccess) {
							return null;
						}

						return <Project key={`${index}-${project.title}`} {...project}/>;
					})}

					<Header>Long-term projects</Header>
					{LONG_TERM_PROJECTS.map((project, index) => {
						return <Project key={`${index}-${project.title}`} {...project}/>;
					})}

					{fullAccess ?
						<React.Fragment>
							<Header>Short-term projects</Header>
							{SHORT_TERM_PROJECTS.map((project, index) => {
								return <Project key={`${index}-${project.title}`} {...project}/>;
							})}
						</React.Fragment> : null
					}
				</section>
			</div>
		);
	}
}

export default App;
