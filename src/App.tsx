import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import ContactPage from "./ContactPage";
import "./App.css";
import logoImg from "../images/transparent_logo.svg";
import heroImg from "../images/burek_hero_photo.jpg";
import wholesaleImg from "../images/zeljanica_photo.jpg";
import productsImg from "../images/apple_swirl_photo.jpg";
import beefSwirlImg from "../images/beef_swirl.jpg";
import backLogoImg from "../images/back_logo.png";
import gfsImg from "../images/gfs_stock.png";
import walmartNewsImg from "../images/walmart_freezer.png";
import walmartFreezer from "../images/walmart_news.png";
import longPhoto from "../images/long_photo.png";
import meijerPhoto from "../images/meijer_photo.png";

/* ============================================================
   NAV
   ============================================================ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function goToSection(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <img src={logoImg} alt="Burek Etc." className="nav__logo-img" />
        </Link>

        <div className={`nav__links${open ? " nav__links--open" : ""}`}>
          <button onClick={() => goToSection("about")}>About Us</button>
          <Link to="/contact" onClick={() => setOpen(false)}>Wholesale</Link>
          <button onClick={() => goToSection("products")}>Products</button>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <a
            href="https://bureketc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
            onClick={() => setOpen(false)}
          >
            Order Online
          </a>
        </div>

        <button
          className={`nav__burger${open ? " nav__burger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__tag">Handcrafted · Oven-Ready · Bosnian</span>

        <h1 className="hero__heading">
          A TASTE
          <br />
          OF <span className="hero__heading-red">BOSNIA,</span>
          <br />
          BAKED
          <br />
          FOR TODAY.
        </h1>

        <p className="hero__sub">
          Our oven-ready swirls and bites bring the rich flavors of Bosnian
          tradition to busy kitchens everywhere.
        </p>

        <div className="hero__actions">
          <a href="#products" className="btn btn--red">
            View Bites &amp; Swirls →
          </a>
          <a href="#about" className="btn btn--outline">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__circle" />
        <div className="hero__circle-outline" />
        <img
          src={heroImg}
          alt="Assorted Burek Etc. pastries"
          className="hero__img"
        />
      </div>
    </section>
  );
}

/* ============================================================
   AS SEEN IN
   ============================================================ */

const RETAILERS = [
  "Meijer",
  "Walmart",
  "Bridge Street Market",
  "Gordon Food Service Store",
  "Meijer",
  "Walmart",
  "Bridge Street Market",
  "Gordon Food Service Store",
];

function SeenIn() {
  return (
    <section className="seen-in">
      <div className="seen-in__inner">
        <span className="seen-in__label">As seen in</span>
        <div className="seen-in__track-wrap" aria-hidden="true">
          {/* Two copies of the track for seamless looping */}
          {[0, 1].map((copy) => (
            <div key={copy} className="seen-in__track">
              {RETAILERS.map((name, i) => (
                <span key={i} className="seen-in__name">
                  {name}
                  <span className="seen-in__sep">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SEASONAL BANNER
   ============================================================ */

// function SeasonalBanner() {
//   return (
//     <section className="seasonal">
//       <div className="seasonal__inner">
//         <span className="seasonal__dot">◆</span>
//         <p className="seasonal__text">
//           Proud Vendor at This Year's <strong>Christkindl Markt!</strong>
//         </p>
//         <span className="seasonal__dot">◆</span>
//       </div>
//     </section>
//   );
// }

/* ============================================================
   FIND SECTION
   ============================================================ */

const FIND_ITEMS = [
  {
    label: "Wholesale",
    href: "/contact",
    desc: "Stock your shelves every week",
    src: wholesaleImg,
  },
  {
    label: "Products",
    href: "#products",
    desc: "Explore our full lineup",
    src: productsImg,
  },
  {
    label: "About Us",
    href: "#about",
    desc: "Our story & Balkan heritage",
    src: backLogoImg,
  },
  {
    label: "Order Online",
    href: "https://bureketc.square.site/",
    desc: "",
    src: beefSwirlImg,
  },
];

function FindSection() {
  return (
    <section className="find" id="products">
      <div className="find__container">
        <div className="find__header">
          <span className="find__eyebrow">Navigation</span>
          <h2 className="find__heading">
            FIND WHAT
            <br />
            <em>YOU'RE</em>
            <br />
            LOOKING
            <br />
            FOR.
          </h2>
        </div>

        <div className="find__grid">
          {FIND_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="find__card"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.src !== null && (
                <img
                  className="find__card-img"
                  src={item.src || undefined}
                  alt={item.label}
                />
              )}
              <div className="find__card-body">
                <span className="find__card-title">{item.label}</span>
                <span className="find__card-desc">{item.desc}</span>
                <span className="find__card-arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INSTAGRAM FEED
   Powered by Behold.so — https://behold.so
   ============================================================ */

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": { "feed-id": string };
    }
  }
}

const BEHOLD_FEED_ID = "fVysz7oAZbTckQaXsZlL";

function InstagramFeed() {
  useEffect(() => {
    if (document.querySelector("script[data-behold]")) return;
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    script.dataset.behold = "true";
    document.head.appendChild(script);
  }, []);

  return (
    <section className="instagram">
      <div className="instagram__inner">
        <div className="instagram__header">
          <div className="instagram__meta">
            <span className="instagram__eyebrow">Follow Along</span>
            <h2 className="instagram__heading">@burek_etc</h2>
          </div>
          <a
            href="https://www.instagram.com/burek_etc/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram__follow"
          >
            Follow on Instagram →
          </a>
        </div>

        <behold-widget feed-id={BEHOLD_FEED_ID} />
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__content">
          <span className="about__eyebrow">About Burek Etc.</span>

          <h2 className="about__heading">
            MORE THAN
            <br />
            JUST
            <br />
            PASTRIES.
          </h2>

          <p className="about__body">
            Our swirls and bites are a delicious, oven-ready way to experience
            the bold, comforting flavors of Balkan tradition — made with love,
            ready in minutes.
          </p>

          <a href="#about" className="about__link">
            Learn More →
          </a>
        </div>
        {/* 5-image collage: tall portrait left + 2×2 grid right */}
        <div className="about__collage">
          <img
            className="about__collage-img about__collage-img--main"
            alt="About image 1 — main"
            src={longPhoto}
          />
          <img
            className="about__collage-img"
            alt="About image 2"
            src={walmartNewsImg}
          />
          <img
            className="about__collage-img"
            alt="About image 3"
            src={walmartFreezer}
          />
          <img
            className="about__collage-img"
            alt="About image 4"
            src={gfsImg}
          />
          <img
            className="about__collage-img"
            alt="About image 5"
            src={meijerPhoto}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        {/* Brand column */}
        <div className="footer__brand">
          <img src={logoImg} alt="Burek Etc." className="footer__logo" />
          <p className="footer__tagline">A Taste of Bosnia, Baked for Today.</p>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/p/Burek-etc-61554870032231/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/burek_etc/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Links column */}
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#wholesale">Wholesale</a>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__contact">
            <p className="footer__contact-line">3281 Kentland Ct SE</p>
            <p className="footer__contact-line">Grand Rapids, MI 49548</p>
            <a href="tel:6163301030" className="footer__contact-link">
              (616) 330-1030
            </a>
            <a
              href="mailto:burek@bureketc.com"
              className="footer__contact-link"
            >
              burek@bureketc.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>@2025 Burek Etc. | All Rights Reserved</p>
      </div>
    </footer>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const id = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!id) return;
    const NAV_HEIGHT = 80;
    const attempt = (tries: number) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    // Wait for page to fully render before measuring
    setTimeout(() => attempt(10), 200);
  }, [location.state]);

  return (
    <>
      <main>
        <Hero />
        <SeenIn />
        <FindSection />
        <InstagramFeed />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
