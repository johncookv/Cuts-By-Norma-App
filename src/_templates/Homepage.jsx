import React, {Component} from 'react';
import Hero from '../components/Hero';

export default class Homepage extends Component {
	render() {
		return (
			<div className="container homepage">
				<div className="row">
					<div className="col">

						<Hero/>

						<h2>Goals and Objectivs</h2>
						<p className="lead">The foundation style guide objectives are to minimize variations so as to fall into the pit of success</p>

						<div className="row">
							<div className="col-md">

								<h3>For the Client</h3>
								<ul>
									<li>The Brand Marketer, Medical Legal Reviewer and IT Manager</li>
									<li>Meet client’s business needs</li>
									<li>Adhere to the brand guidelines</li>
									<li>Meets medical legal mandatories</li>
									<li>Consistency creates predictability to manage deadlines and outcomes</li>
								</ul>
							</div>

							<div className="col-md">
								<h3>For the End-User</h3>
								<ul>
									<li>The Patient and Healthcare Professional</li>
									<li>Usable and intuitive for end users
									</li>
									<li>Optimized for speed less than 3 second loading</li>
									<li>Optimized for SEO using semantic markup</li>
									<li>Consistency creates ease of use
									</li>
								</ul>
							</div>

							<div className="col-md">
								<h3>For You</h3>
								<ul>
									<li>The Designer, Developer, Account and Product Manager</li>
									<li>Facilitate early decision making to minimize extensive revisions later in the project</li>
									<li>Leverage reusable components and shared global elements for long term maintainability and scalability</li>
									<li>Consistency creates predictability to manage deadlines and outcomes</li>
								</ul>
							</div>
						</div>

						<hr />

						<h2>Benchmarks for Success</h2>
						<p className="lead">If we adhere to our above goals we should have minimum comments and revisions both from our clients and internally and we can measure our success by the following metrics.</p>
						<ul>
							<li>Gold Standard 2 to 5 comments of minor revisions in late stages of development</li>
							<li>Silver Standard 8 to 15 comments of minor revisions in late stages of development</li>
							<li>Bronze Standard 16 to 25 comments of minor revisions in late stages of development</li>
							<li>Unacceptable over 25 comments of minor revisions in late stages of development</li>
						</ul>

						<hr />

						<h2>Workflow</h2>
						<p className="lead">Weekly meetings with UI Designer and Developer through the life cycle of the project. Day 1 is planning in Jira end of the sprint is a reviewed.</p>
						<ul>
							<li><strong>Sprint 0 Planning and Setup:</strong> Infrature setup, <u>document requirements</u>. Then <u>establish a style guide</u> based on requirements then determine what wireframes and sitemaps are needed. Setup: Jira Boards, Staging and Production Servers, Version Control etc...</li>
							<li><strong>Sprint 1 Design UI:</strong> <u>Design mobile and desktop</u> templates based on requirements, code shell, and global styling </li>
							<li><strong>Sprint 2 Code Shell Components:</strong> <u>Build</u>, responsive header, main content area, footer, key functionally and complex modules that usually requires more time so that final content and art can be easily updated (Heros, Carousels, Backend Sign Up Forms ISI Tray etc, CTA, Micro interactions I)</li>
							<li><strong>Sprint 3 Content, Layout and Feature Freeze:</strong> With near finalized manuscript incorporate in design layout. We are in feature freeze. New functionality will be documented and marked for another phase.</li>
							<li><strong>Sprint 4 Main Development:</strong> <u>Flow in final manuscript and update art assets</u> leveraging established shell, developed components, design templates and style guide. Using the manuscript as primary source for content and design direction </li>
							<li><strong>Sprint 5 Review and Code Freeze:</strong> <u>Developed is halted</u> only to fix issues the product being Reviewed, QA, QC and Deploy to Production.</li>
						</ul>

	          <br />
	          <br />
	          <br />

				</div>
			</div>
		</div>)
	}
}
