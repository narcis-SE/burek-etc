import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import pkgZeljanicaSwirl from "../images/packaging/zeljanica-swirl-front.jpg";
import pkgSirnicaSwirl from "../images/packaging/sirnica-swirl-front.jpg";
import pkgBurekSwirl from "../images/packaging/burek-swirl-front.jpg";
import pkgKrompirusaSwirl from "../images/packaging/krompirusa-swirl-front.jpg";
import pkgAppleSwirl from "../images/packaging/apple-swirl-front.jpg";
import pkgZeljanicaBites from "../images/packaging/zeljanica-bites-front.jpg";
import pkgCheeseBites from "../images/packaging/cheese-bites-front.jpg";
import pkgBurekBites from "../images/packaging/burek-bites-front.jpg";
import pkgKrompirusaBites from "../images/packaging/krompirusa-bites-front.jpg";
import pkgAppleBites from "../images/packaging/apple-bites-front.jpg";
import pkgZeljanicaBack from "../images/packaging/zeljanica-back.jpg";
import pkgSirnicaBack from "../images/packaging/sirnica-back.jpg";
import pkgBurekSwirlBack from "../images/packaging/burek-swirl-back.jpg";
import pkgBurekBitesBack from "../images/packaging/burek-bite-back-v2.jpg";
import pkgKrompirusaBack from "../images/packaging/krompirusa-back.jpg";
import pkgAppleBack from "../images/packaging/apple-back.jpg";
import nlZeljanica from "../images/nutrition_labels/zeljanica-nutrition-label.jpg";
import nlSirnica from "../images/nutrition_labels/sirnica-nutrition-label.jpg";
import nlBurek from "../images/nutrition_labels/burek-beef-nutrition-label.jpg";
import nlKrompirusa from "../images/nutrition_labels/krompirusa-nutrition-label.jpg";
import nlApple from "../images/nutrition_labels/apple-nutrition-label.jpg";
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
          <Link to="/contact" onClick={() => setOpen(false)}>
            Wholesale
          </Link>
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
  const navigate = useNavigate();

  function goToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

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
          <button onClick={() => goToSection("products")} className="btn btn--red">
            View Bites &amp; Swirls →
          </button>
          <button
            onClick={() => goToSection("about")}
            className="btn btn--outline"
          >
            Our Story
          </button>
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
  const navigate = useNavigate();

  function goToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  function renderCard(item: (typeof FIND_ITEMS)[number]) {
    const inner = (
      <>
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
      </>
    );

    if (item.href.startsWith("http")) {
      return (
        <a
          key={item.label}
          href={item.href}
          className="find__card"
          target="_blank"
          rel="noopener noreferrer"
        >
          {inner}
        </a>
      );
    }
    if (item.href.startsWith("#")) {
      return (
        <button
          key={item.label}
          onClick={() => goToSection(item.href.slice(1))}
          className="find__card"
        >
          {inner}
        </button>
      );
    }
    return (
      <Link key={item.label} to={item.href} className="find__card">
        {inner}
      </Link>
    );
  }

  return (
    <section className="find">
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
          {FIND_ITEMS.map((item) => renderCard(item))}
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
            Burek Etc. was born from a dream carried across an ocean. Our
            founder arrived in America with a goal: bring back the taste of
            home. The smell of burek baking in the early morning. The warmth of
            a kitchen that felt like belonging.
          </p>

          <p className="about__body">
            Rebuilding life in Michigan as a refugee, that dream never faded.
            What if everyone could experience that comfort? So we started
            folding, layering, and baking. One tray at a time. One store at a
            time.
          </p>

          <p className="about__body">
            Today, Burek Etc. is stocked across the Midwest and the recipe
            hasn't changed. Still handcrafted. Still oven-ready. Still a little
            piece of Bosnia, baked for everyone.
          </p>
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
   PRODUCTS
   ============================================================ */

const PRODUCT_BASE = [
  {
    id: "zeljanica",
    name: "Zeljanica",
    subtitle: "Spinach & Cheese",
    description:
      "Traditional Bosnian pita featuring hand-stretched, multi-layered phyllo dough. Filled with a savory blend of Feta and Ricotta cheeses mixed with fresh Spinach. Hand-rolled to ensure a crisp exterior and tender, layered interior.",
    swirlImg: pkgZeljanicaSwirl,
    bitesImg: pkgZeljanicaBites,
    backImg: pkgZeljanicaBack,
    nutritionImg: nlZeljanica,
  },
  {
    id: "sirnica",
    name: "Sirnica",
    subtitle: "Cheese",
    description:
      "A classic vegetarian staple. This handmade pastry utilizes dozens of thin phyllo layers to encase a balanced Feta and Ricotta cheese blend. Salted to profile and baked until the pastry achieves a golden, flaky texture.",
    swirlImg: pkgSirnicaSwirl,
    bitesImg: pkgCheeseBites,
    backImg: pkgSirnicaBack,
    nutritionImg: nlSirnica,
  },
  {
    id: "burek",
    name: "Burek",
    subtitle: "Beef",
    description:
      'The authentic "Burek." Comprised of lean Beef, sautéed Onions, and a traditional Bosnian spice profile. The meat is folded into handmade dough, creating a dense, savory filling within light, concentric layers of pastry. Halal options are available.',
    swirlImg: pkgBurekSwirl,
    bitesImg: pkgBurekBites,
    backImg: pkgBurekSwirlBack,
    bitesBackImg: pkgBurekBitesBack,
    nutritionImg: nlBurek,
  },
  {
    id: "krompirusa",
    name: "Krompirusa",
    subtitle: "Potato",
    description:
      "A traditional vegan-friendly option (Krompiruša). Features diced Potatoes seasoned with Onions, black pepper, and salt. The starch provides a soft contrast to the crisp, hand-worked phyllo dough layers.",
    swirlImg: pkgKrompirusaSwirl,
    bitesImg: pkgKrompirusaBites,
    backImg: pkgKrompirusaBack,
    nutritionImg: nlKrompirusa,
  },
  {
    id: "apple",
    name: "Apple",
    subtitle: "Sweet",
    description:
      "A sweet dessert pastry. Prepared with fresh Michigan Apples and Cinnamon, wrapped in signature handmade phyllo. The tartness of the local fruit complements the flaky, many-layered crust.",
    swirlImg: pkgAppleSwirl,
    bitesImg: pkgAppleBites,
    backImg: pkgAppleBack,
    nutritionImg: nlApple,
  },
];

type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  variant: "Swirl" | "Bites";
  img: string;
  images: string[];
};

const PRODUCTS: Product[] = [
  ...PRODUCT_BASE.map((p) => ({
    ...p,
    variant: "Swirl" as const,
    img: p.swirlImg,
    images: [p.swirlImg, p.backImg, p.nutritionImg],
  })),
  ...PRODUCT_BASE.map((p) => ({
    ...p,
    variant: "Bites" as const,
    img: p.bitesImg,
    images: [p.bitesImg, ("bitesBackImg" in p ? p.bitesBackImg : p.backImg) as string, p.nutritionImg],
  })),
];

function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  function openProduct(product: Product) {
    setSelected(product);
    setImgIdx(0);
  }

  function closeModal() {
    setSelected(null);
    setImgIdx(0);
  }

  const swirls = PRODUCTS.filter((p) => p.variant === "Swirl");
  const bites = PRODUCTS.filter((p) => p.variant === "Bites");

  return (
    <section className="products" id="products">
      <div className="products__inner">
        <div className="products__header">
          <span className="products__eyebrow">The Lineup</span>
          <h2 className="products__heading">
            HANDCRAFTED
            <br />
            <em>FOR EVERY</em>
            <br />
            TABLE.
          </h2>
        </div>

        {[{ label: "Swirls", items: swirls }, { label: "Bites", items: bites }].map(
          ({ label, items }) => (
            <div className="products__group" key={label}>
              <h3 className="products__group-label">{label}</h3>
              <div className="products__grid">
                {items.map((product) => (
                  <button
                    key={product.id + product.variant}
                    className="product-card"
                    onClick={() => openProduct(product)}
                  >
                    <img
                      className="product-card__img-slot"
                      src={product.img}
                      alt={`${product.name} ${product.variant}`}
                    />
                    <div className="product-card__body">
                      <span className="product-card__name">
                        {product.name} <span className="product-card__variant">{product.variant}</span>
                      </span>
                      <span className="product-card__subtitle">{product.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {selected && (
        <div className="product-modal" onClick={closeModal}>
          <div
            className="product-modal__box"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="product-modal__close" onClick={closeModal} aria-label="Close">
              ✕
            </button>

            {/* Gallery panel */}
            <div className="product-modal__gallery">
              {selected.images.map((src, i) => (
                <img
                  key={src}
                  className={`product-modal__gallery-img${i === selected.images.length - 1 ? " product-modal__gallery-img--label" : ""}${i === imgIdx ? " product-modal__gallery-img--active" : ""}`}
                  src={src}
                  alt={`${selected.name} ${selected.variant} — photo ${i + 1}`}
                />
              ))}
              {selected.images.length > 1 && (
                <>
                  <button
                    className="product-modal__gallery-prev"
                    onClick={() => setImgIdx((i) => (i - 1 + selected.images.length) % selected.images.length)}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    className="product-modal__gallery-next"
                    onClick={() => setImgIdx((i) => (i + 1) % selected.images.length)}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                  <div className="product-modal__dots">
                    {selected.images.map((_, i) => (
                      <button
                        key={i}
                        className={`product-modal__dot${i === imgIdx ? " product-modal__dot--active" : ""}`}
                        onClick={() => setImgIdx(i)}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="product-modal__content">
              <span className="product-modal__variant">{selected.variant}</span>
              <h3 className="product-modal__title">{selected.name}</h3>
              <span className="product-modal__subtitle">{selected.subtitle}</span>
              <p className="product-modal__desc">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  const navigate = useNavigate();

  function goToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

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
              <button onClick={() => goToSection("about")}>About Us</button>
            </li>
            <li>
              <Link to="/contact">Wholesale</Link>
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
  const navigate = useNavigate();

  useEffect(() => {
    const id = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!id) return;
    // Clear the state from history so back-navigation doesn't re-trigger the scroll
    navigate(".", { replace: true, state: {} });
    const NAV_HEIGHT = 80;
    const attempt = (tries: number) => {
      const el = document.getElementById(id);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    setTimeout(() => attempt(10), 200);
  }, [location.state]);

  return (
    <>
      <main>
        <Hero />
        <SeenIn />
        <FindSection />
        <Products />
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
