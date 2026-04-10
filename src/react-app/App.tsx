import "./App.css";

const PROFILE_IMG = "/images/profile-formal.png";
const HERO_IMG = "/images/hero-event.png";

export default function App() {
	return (
		<div className="cv-page">
			<header className="cv-header">
				<div className="cv-header__glow" aria-hidden />
				<div className="cv-header__inner">
					<div className="cv-header__text">
						<p className="cv-eyebrow">Xin chào, mình là</p>
						<h1 className="cv-name">Nguyễn Minh Thuận</h1>
						<p className="cv-role">Backend Developer</p>
						<p className="cv-meta">
							<span className="cv-meta__item">Sinh ngày 09/03/2005</span>
							<span className="cv-meta__dot" aria-hidden />
							<span className="cv-meta__item">TP. Hồ Chí Minh</span>
						</p>
						<p className="cv-tagline">
							Fresher Backend — Spring Boot, Node.js, kiến trúc sạch &amp; SOLID.
						</p>
						<div className="cv-actions">
							<a
								className="cv-btn cv-btn--primary"
								href="mailto:nguoichoi623@gmail.com"
							>
								Liên hệ
							</a>
							<a
								className="cv-btn cv-btn--ghost"
								href="https://github.com/thuansama0"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
					<div className="cv-header__photo-wrap">
						<img
							src={PROFILE_IMG}
							alt="Nguyễn Minh Thuận"
							className="cv-header__photo"
							width={320}
							height={400}
						/>
					</div>
				</div>
			</header>

			<main className="cv-main">
				<section className="cv-section" aria-labelledby="about-heading">
					<h2 id="about-heading" className="cv-section__title">
						Giới thiệu
					</h2>
					<div className="cv-card">
						<p className="cv-prose">
							Mình đang tìm cơ hội làm <strong>Fresher Backend Developer</strong> để
							đóng góp phát triển hệ thống phần mềm. Mình đam mê xây dựng backend
							ổn định, luôn tìm hiểu công nghệ mới như Spring Boot và Node.js. Qua
							các dự án cá nhân, mình đã áp dụng Clean Architecture và nguyên tắc
							SOLID; mình mong tiếp tục phát triển kỹ năng trong môi trường chuyên
							nghiệp và mang lại giá trị cho đội nhóm.
						</p>
					</div>
				</section>

				<section className="cv-section cv-section--split" aria-labelledby="gallery-heading">
					<div className="cv-section__col">
						<h2 id="gallery-heading" className="cv-section__title">
							Hình ảnh
						</h2>
						<p className="cv-section__lead">
							Một khoảnh khắc tại workshop công nghệ blockchain — nơi mình học hỏi
							và kết nối cộng đồng dev.
						</p>
					</div>
					<div className="cv-gallery">
						<figure className="cv-gallery__figure">
							<img
								src={HERO_IMG}
								alt="Nguyễn Minh Thuận tại Sui Learning Tour, GDU"
								className="cv-gallery__img"
								width={900}
								height={600}
							/>
							<figcaption className="cv-gallery__cap">
								Sui Learning Tour — Blockchain Technology Workshop
							</figcaption>
						</figure>
					</div>
				</section>

				<section className="cv-section" aria-labelledby="achievements-heading">
					<h2 id="achievements-heading" className="cv-section__title">
						Thành tích
					</h2>
					<ul className="cv-list cv-list--achieve">
						<li>
							<strong>Giải Nhì</strong> Mammothon Hackathon Vietnam — chủ đề Celestia
							Blockchain (2025)
						</li>
						<li>
							<strong>Giải Nhì</strong> Fintech Hackathon Vietnam — chủ đề blockchain
							(2025)
						</li>
					</ul>
				</section>

				<section className="cv-section" aria-labelledby="skills-heading">
					<h2 id="skills-heading" className="cv-section__title">
						Kỹ năng kỹ thuật
					</h2>
					<div className="cv-skills-grid">
						<div className="cv-card cv-skill-block">
							<h3 className="cv-skill-block__title">Ngôn ngữ</h3>
							<div className="cv-tags">
								{["JavaScript", "C++", "Java", "PHP"].map((t) => (
									<span key={t} className="cv-tag">
										{t}
									</span>
								))}
							</div>
						</div>
						<div className="cv-card cv-skill-block">
							<h3 className="cv-skill-block__title">Backend &amp; CSDL</h3>
							<div className="cv-tags">
								{["Spring Boot", "Node.js", "SQL Server", "MySQL"].map((t) => (
									<span key={t} className="cv-tag">
										{t}
									</span>
								))}
							</div>
						</div>
						<div className="cv-card cv-skill-block">
							<h3 className="cv-skill-block__title">Công cụ</h3>
							<div className="cv-tags">
								{["Git", "GitHub", "Postman"].map((t) => (
									<span key={t} className="cv-tag">
										{t}
									</span>
								))}
							</div>
						</div>
						<div className="cv-card cv-skill-block cv-skill-block--wide">
							<h3 className="cv-skill-block__title">Kiến trúc &amp; nguyên tắc</h3>
							<div className="cv-tags">
								{[
									"Clean Architecture",
									"Decoupled Architecture",
									"OOP",
									"SOLID",
									"Design Patterns",
									"Factory",
									"DAO",
									"Observer",
									"DTO",
									"MVC",
								].map((t) => (
									<span key={t} className="cv-tag">
										{t}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="cv-section" aria-labelledby="soft-heading">
					<h2 id="soft-heading" className="cv-section__title">
						Kỹ năng mềm
					</h2>
					<div className="cv-soft-grid">
						<div className="cv-card">
							<h3 className="cv-skill-block__title">Giao tiếp &amp; hợp tác</h3>
							<ul className="cv-list">
								<li>Chủ động trao đổi, lắng nghe; nhận và đưa phản hồi xây dựng.</li>
								<li>Kinh nghiệm làm việc nhóm trong môi trường nhịp độ cao.</li>
							</ul>
						</div>
						<div className="cv-card">
							<h3 className="cv-skill-block__title">Tư duy &amp; chuyên nghiệp</h3>
							<ul className="cv-list">
								<li>Tư duy phân tích, giải quyết vấn đề; kiên trì khi debug hệ thống phức tạp.</li>
								<li>Tinh thần trách nhiệm, thích nghi nhanh với công nghệ và yêu cầu dự án.</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="cv-section" aria-labelledby="projects-heading">
					<h2 id="projects-heading" className="cv-section__title">
						Dự án cá nhân
					</h2>
					<div className="cv-projects">
						<article className="cv-card cv-project">
							<h3 className="cv-project__title">ShopCo — E-commerce Backend</h3>
							<ul className="cv-list">
								<li>
									Backend mở rộng cho nền tảng thương mại điện tử với Spring Boot và
									Neon (PostgreSQL).
								</li>
								<li>
									Clean Architecture: Use Case, DTO, Repository, Domain; REST API cho
									sản phẩm, danh mục, giỏ hàng, đơn hàng, người dùng.
								</li>
								<li>
									Xác thực JWT, phân quyền RBAC (Spring Security); Hibernate/JPA; Swagger/OpenAPI;
									kiểm thử JUnit/Mockito.
								</li>
							</ul>
						</article>
						<article className="cv-card cv-project">
							<h3 className="cv-project__title">
								Hệ thống quản lý sinh viên (đồ án nghiên cứu)
							</h3>
							<ul className="cv-list">
								<li>
									Nền tảng quản lý hồ sơ với Java Core và Spring MVC, tuân thủ MVC.
								</li>
								<li>Unit test JUnit/Mockito; tài liệu API Swagger/OpenAPI.</li>
							</ul>
						</article>
					</div>
				</section>

				<section className="cv-section cv-contact" aria-labelledby="contact-heading">
					<h2 id="contact-heading" className="cv-section__title">
						Liên hệ
					</h2>
					<div className="cv-card cv-contact__card">
						<ul className="cv-contact__list">
							<li>
								<span className="cv-contact__label">Điện thoại</span>
								<a href="tel:+84972597280">0972 597 280</a>
							</li>
							<li>
								<span className="cv-contact__label">Email</span>
								<a href="mailto:nguoichoi623@gmail.com">nguoichoi623@gmail.com</a>
							</li>
							<li>
								<span className="cv-contact__label">GitHub</span>
								<a href="https://github.com/thuansama0" target="_blank" rel="noreferrer">
									github.com/thuansama0
								</a>
							</li>
							<li>
								<span className="cv-contact__label">Địa chỉ</span>
								<span>527 Phạm Văn Chiêu, P.15, TP. Hồ Chí Minh</span>
							</li>
						</ul>
					</div>
				</section>
			</main>

			<footer className="cv-footer">
				<p>© {new Date().getFullYear()} Nguyễn Minh Thuận — CV trực tuyến</p>
			</footer>
		</div>
	);
}
