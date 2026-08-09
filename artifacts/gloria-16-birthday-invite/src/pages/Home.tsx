import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  Gift,
  MapPin,
  Phone,
  Shirt,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type ActionName = "wishlist" | "location" | "dress-code" | "rsvp" | null;
type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const countdownTarget = new Date("2026-10-03T13:00:00+02:00").getTime();
const eventDayStart = new Date("2026-10-03T00:00:00+02:00").getTime();

const eventDetails = {
  date: "3 October 2026",
  time: "13h00",
};

const photos = [
  {
    src: "/images/gloria-hero.jpg",
    alt: "Gloria holding a birthday candle on 15th birthday",
    caption: "sixteen & luminous",
  },
  {
    src: "/images/gloria-new-chapter.jpg",
    alt: "Young Gloria looking at the camera in her school uniform",
    caption: "a new chapter",
  },
  {
    src: "/images/gloria-rsvp.jpg",
    alt: "Close portrait of Gloria in December",
    caption: "the queen of the  party",
  },
];

const balloons = [
  { left: "5%", size: 42, delay: "-3s", duration: "19s" },
  { left: "17%", size: 29, delay: "-11s", duration: "23s" },
  { left: "32%", size: 54, delay: "-16s", duration: "25s" },
  { left: "50%", size: 34, delay: "-7s", duration: "20s" },
  { left: "66%", size: 47, delay: "-19s", duration: "27s" },
  { left: "80%", size: 30, delay: "-4s", duration: "21s" },
  { left: "94%", size: 52, delay: "-14s", duration: "24s" },
];

function BalloonField() {
  return (
    <div className="balloon-field" aria-hidden="true">
      {balloons.map((balloon, index) => (
        <span
          className="balloon"
          key={`${balloon.left}-${index}`}
          style={{
            left: balloon.left,
            width: balloon.size,
            height: balloon.size * 1.16,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
        />
      ))}
    </div>
  );
}

function FiligreeDivider({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`filigree ${small ? "filigree-small" : ""}`}
      aria-hidden="true"
    >
      <span />
      <i />
      <b />
      <i />
      <span />
    </div>
  );
}

function CornerDetails() {
  return (
    <>
      <span className="corner-detail corner-detail-tl" aria-hidden="true" />
      <span className="corner-detail corner-detail-tr" aria-hidden="true" />
      <span className="corner-detail corner-detail-bl" aria-hidden="true" />
      <span className="corner-detail corner-detail-br" aria-hidden="true" />
    </>
  );
}

function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const openEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, 950);
  };

  return (
    <motion.section
      className="envelope-screen"
      aria-label="Open Gloria's birthday invitation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="envelope-intro">
        <span className="envelope-eyebrow">A private invitation</span>
        <span className="envelope-brand">G · XVI</span>
      </div>

      <motion.button
        className="envelope-object"
        type="button"
        onClick={openEnvelope}
        aria-label="Tap to open Gloria's invitation"
        animate={
          isOpening ? { scale: 1.04, opacity: 0.25 } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        data-testid="button-open-invitation"
      >
        <span className="envelope-paper">
          <span className="paper-kicker">You are invited</span>
          <strong>GLORIA</strong>
          <span className="paper-number">XVI</span>
        </span>
        <span className="envelope-back" />
        <span className="envelope-flap" />
        <span className="envelope-fold envelope-fold-left" />
        <span className="envelope-fold envelope-fold-right" />
        <span className="wax-seal">
          <span>G</span>
        </span>
      </motion.button>

      <motion.div
        className="envelope-prompt"
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 8 : 0 }}
      >
        <span>Tap the seal to open</span>
        <ArrowDown size={15} strokeWidth={1.4} />
      </motion.div>

      <span className="envelope-footer">With love, Gloria &amp; family</span>
    </motion.section>
  );
}

function PhotoFrame({
  photo,
  index,
  className = "",
}: {
  photo: (typeof photos)[number];
  index: number;
  className?: string;
}) {
  return (
    <motion.figure
      className={`photo-frame photo-frame-${index + 1} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      <div className="photo-image-wrap">
        <img
          className="photo-image"
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
        />
        <span className="photo-shine" aria-hidden="true" />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </motion.figure>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
  active,
  href,
  target,
  rel,
  testId,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  testId: string;
}) {
  const content = (
    <>
      <span className="action-icon">{icon}</span>
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        className={`action-button ${active ? "action-button-active" : ""}`}
        href={href}
        target={target}
        rel={rel}
        data-testid={testId}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`action-button ${active ? "action-button-active" : ""}`}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-testid={testId}
    >
      {content}
    </button>
  );
}

function getCountdownValues(): CountdownValues {
  const remaining = Math.max(0, countdownTarget - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function EventDayBanner() {
  const [isVisible, setIsVisible] = useState(() => Date.now() >= eventDayStart);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          className="event-day-banner"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -120 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>
            🥂 TODAY IS THE DAY! Welcome to Gloria&apos;s 16th Birthday Gala.
          </span>
          <button
            type="button"
            className="event-day-banner-close"
            aria-label="Dismiss welcome banner"
            onClick={() => setIsVisible(false)}
          >
            <X size={17} strokeWidth={1.5} />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function CountdownTimer() {
  const [countdown, setCountdown] =
    useState<CountdownValues>(getCountdownValues);
  const [hasArrived, setHasArrived] = useState(
    () => Date.now() >= countdownTarget,
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownValues());
      setHasArrived(Date.now() >= countdownTarget);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { key: "days", label: "Days", value: countdown.days },
    { key: "hours", label: "Hours", value: countdown.hours },
    { key: "minutes", label: "Mins", value: countdown.minutes },
    { key: "seconds", label: "Secs", value: countdown.seconds },
  ] as const;

  return (
    <section
      className="countdown-section page-section"
      aria-labelledby="countdown-title"
    >
      <div className="countdown-heading">
        <p className="section-eyebrow">The golden hour approaches</p>
        <h2 id="countdown-title">Counting down to the celebration</h2>
      </div>
      {hasArrived ? (
        <div className="countdown-complete" role="status" aria-live="polite">
          THE QUEEN HAS ARRIVED. LET THE BALL BEGIN 👑✨
        </div>
      ) : (
        <div className="countdown-grid" aria-live="polite">
          {units.map((unit) => (
            <div className="countdown-box" key={unit.key}>
              <strong>{String(unit.value).padStart(2, "0")}</strong>
              <span>{unit.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function Invitation() {
  const [activeAction, setActiveAction] = useState<ActionName>(null);

  const revealAction = (action: Exclude<ActionName, null>) => {
    setActiveAction(action);
    const target =
      action === "location"
        ? "details"
        : action === "dress-code"
          ? "dress-code"
          : action === "rsvp"
            ? "rsvp"
            : "gifts";
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <motion.main
      className="invitation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.15 }}
    >
      <BalloonField />
      <div className="ambient-glow ambient-glow-top" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-bottom" aria-hidden="true" />

      <section
        className="hero-section page-section"
        aria-labelledby="hero-title"
      >
        <div className="hero-topline">
          <span>G · XVI</span>
          <span>07 · 11 · 26</span>
        </div>
        <div className="hero-monogram" aria-hidden="true">
          <span>G</span>
          <small>16</small>
        </div>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          The celebration of
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.9 }}
        >
          It&apos;s not just a birthday
          <em>—but a new chapter</em>
        </motion.h1>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.84, duration: 0.8 }}
        >
          Join us for an evening of candlelight, champagne sparkle, and the
          first page of everything that comes next.
        </motion.p>
        <motion.figure
          className="hero-photo-frame"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, duration: 0.9 }}
        >
          <div className="photo-image-wrap">
            <img
              className="photo-image"
              src={photos[0].src}
              alt={photos[0].alt}
            />
            <span className="photo-shine" aria-hidden="true" />
          </div>
          <figcaption>{photos[0].caption}</figcaption>
        </motion.figure>
        <a
          className="scroll-cue"
          href="#details"
          data-testid="link-scroll-details"
        >
          <span>Scroll to enter</span>
          <ArrowDown size={16} strokeWidth={1.2} />
        </a>
      </section>

      <section
        className="details-section page-section"
        id="details"
        aria-labelledby="details-title"
      >
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p className="section-eyebrow">Save the evening</p>
            <h2 id="details-title">Gloria turns sixteen</h2>
          </div>
        </div>
        <div className="details-layout">
          <div className="details-copy">
            <FiligreeDivider />
            <p>
              Your presence is the finest present. Come dressed for an evening
              worthy of a brand-new chapter and stay for the dancing, the
              toasts, and the memories.
            </p>
            <FiligreeDivider small />
          </div>
          <div className="event-card" data-testid="card-event-details">
            <CornerDetails />
            <div className="event-line">
              <CalendarDays size={17} strokeWidth={1.2} />
              <div>
                <span className="event-label">Date</span>
                <strong data-testid="text-event-date">
                  {eventDetails.date}
                </strong>
              </div>
            </div>
            <div className="event-rule" />
            <div className="event-line">
              <Sparkles size={17} strokeWidth={1.2} />
              <div>
                <span className="event-label">Time</span>
                <strong data-testid="text-event-time">
                  {eventDetails.time}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="photo-section page-section"
        aria-labelledby="photos-title"
      >
        <div className="section-heading section-heading-centered">
          <span className="section-number">02</span>
          <div>
            <p className="section-eyebrow">A moment between chapters</p>
            <h2 id="photos-title">A new chapter</h2>
          </div>
        </div>
        <div className="photo-feature">
          <PhotoFrame photo={photos[1]} index={1} />
        </div>
      </section>

      <section
        className="dress-section page-section"
        id="dress-code"
        aria-labelledby="dress-title"
      >
        <div className="section-heading">
          <span className="section-number">03</span>
          <div>
            <p className="section-eyebrow">Come as your most polished self</p>
            <h2 id="dress-title">Mood &amp; dress code</h2>
          </div>
        </div>
        <div className="dress-intro">
          <p>Drape yourselves in royalty.</p>
          <span>
            Dress to impress in formal, high-fashion attire featuring rich tones
            of Black, Metallic Gold, and Deep Red / Burgundy.
          </span>
        </div>
        <motion.div
          className="dress-code-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div className="dress-code-copy">
            <p className="dress-code-kicker">The royal palette</p>
            <h3>Make an entrance worthy of the evening.</h3>
            <p>
              Think sleek silhouettes, immaculate tailoring, and majestic
              details. Let your look feel polished, dramatic, and
              unapologetically elegant while staying within the evening&apos;s
              signature palette. Outfit Rule: Select 1 or 2 colors maximum
              (e.g., All Black, Burgundy & Gold, or Black & Gold). Please do not
              mix all 3 colors in one outfit.
            </p>
          </div>
          <div className="dress-colors" aria-label="Dress code colors">
            <span className="dress-color dress-color-black">
              <i aria-hidden="true" />
              <strong>Black</strong>
            </span>
            <span className="dress-color dress-color-gold">
              <i aria-hidden="true" />
              <strong>Metallic Gold</strong>
            </span>
            <span className="dress-color dress-color-burgundy">
              <i aria-hidden="true" />
              <strong>Deep Red / Burgundy</strong>
            </span>
          </div>
        </motion.div>
      </section>

      <section
        className="gifts-section page-section"
        id="gifts"
        aria-labelledby="gifts-title"
      >
        <div className="gift-panel">
          <p className="section-eyebrow">
            If you would like to bring a little something
          </p>
          <h2 id="gifts-title">Your presence is enough</h2>
          <p>
            But for those who insist, Gloria is saving for a few beautiful
            things for her next chapter. A note in your card is always welcome.
          </p>
          <a
            className="text-link"
            href="mailto:gloria@example.com?subject=Gloria%27s%20Birthday%20Gift"
          >
            Ask about the wishlist <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        className="pre-rsvp-photo-section page-section"
        aria-labelledby="pre-rsvp-photo-title"
      >
        <div className="section-heading section-heading-centered">
          <span className="section-number">04</span>
          <div>
            <p className="section-eyebrow">Before the celebration begins</p>
            <h2 id="pre-rsvp-photo-title">A candlelit wish</h2>
          </div>
        </div>
        <div className="photo-feature photo-feature-rsvp">
          <PhotoFrame photo={photos[2]} index={2} />
        </div>
      </section>

      <CountdownTimer />

      <section
        className="rsvp-section page-section"
        id="rsvp"
        aria-labelledby="rsvp-title"
      >
        <FiligreeDivider />
        <p className="section-eyebrow">Kindly reply</p>
        <h2 id="rsvp-title">Will you join us?</h2>
        <p className="rsvp-copy">
          We hope to celebrate this beautiful beginning with you.
        </p>
        <motion.form
          className="rsvp-form"
          action="https://formspree.io/f/mjybbbwa"
          method="POST"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          data-testid="form-rsvp"
        >
          <label className="rsvp-field rsvp-field-wide" htmlFor="rsvp-name">
            <span>Full name</span>
            <input
              id="rsvp-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              data-testid="input-rsvp-name"
            />
          </label>
          <label
            className="rsvp-field rsvp-field-wide"
            htmlFor="rsvp-attendance"
          >
            <span>Attendance status</span>
            <select
              id="rsvp-attendance"
              name="attendance"
              required
              defaultValue=""
              data-testid="select-rsvp-attendance"
            >
              <option value="" disabled>
                Select Attendance...
              </option>
              <option value="Attending">Yes, I will be attending</option>
              <option value="Not Attending">Regrettably cannot make it</option>
            </select>
          </label>
          <label className="rsvp-field" htmlFor="rsvp-guests">
            <span>Plus one / guest name(s)</span>
            <input
              id="rsvp-guests"
              type="text"
              name="guests"
              placeholder="If applicable"
              data-testid="input-rsvp-guests"
            />
          </label>
          <label className="rsvp-field" htmlFor="rsvp-song">
            <span>Song request</span>
            <input
              id="rsvp-song"
              type="text"
              name="song_request"
              placeholder="Make it memorable"
              data-testid="input-rsvp-song"
            />
          </label>
          <button
            className="rsvp-submit"
            type="submit"
            data-testid="button-rsvp-submit"
          >
            Confirm RSVP
          </button>
        </motion.form>
      </section>

      <footer className="invitation-footer">
        <div className="footer-monogram">G</div>
        <p>Gloria&apos;s sixteenth · with love, always</p>
      </footer>

      <nav className="action-dock" aria-label="Invitation quick actions">
        <ActionButton
          icon={<Gift size={18} strokeWidth={1.3} />}
          label="Wishlist / Gifts 🎁"
          href="https://giftful.com/wishlists/UYN0BecKWsFkSnswpcWo"
          testId="button-wishlist"
        />
        <ActionButton
          icon={<MapPin size={18} strokeWidth={1.3} />}
          label="Location / Map 📍"
          href="https://maps.app.goo.gl/HMwKSHsR8eTuvxn66"
          target="_blank"
          rel="noreferrer"
          testId="button-location"
        />
        <ActionButton
          icon={<Shirt size={18} strokeWidth={1.3} />}
          label="Dress Code 👗"
          onClick={() => revealAction("dress-code")}
          active={activeAction === "dress-code"}
          testId="button-dress-code"
        />
        <ActionButton
          icon={<Phone size={18} strokeWidth={1.3} />}
          label="RSVP / Contact 📞"
          href="https://wa.me/27791290701"
          testId="button-rsvp-contact"
        />
      </nav>
    </motion.main>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="invitation-app">
      <EventDayBanner />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <EnvelopeGate key="envelope" onOpen={() => setIsOpen(true)} />
        ) : (
          <Invitation key="invitation" />
        )}
      </AnimatePresence>
    </div>
  );
}
