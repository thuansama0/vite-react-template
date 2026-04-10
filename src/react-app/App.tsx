import { useEffect } from "react";
import "./App.css";

const PROFILE_IMG = "/images/profile-formal.png";
const HERO_BG_IMG = "/images/hero-portrait-final.png";
const MOMENT_GROUPS: {
	title: string;
	description: string;
	photos: { src: string; alt: string; caption: string }[];
}[] = [
	{
		title: "Fintech Hackathon Vietnam",
		description:
			"Những khoảnh khắc áo trắng tại Fintech Hackathon Vietnam - môi trường thi đấu và học hỏi thực chiến.",
		photos: [
			{
				src: "/images/hackathon-team-1.png",
				alt: "Team nhận giải tại Fintech Blockchain Hackathon Vietnam",
				caption: "Fintech Hackathon Vietnam - Team AI-PRO",
			},
			{
				src: "/images/hackathon-awards.png",
				alt: "Khoảnh khắc nhận giải tại Fintech Hackathon Vietnam",
				caption: "Khoanh khac trao giai tai Fintech Hackathon Vietnam",
			},
			{
				src: "/images/auditorium-team.png",
				alt: "Khong khi hoi truong tai Fintech Hackathon Vietnam",
				caption: "Khong khi su kien va ket noi cong dong dev",
			},
		],
	},
	{
		title: "Mammothon Hackathon Vietnam",
		description:
			"Một số khoảnh khắc tại workshop cong nghe blockchain (ao xanh) - nơi minh hoc hoi va ket noi cong dong dev.",
		photos: [
			{
				src: "/images/mammothon-moment-1.png",
				alt: "Doi thi ao xanh nhan giai tai Mammothon Hackathon Vietnam",
				caption: "Mammothon Hackathon Vietnam - khoanh khac nhan giai",
			},
			{
				src: "/images/mammothon-moment-2.png",
				alt: "Team ao xanh tai san khau Mammothon Hackathon Vietnam",
				caption: "Mammothon Hackathon Vietnam - workshop cong nghe blockchain",
			},
			{
				src: "/images/sui-gaming-team.png",
				alt: "Team tai su kien cong dong blockchain",
				caption: "Khoanh khac ket noi cong dong dev",
			},
		],
	},
	{
		title: "Workshop & Hoat dong cong dong",
		description:
			"Nhung hoat dong workshop va networking minh tham gia de mo rong kien thuc va ket noi voi cong dong dev.",
		photos: [
			{
				src: "/images/workshop-activity-1.png",
				alt: "Khoanh khac giao luu tai workshop cong dong",
				caption: "Workshop networking - giao luu va hoc hoi",
			},
			{
				src: "/images/workshop-activity-2.png",
				alt: "Khoanh khac trong buoi workshop cong nghe",
				caption: "Workshop break - trao doi kinh nghiem",
			},
			{
				src: "/images/workshop-activity-3.png",
				alt: "Chan dung tai khong gian workshop",
				caption: "Chan dung tai su kien workshop",
			},
		],
	},
];

const TECH_GROUPS: { label: string; items: string[] }[] = [
	{ label: "Ngôn ngữ", items: ["JavaScript", "C++", "Java", "PHP"] },
	{ label: "Backend & CSDL", items: ["Spring Boot", "Node.js", "SQL Server", "MySQL"] },
	{ label: "Công cụ", items: ["Git", "GitHub", "Postman"] },
	{
		label: "Kiến trúc & nguyên tắc",
		items: [
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
		],
	},
];

export default function App() {
	useEffect(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const revealEls = document.querySelectorAll<HTMLElement>(".cv-reveal");

		if (reduced.matches) {
			revealEls.forEach((el) => el.classList.add("cv-reveal--shown"));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("cv-reveal--shown");
						io.unobserve(entry.target);
					}
				}
			},
			{ rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
		);

		revealEls.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);

	return (
		<div className="cv-page">
			<header className="cv-header">
				<div className="cv-header__glow" aria-hidden />
				<div className="cv-header__noise" aria-hidden />
				<div className="cv-topbar cv-reveal">
					<span className="cv-topbar__prompt" aria-hidden>
						&gt;{" "}
					</span>
					<span className="cv-topbar__path">cv.thuan</span>
					<span className="cv-topbar__sep" aria-hidden>
						{" "}
						·{" "}
					</span>
					<span className="cv-topbar__meta">v1.0</span>
					<span className="cv-topbar__sep" aria-hidden>
						{" "}
						·{" "}
					</span>
					<time className="cv-topbar__meta" dateTime="2005-03-09">
						09.03.2005
					</time>
				</div>
				<div className="cv-hero-intro cv-reveal">
					<a className="cv-hero-chip" href="#contact-heading">
						OPEN TO WORK
					</a>
					<a className="cv-hero-chip cv-hero-chip--ghost" href="#projects-heading">
						OPEN TO PROJECTS
					</a>
				</div>
				<div
					className="cv-hero-title cv-reveal"
					style={{ backgroundImage: `url(${HERO_BG_IMG})` }}
				>
					<h2 className="cv-hero-title__text">THUAN SAMA</h2>
					<p className="cv-hero-title__sub">Backend Developer Portfolio</p>
				</div>

				<div className="cv-header__inner cv-reveal">
					<div className="cv-header__text">
						<p className="cv-eyebrow">
							<span className="cv-mono cv-eyebrow__gt" aria-hidden>
								&gt;{" "}
							</span>
							Xin chào, mình là
						</p>
						<h1 className="cv-name">
							<span className="cv-name__line">Nguyễn Minh</span>
							<span className="cv-name__line cv-name__line--accent">Thuận</span>
						</h1>
						<p className="cv-role-stack">
							<span className="cv-role-stack__main">Backend</span>
							<span className="cv-role-stack__sub">Developer</span>
						</p>
						<p className="cv-locale">
							<span>TP. Hồ Chí Minh</span>
							<span className="cv-locale__dot" aria-hidden />
							<span>Fresher</span>
							<span className="cv-locale__dot" aria-hidden />
							<span className="cv-mono cv-locale__coord" title="Gần đúng tọa độ TP.HCM">
								10.8231° N, 106.6297° E
							</span>
						</p>
						<p className="cv-tagline">
							Spring Boot, Node.js — Clean Architecture &amp; SOLID.
						</p>
						<p className="cv-status">
							<span className="cv-status__dot" aria-hidden />
							<span>Đang tìm cơ hội Fresher Backend</span>
						</p>
						<div className="cv-actions">
							<a
								className="cv-btn cv-btn--primary"
								href="mailto:nguoichoi623@gmail.com"
							>
								Gửi email
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

			<hr className="cv-rule cv-reveal" />

			<main className="cv-main">
				<section className="cv-section cv-reveal" aria-labelledby="about-heading">
					<div className="cv-section__head">
						<span className="cv-section__num">01</span>
						<h2 id="about-heading" className="cv-section__title">
							Đôi điều về mình
						</h2>
					</div>
					<div className="cv-card cv-card--flat">
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

				<hr className="cv-rule cv-reveal" />

				<section
					className="cv-section cv-section--split cv-reveal"
					aria-labelledby="gallery-heading"
				>
					<div className="cv-section__col">
						<div className="cv-section__head">
							<span className="cv-section__num">02</span>
							<h2 id="gallery-heading" className="cv-section__title">
								Hình ảnh
							</h2>
						</div>
						<p className="cv-section__lead">
							Các khoảnh khắc được chia theo sự kiện/workshop để dễ theo dõi hành trình
							học hỏi và hoạt động của mình.
						</p>
					</div>
					<div className="cv-moments cv-moments--alt">
						{MOMENT_GROUPS.map((group) => (
							<article className="cv-moment" key={group.title}>
								<h3 className="cv-moment__title">{group.title}</h3>
								<p className="cv-moment__desc">{group.description}</p>
								<figure className="cv-moment__hero">
									<img
										src={group.photos[0].src}
										alt={group.photos[0].alt}
										className="cv-gallery__img cv-gallery__img--hero"
										loading="lazy"
									/>
									<figcaption className="cv-gallery__cap">
										{group.photos[0].caption}
									</figcaption>
								</figure>
								<div className="cv-moment__thumbs">
									{group.photos.slice(1).map((photo) => (
										<figure key={photo.src} className="cv-gallery__tile cv-gallery__tile--thumb">
											<img
												src={photo.src}
												alt={photo.alt}
												className="cv-gallery__img cv-gallery__img--thumb"
												loading="lazy"
											/>
										</figure>
									))}
								</div>
							</article>
						))}
					</div>
				</section>

				<hr className="cv-rule cv-reveal" />

				<section className="cv-section cv-reveal" aria-labelledby="achievements-heading">
					<div className="cv-section__head">
						<span className="cv-section__num">03</span>
						<h2 id="achievements-heading" className="cv-section__title">
							Thành tích
						</h2>
					</div>
					<ul className="cv-timeline cv-timeline--compact">
						<li className="cv-timeline__item">
							<span className="cv-timeline__year">2025</span>
							<div className="cv-timeline__body">
								<p className="cv-timeline__title">
									<strong>Giải Nhì</strong> — Mammothon Hackathon Vietnam
								</p>
								<p className="cv-timeline__desc">Chủ đề Celestia Blockchain.</p>
							</div>
						</li>
						<li className="cv-timeline__item">
							<span className="cv-timeline__year">2025</span>
							<div className="cv-timeline__body">
								<p className="cv-timeline__title">
									<strong>Giải Nhì</strong> — Fintech Hackathon Vietnam
								</p>
								<p className="cv-timeline__desc">Chủ đề blockchain.</p>
							</div>
						</li>
					</ul>
				</section>

				<hr className="cv-rule cv-reveal" />

				<section className="cv-section cv-reveal" aria-labelledby="skills-heading">
					<div className="cv-section__head">
						<span className="cv-section__num">04</span>
						<h2 id="skills-heading" className="cv-section__title">
							Tech stack
						</h2>
					</div>
					<p className="cv-section__lead cv-section__lead--tight">
						Công cụ và nguyên tắc mình thường xuyên sử dụng trong dự án.
					</p>
					<div className="cv-tech">
						{TECH_GROUPS.map((g) => (
							<div key={g.label} className="cv-tech__group">
								<p className="cv-tech__label cv-mono">{g.label}</p>
								<div className="cv-tags cv-tags--bracket">
									{g.items.map((t) => (
										<span key={t} className="cv-tag cv-tag--bracket">
											{t}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				<hr className="cv-rule cv-reveal" />

				<section className="cv-section cv-reveal" aria-labelledby="soft-heading">
					<div className="cv-section__head">
						<span className="cv-section__num">05</span>
						<h2 id="soft-heading" className="cv-section__title">
							Kỹ năng mềm
						</h2>
					</div>
					<div className="cv-soft-grid">
						<div className="cv-card cv-card--flat">
							<h3 className="cv-skill-block__title">Giao tiếp &amp; hợp tác</h3>
							<ul className="cv-list">
								<li>Chủ động trao đổi, lắng nghe; nhận và đưa phản hồi xây dựng.</li>
								<li>Kinh nghiệm làm việc nhóm trong môi trường nhịp độ cao.</li>
							</ul>
						</div>
						<div className="cv-card cv-card--flat">
							<h3 className="cv-skill-block__title">Tư duy &amp; chuyên nghiệp</h3>
							<ul className="cv-list">
								<li>Tư duy phân tích, giải quyết vấn đề; kiên trì khi debug hệ thống phức tạp.</li>
								<li>Tinh thần trách nhiệm, thích nghi nhanh với công nghệ và yêu cầu dự án.</li>
							</ul>
						</div>
					</div>
				</section>

				<hr className="cv-rule cv-reveal" />

				<section className="cv-section cv-reveal" aria-labelledby="projects-heading">
					<div className="cv-section__head">
						<span className="cv-section__num">06</span>
						<h2 id="projects-heading" className="cv-section__title">
							Dự án
						</h2>
					</div>
					<ul className="cv-timeline">
						<li className="cv-timeline__item">
							<span className="cv-timeline__year cv-mono">—</span>
							<div className="cv-timeline__body">
								<p className="cv-timeline__title">ShopCo — E-commerce Backend</p>
								<p className="cv-timeline__desc">
									Backend mở rộng với Spring Boot và Neon (PostgreSQL). Clean
									Architecture; REST API sản phẩm, danh mục, giỏ, đơn, user. JWT +
									RBAC; Swagger; JUnit/Mockito.
								</p>
							</div>
						</li>
						<li className="cv-timeline__item">
							<span className="cv-timeline__year cv-mono">—</span>
							<div className="cv-timeline__body">
								<p className="cv-timeline__title">
									Hệ thống quản lý sinh viên (đồ án nghiên cứu)
								</p>
								<p className="cv-timeline__desc">
									Java Core &amp; Spring MVC, MVC nghiêm ngặt; JUnit/Mockito; Swagger/OpenAPI.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<hr className="cv-rule cv-reveal" />

				<section
					className="cv-section cv-contact cv-reveal"
					aria-labelledby="contact-heading"
				>
					<div className="cv-section__head">
						<span className="cv-section__num">07</span>
						<h2 id="contact-heading" className="cv-section__title">
							Liên hệ
						</h2>
					</div>
					<div className="cv-card cv-card--flat cv-contact__card">
						<ul className="cv-contact__list">
							<li>
								<span className="cv-contact__label">
									<span className="cv-contact__icon" aria-hidden>
										📞
									</span>
									Điện thoại
								</span>
								<a href="tel:+84972597280">0972 597 280</a>
							</li>
							<li>
								<span className="cv-contact__label">
									<span className="cv-contact__icon" aria-hidden>
										✉️
									</span>
									Email
								</span>
								<a href="mailto:nguoichoi623@gmail.com">nguoichoi623@gmail.com</a>
							</li>
							<li>
								<span className="cv-contact__label">
									<span className="cv-contact__icon" aria-hidden>
										📘
									</span>
									Facebook
								</span>
								<a
									href="https://www.facebook.com/nguyen.minh.thuan.630946"
									target="_blank"
									rel="noreferrer"
								>
									facebook.com/nguyen.minh.thuan.630946
								</a>
							</li>
							<li>
								<span className="cv-contact__label">
									<span className="cv-contact__icon" aria-hidden>
										🐙
									</span>
									GitHub
								</span>
								<a href="https://github.com/thuansama0" target="_blank" rel="noreferrer">
									github.com/thuansama0
								</a>
							</li>
							<li>
								<span className="cv-contact__label">
									<span className="cv-contact__icon" aria-hidden>
										📍
									</span>
									Địa chỉ
								</span>
								<span>527 Phạm Văn Chiêu, P.15, TP. Hồ Chí Minh</span>
							</li>
						</ul>
					</div>
				</section>
			</main>

			<hr className="cv-rule cv-rule--footer cv-reveal" />

			<footer className="cv-footer cv-reveal">
				<div className="cv-footer__brand" aria-hidden>
					<span>N</span>
					<span>M</span>
					<span>T</span>
				</div>
				<p className="cv-footer__kicker cv-mono">&gt; let&apos;s connect</p>
				<p className="cv-footer__headline">Cùng làm việc nhé</p>
				<a className="cv-footer__cta" href="mailto:nguoichoi623@gmail.com">
					Gửi email
				</a>
				<p className="cv-footer__copy">
					© {new Date().getFullYear()} Nguyễn Minh Thuận — tham khảo layout từ{" "}
					<a
						href="https://www.sananes.co/"
						target="_blank"
						rel="noreferrer"
						className="cv-footer__link"
					>
						sananes.co
					</a>
				</p>
			</footer>
		</div>
	);
}
