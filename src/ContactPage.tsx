import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
import "./ContactPage.css";

const FORMSPREE_ID = "mqeynnal";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      alert("Formspree ID not configured yet.");
      return;
    }

    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        {/* Left — header */}
        <div className="contact-page__header">
          <span className="contact-page__eyebrow">Get in Touch</span>
          <h1 className="contact-page__heading">
            LET'S
            <br />
            WORK
            <br />
            TOGETHER.
          </h1>
          <p className="contact-page__sub">
            Interested in wholesale, stocking our products, or just want to say
            hello? Fill out the form and we'll get back to you.
          </p>

          <div className="contact-page__info">
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Email</span>
              <a href="mailto:burek@bureketc.com">burek@bureketc.com</a>
            </div>
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Phone</span>
              <a href="tel:6163301030">(616) 330-1030</a>
            </div>
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Address</span>
              <span>
                3281 Kentland Ct SE
                <br />
                Grand Rapids, MI 49548
              </span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-page__form-wrap">
          {state === "success" ? (
            <div className="contact-page__success">
              <span className="contact-page__success-icon">✓</span>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                className="contact-page__btn"
                onClick={() => setState("idle")}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              className="contact-page__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-page__row">
                <div className="contact-page__field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="contact-page__row">
                <div className="contact-page__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    required
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="" />
                </div>
              </div>

              <div className="contact-page__field contact-page__field--full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your interest — wholesale inquiries, store partnerships, or anything else..."
                  required
                />
              </div>

              {state === "error" && (
                <p className="contact-page__error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                className="contact-page__btn"
                disabled={state === "submitting"}
              >
                {state === "submitting" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
