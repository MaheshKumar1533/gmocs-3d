const Sponsors = () => {
	return (
		<div className="sponsors">
			<h2>Our Sponsors</h2>
			<hr />
			<div className="sponsor-logos">
				<div className="sponsor">
					<img src="/static/img/hasini.png" alt="Sponsor 2" />
                    <p>Sponsor</p>
				</div>
				<div className="sponsor">
					<img src="/static/img/arva.jpg" alt="Sponsor 1" style={{ width: '220px', height: 'auto'}} />
                    <p>Exclusive Sponsor</p>
				</div>
                <div className="sponsor">
                    <div className="sponsor-text">Sree Karunya Enterprises</div>
                    <p>Non-Technical Sponsor</p>
                </div>
			</div>
			<p>We are grateful for the support of our sponsors!</p>
		</div>
	);
};

export default Sponsors;
