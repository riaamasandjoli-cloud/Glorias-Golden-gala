import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  CalendarDays,
  Check,
  Gift,
  MapPin,
  Phone,
  Shirt,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

type ActionName = 'wishlist' | 'location' | 'dress-code' | 'rsvp' | null;
type RsvpStatus = 'idle' | 'attending' | 'declined';

const eventDetails = {
  date: 'Saturday, September 12, 2026',
  time: '7:00 PM',
  venue: 'The Rosewood Estate',
  address: '18 Rosewood Lane · Garden Terrace',
};

const photos = [
  {
    alt: 'Placeholder for Gloria portrait in evening light',
    caption: 'sixteen & luminous',
  },
  {
    alt: 'Placeholder for elegant Gloria portrait',
    caption: 'a new chapter',
  },
  {
    alt: 'Placeholder for Gloria portrait with a graceful pose',
    caption: 'the guest of honor',
  },
];

const balloons = [
  { left: '5%', size: 42, delay: '-3s', duration: '19s' },
  { left: '17%', size: 29, delay: '-11s', duration: '23s' },
  { left: '32%', size: 54, delay: '-16s', duration: '25s' },
  { left: '50%', size: 34, delay: '-7s', duration: '20s' },
  { left: '66%', size: 47, delay: '-19s', duration: '27s' },
  { left: '80%', size: 30, delay: '-4s', duration: '21s' },
  { left: '94%', size: 52, delay: '-14s', duration: '24s' },
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
    <div className={`filigree ${small ? 'filigree-small' : ''}`} aria-hidden="true">
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
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
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
        animate={isOpening ? { scale: 1.04, opacity: 0.25 } : { scale: 1, opacity: 1 }}
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
}: {
  photo: (typeof photos)[number];
  index: number;
}) {
  return (
    <motion.figure
      className={`photo-frame photo-frame-${index + 1}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      <div className="photo-image-wrap">
        <div className="photo-placeholder" role="img" aria-label={photo.alt}>
          <span className="photo-placeholder-monogram">G</span>
          <span className="photo-placeholder-label">Photo to come</span>
          <span className="photo-placeholder-number">XVI</span>
        </div>
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
        className={`action-button ${active ? 'action-button-active' : ''}`}
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
      className={`action-button ${active ? 'action-button-active' : ''}`}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-testid={testId}
    >
      {content}
    </button>
  );
}

function Invitation() {
  const [rsvpStatus, setRsvpStatus] = useState<RsvpStatus>('idle');
  const [activeAction, setActiveAction] = useState<ActionName>(null);

  const revealAction = (action: Exclude<ActionName, null>) => {
    setActiveAction(action);
    const target =
      action === 'location' ? 'details' : action === 'dress-code' ? 'dress-code' : action === 'rsvp' ? 'rsvp' : 'gifts';
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

      <section className="hero-section page-section" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>G · XVI</span>
          <span>12 · 09 · 26</span>
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
          Join us for an evening of candlelight, champagne sparkle, and the first page of
          everything that comes next.
        </motion.p>
        <a className="scroll-cue" href="#details" data-testid="link-scroll-details">
          <span>Scroll to enter</span>
          <ArrowDown size={16} strokeWidth={1.2} />
        </a>
      </section>

      <section className="details-section page-section" id="details" aria-labelledby="details-title">
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
              Your presence is the finest present. Come dressed for an evening worthy of a
              brand-new chapter and stay for the dancing, the toasts, and the memories.
            </p>
            <FiligreeDivider small />
          </div>
          <div className="event-card" data-testid="card-event-details">
            <CornerDetails />
            <div className="event-line">
              <CalendarDays size={17} strokeWidth={1.2} />
              <div>
                <span className="event-label">Date</span>
                <strong data-testid="text-event-date">{eventDetails.date}</strong>
              </div>
            </div>
            <div className="event-rule" />
            <div className="event-line">
              <Sparkles size={17} strokeWidth={1.2} />
              <div>
                <span className="event-label">Time</span>
                <strong data-testid="text-event-time">{eventDetails.time}</strong>
              </div>
            </div>
            <div className="event-rule" />
            <div className="event-line">
              <MapPin size={17} strokeWidth={1.2} />
              <div>
                <span className="event-label">Venue</span>
                <strong data-testid="text-event-venue">{eventDetails.venue}</strong>
                <small>{eventDetails.address}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-section page-section" aria-labelledby="photos-title">
        <div className="section-heading section-heading-centered">
          <span className="section-number">02</span>
          <div>
            <p className="section-eyebrow">A few frames from her story</p>
            <h2 id="photos-title">The guest of honor</h2>
          </div>
        </div>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <PhotoFrame key={photo.caption} photo={photo} index={index} />
          ))}
        </div>
      </section>

      <section className="dress-section page-section" id="dress-code" aria-labelledby="dress-title">
        <div className="section-heading">
          <span className="section-number">03</span>
          <div>
            <p className="section-eyebrow">Come as your most polished self</p>
            <h2 id="dress-title">Mood &amp; dress code</h2>
          </div>
        </div>
        <div className="dress-intro">
          <p>Drape yourselves in royalty.</p>
          <span>Dress to impress in formal, high-fashion attire featuring rich tones of Black, Metallic Gold, and Deep Red / Burgundy.</span>
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
              Think sleek silhouettes, immaculate tailoring, and majestic details.
              Let your look feel polished, dramatic, and unapologetically elegant
              while staying within the evening&apos;s signature palette.
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

      <section className="gifts-section page-section" id="gifts" aria-labelledby="gifts-title">
        <div className="gift-panel">
          <p className="section-eyebrow">If you would like to bring a little something</p>
          <h2 id="gifts-title">Your presence is enough</h2>
          <p>
            But for those who insist, Gloria is saving for a few beautiful things for her next
            chapter. A note in your card is always welcome.
          </p>
          <a className="text-link" href="mailto:gloria@example.com?subject=Gloria%27s%20Birthday%20Gift">
            Ask about the wishlist <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="rsvp-section page-section" id="rsvp" aria-labelledby="rsvp-title">
        <FiligreeDivider />
        <p className="section-eyebrow">Kindly reply</p>
        <h2 id="rsvp-title">Will you join us?</h2>
        <p className="rsvp-copy">We hope to celebrate this beautiful beginning with you.</p>
        <AnimatePresence mode="wait">
          {rsvpStatus === 'idle' ? (
            <motion.div
              className="rsvp-actions"
              key="rsvp-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <button
                type="button"
                className="rsvp-primary"
                onClick={() => setRsvpStatus('attending')}
                data-testid="button-rsvp-attending"
              >
                Accept with pleasure
              </button>
              <button
                type="button"
                className="rsvp-secondary"
                onClick={() => setRsvpStatus('declined')}
                data-testid="button-rsvp-decline"
              >
                Decline with regret
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="rsvp-confirmation"
              key="rsvp-confirmation"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              role="status"
              data-testid="status-rsvp"
            >
              <Check size={18} strokeWidth={1.4} />
              <span>
                {rsvpStatus === 'attending'
                  ? 'We cannot wait to celebrate with you.'
                  : 'You will be missed, with love.'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
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
          onClick={() => revealAction('dress-code')}
          active={activeAction === 'dress-code'}
          testId="button-dress-code"
        />
        <ActionButton
          icon={<Phone size={18} strokeWidth={1.3} />}
          label="RSVP / Contact 📞"
          href="https://wa.me/27711290701"
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