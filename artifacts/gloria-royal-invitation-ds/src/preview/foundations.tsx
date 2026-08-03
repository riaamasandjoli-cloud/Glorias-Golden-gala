import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Guidelines } from './parts';

const CORE_SWATCHES = [
  { name: 'Primary', className: 'bg-primary' },
  { name: 'Secondary', className: 'bg-secondary' },
  { name: 'Accent', className: 'bg-accent' },
] as const;

const SUPPORTING_SWATCHES = [
  { name: 'Background', className: 'border bg-background' },
  { name: 'Foreground', className: 'bg-foreground' },
  { name: 'Muted', className: 'bg-muted' },
  { name: 'Destructive', className: 'bg-destructive' },
  { name: 'Border', className: 'bg-border' },
] as const;

const TYPE_SCALE = [
  { label: 'Display', className: 'text-4xl font-bold' },
  { label: 'Heading', className: 'text-2xl font-semibold' },
  { label: 'Body', className: 'text-base' },
  { label: 'Label', className: 'text-sm font-medium' },
  { label: 'Caption', className: 'text-sm text-muted-foreground' },
] as const;

const SPACING_SCALE = [
  { label: '4', className: 'w-4' },
  { label: '8', className: 'w-8' },
  { label: '12', className: 'w-12' },
  { label: '16', className: 'w-16' },
  { label: '24', className: 'w-24' },
] as const;

function Swatch({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-16 rounded-lg ${className}`} />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="space-y-4">
      <section className="rounded-xl border bg-primary p-6 text-primary-foreground">
        <p className="text-xs font-medium uppercase tracking-[0.28em] opacity-75">
          Gloria&apos;s invitation language
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
          Burgundy, gold, and a little ceremony.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 opacity-80">
          A formal editorial system for milestone celebrations and other moments
          that deserve to feel like a keepsake.
        </p>
      </section>
      <section className="rounded-xl border bg-card p-5 text-card-foreground">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Core palette
        </h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border bg-card p-5 text-card-foreground">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Typography
          </h2>
          <div className="mt-4 space-y-3">
            {TYPE_SCALE.map((entry) => (
              <p key={entry.label} className={entry.className}>
                {entry.label}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 text-card-foreground">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            In use
          </h2>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Create workspace</CardTitle>
              <CardDescription>
                Components composed from the tokens above.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="overview-name">Workspace name</Label>
                <Input id="overview-name" placeholder="Enter a name" />
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked id="overview-notify" />
                <Label htmlFor="overview-notify">Email notifications</Label>
                <Badge className="ml-auto">New</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button>Save</Button>
              <Button variant="outline">Cancel</Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <section className="space-y-4 rounded-xl border bg-card p-5 text-card-foreground">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Components
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>
      <section className="rounded-xl border bg-card p-5 text-card-foreground">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Composition principles
        </h2>
        <div className="mt-4">
          <Guidelines
            items={[
              { kind: 'do', text: 'Use gold as a deliberate signal for emphasis, not as an all-over fill.' },
              { kind: 'do', text: 'Give display type generous breathing room and let the hierarchy feel ceremonial.' },
              { kind: 'do', text: 'Use near-square framed surfaces and fine rules to echo printed stationery.' },
              { kind: 'dont', text: 'Flatten the palette into generic black, white, and gray UI.' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-8 rounded-xl border bg-card p-6 text-card-foreground">
      <section className="space-y-4">
        <div>
          <h2 className="font-semibold">Brand colors</h2>
          <p className="text-sm text-muted-foreground">
            The core roles used for emphasis, supporting actions, and accents.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-semibold">Semantic and surface colors</h2>
          <p className="text-sm text-muted-foreground">
            Roles for text, backgrounds, borders, muted content, and danger.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {SUPPORTING_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function FontsPage() {
  return (
    <div className="space-y-8 rounded-xl border bg-card p-6 text-card-foreground">
      <section>
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Font family
        </h2>
        <p className="mt-4 text-4xl font-bold">The quick brown fox</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The token font family is applied across this entire preview.
        </p>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Type scale
        </h2>
        {TYPE_SCALE.map((entry) => (
          <div key={entry.label} className="grid gap-2 sm:grid-cols-[88px_1fr]">
            <span className="pt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {entry.label}
            </span>
            <p className={entry.className}>Build products people understand.</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export function LayoutPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Spacing</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The spacing scale, derived from the base spacing token.
        </p>
        <div className="mt-6 space-y-4">
          {SPACING_SCALE.map((space) => (
            <div key={space.label} className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">
                {space.label}
              </span>
              <div className={`h-3 rounded-full bg-primary ${space.className}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Radius</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Corner treatments derive from the base radius token.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { label: 'Small', className: 'rounded-sm' },
            { label: 'Medium', className: 'rounded-md' },
            { label: 'Large', className: 'rounded-lg' },
            { label: 'Extra large', className: 'rounded-xl' },
          ].map((radius) => (
            <div
              key={radius.label}
              className={`flex h-24 items-end border bg-muted p-3 ${radius.className}`}
            >
              <span className="text-xs font-medium">{radius.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ContentPage() {
  return (
    <div className="space-y-6 rounded-xl border bg-card p-6 text-card-foreground">
      <section>
        <h2 className="font-serif text-3xl font-semibold">Voice and tone</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Warm, composed, and intimate. Copy should feel like a handwritten
          invitation translated into polished editorial language: concise,
          specific, and never corporate.
        </p>
      </section>
      <section className="border-t pt-6">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Label examples
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {['You are cordially invited', 'Save the evening', 'Kindly reply'].map((label) => (
            <div key={label} className="border border-primary/40 bg-secondary p-4 text-secondary-foreground">
              <p className="font-serif text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <Guidelines
        items={[
          { kind: 'do', text: 'Prefer intimate phrases that make the guest feel personally welcomed.' },
          { kind: 'do', text: 'Use labels such as Date, Time, Venue, and Kindly reply for quick scanning.' },
          { kind: 'dont', text: 'Use loud promotional language or filler copy that weakens the sense of occasion.' },
        ]}
      />
    </div>
  );
}

export function MotionPage() {
  return (
    <div className="space-y-6 rounded-xl border bg-card p-6 text-card-foreground">
      <section>
        <h2 className="font-serif text-3xl font-semibold">Graceful entrance</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Motion should feel like an invitation being opened: slow fades,
          measured reveals, and small tactile responses rather than busy effects.
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Reveal', '700–1100ms', 'Fade and lift content into place.'],
          ['Hover', '180–350ms', 'Glow and scale gold actions subtly.'],
          ['Scroll', 'Once per section', 'Reveal framed content as it enters view.'],
        ].map(([title, timing, text]) => (
          <div key={title} className="border border-primary/40 p-4">
            <p className="font-serif text-lg text-primary">{title}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{timing}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <Guidelines
        items={[
          { kind: 'do', text: 'Respect reduced-motion preferences while preserving clear state changes.' },
          { kind: 'do', text: 'Reserve stronger glow and scale feedback for direct interaction.' },
          { kind: 'dont', text: 'Use abrupt, elastic, or high-frequency motion that competes with the copy.' },
        ]}
      />
    </div>
  );
}
