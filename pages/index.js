import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Code Nodes</title>
				<meta
					name="description"
					content="CodeNodes helps newer engineers gain experience by finding or starting a team, planning projects, building projects, and deploying the finished project for experience or resume items."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://codenodes.com" />
				<meta property="og:title" content="CodeNodes" />
				<meta
					property="og:description"
					content="CodeNodes helps newer engineers gain experience by finding or starting a team, planning projects, building projects, and deploying the finished project for experience or resume items."
				/>
				<meta property="og:image" content="https://codenodes.com/imgs/codenodes.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:alt" content="View of user dashboard" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://codenodes.com/" />
				<meta property="twitter:title" content="CodeNodes" />
				<meta
					property="twitter:description"
					content="CodeNodes helps newer engineers gain experience by finding or starting a team, planning projects, building projects, and deploying the finished project for experience or resume items."
				/>
				<meta property="twitter:image" content="https://codenodes.com/imgs/codenodes.png" />

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
