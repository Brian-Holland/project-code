import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Code Nodes</title>
				<meta
					name="description"
					content="CodeNodes is built by new engineers for new engineers. Gain experience building projects with a team by starting or finding a team, planning projects, building projects, and deploying the finished project to for experience or resume items."
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>
				<h1 className="app-title">Code Nodes</h1>
				<div className="features">
					<div>
						<i className="fas fa-users fa-2x" />
						<p>Start Or Join A Group</p>
					</div>
					<div>
						<i className="fas fa-edit fa-2x" />
						<p>Plan Projects</p>
					</div>

					<div>
						<i className="fas fa-hammer fa-2x " />
						<p>Build With A Team</p>
					</div>
					<div>
						<i className="fas fa-rocket fa-2x" />
						<p>Deploy Projects</p>
					</div>
					<div>
						<i className="fas fa-share-alt fa-2x" />
						<p>Share With Community</p>
					</div>
					<div>
						<i className="fas fa-comments fa-2x" />
						<p>Receive Feedback</p>
					</div>
				</div>
				<div className="launch">
					<p>Launching Summer 2021</p>
				</div>
			</main>
		</div>
	);
}
