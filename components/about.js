class about extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="container">

				<!-- section title -->
				<h2 class="section-title wow fadeInUp">About Me</h2>

				<div class="spacer" data-height="60"></div>

				<div class="row">

					<div class="col-md-3">
						<div class="text-center text-md-left">
							<!-- avatar image -->
							<img src="/images/ram.png" class="img-fluid rounded" alt="Ram" />
						</div>
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>

					<div class="col-md-9 triangle-left-md triangle-top-sm">
						<div class="rounded bg-white shadow-dark padding-30">
							<div class="row">
								<div class="col-md-12">
									<!-- about text -->
									<p class="">Hello! I'm a versatile Full Stack Developer experienced in web development and cloud technologies. I specialize in creating dynamic applications using HTML, CSS, JavaScript, and React. I also have a strong understanding of cloud platforms like AWS, where I utilize infrastructure-as-code, containerization, and serverless computing. With expertise in Agile methodologies, I collaborate with cross-functional teams to deliver innovative solutions that align with business goals. Let's connect and explore how my combined skills in full stack development and cloud computing can contribute to your organization's success.I am also good at WordPress.</p>
									<div class="mt-3">
										<a href="/doc/Ram-Resume.pdf" target="_blank" class="btn btn-default">Download
											CV</a>
									</div>
									<div class="spacer d-md-none d-lg-none" data-height="30"></div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<!-- row end -->

				<div class="spacer" data-height="70"></div>

				<div class="row">

					<div class="col-md-6 col-sm-6">
						<!-- fact item -->
						<div class="fact-item">
							<span class="icon icon-fire"></span>
							<div class="details">
								<h3 class="mb-0 mt-0 number"><em class="count">20</em>+</h3>
								<p class="mb-0">Projects completed</p>
							</div>
						</div>
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>

					<div class="col-md-6 col-sm-6">
						<!-- fact item -->
						<div class="fact-item">
							<span class="icon icon-people"></span>
							<div class="details">
								<h3 class="mb-0 mt-0 number"><em class="count">7</em>+</h3>
								<p class="mb-0">Satisfied clients</p>
							</div>
						</div>
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>


				</div>

			</div>
        `
    }
};

customElements.define('app-about', about);