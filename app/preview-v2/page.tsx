import type { Metadata } from "next";
import "./preview.css";

export const metadata: Metadata = {
  title: "Saphiant Website Preview V2",
  description: "Private design review page for Saphiant.",
  robots: { index: false, follow: false },
};

const capabilities = [
  ["01", "Retail Distribution", "Launch and scale across U.S. retail programs with coordinated pricing, inventory, and account execution."],
  ["02", "Marketplace Operations", "Channel setup, listing management, promotions, and day-to-day execution across major marketplaces."],
  ["03", "Fulfillment & Logistics", "Local receiving, storage, order fulfillment, drop ship, and operational coordination."],
  ["04", "Recommerce", "Structured recovery programs for returned, open-box, excess, and re-certified inventory."],
];

const proof = [
  ["2018", "Founded"],
  ["Los Angeles", "U.S. Operations"],
  ["Multi-Channel", "Retail Reach"],
  ["New + Recommerce", "Inventory Programs"],
];

const brands = ["dreame","mova","hyperx","yaber","amazfit","segway","cudy","tp-link"];
const channels = ["amazon","walmart","target","best-buy","tiktok","woot","ebay","home-depot"];

export default function PreviewV2() {
  return (
    <div className="pv2">
      <header className="pv2Nav">
        <a className="pv2Logo" href="#top"><img src="/assets/saphiant-logo.svg" alt="Saphiant" /></a>
        <nav><a href="#solutions">Solutions</a><a href="#network">Network</a><a href="#about">About</a></nav>
        <a className="pv2NavCta" href="#contact">Partner With Us</a>
      </header>

      <main id="top">
        <section className="pv2Hero">
          <div className="pv2Glow pv2GlowOne" />
          <div className="pv2Glow pv2GlowTwo" />
          <div className="pv2HeroCopy">
            <p className="pv2Kicker">U.S. DISTRIBUTION · RETAIL · RECOMMERCE</p>
            <h1>Move products.<br/><span>Build channels.</span><br/>Scale with control.</h1>
            <p className="pv2Lead">Saphiant helps consumer brands expand through U.S. retail, marketplace, fulfillment, and recommerce channels with local execution and disciplined operations.</p>
            <div className="pv2Actions"><a className="pv2Primary" href="#contact">Start a Conversation</a><a className="pv2Secondary" href="#solutions">Explore Capabilities</a></div>
          </div>
          <div className="pv2MapCard">
            <div className="pv2MapHead"><span>Connected U.S. Operations</span><i>LIVE NETWORK</i></div>
            <div className="pv2MapGrid" />
            <div className="pv2Node n1"><b>Retail</b><small>National programs</small></div>
            <div className="pv2Node n2"><b>Marketplaces</b><small>Channel execution</small></div>
            <div className="pv2Node n3"><b>Fulfillment</b><small>Local coordination</small></div>
            <div className="pv2Node n4"><b>Recommerce</b><small>Value recovery</small></div>
            <span className="pv2Pulse p1"/><span className="pv2Pulse p2"/><span className="pv2Pulse p3"/>
          </div>
        </section>

        <section className="pv2Proof">{proof.map(([big,small])=><div key={big}><b>{big}</b><span>{small}</span></div>)}</section>

        <section className="pv2Section pv2Light" id="solutions">
          <div className="pv2SectionIntro"><div><p className="pv2Kicker">INTEGRATED CAPABILITIES</p><h2>One operating partner.<br/>Multiple paths to growth.</h2></div><p>We connect commercial strategy with practical execution, from first launch through inventory recovery.</p></div>
          <div className="pv2Cards">{capabilities.map(([n,h,p])=><article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p><i>↗</i></article>)}</div>
        </section>

        <section className="pv2Section pv2Dark" id="network">
          <div className="pv2SectionIntro"><div><p className="pv2Kicker">BRANDS & CHANNELS</p><h2>Built for multi-channel execution.</h2></div><p>Experience across consumer electronics, home appliances, personal care, mobility, specialty retail, and recommerce.</p></div>
          <div className="pv2LogoBand"><small>SELECTED BRANDS</small><div>{brands.map(x=><figure key={x}><img src={`/assets/brands/${x}.png`} alt={x}/></figure>)}</div></div>
          <div className="pv2LogoBand pv2Channels"><small>SELECTED CHANNELS</small><div>{channels.map(x=><figure key={x}><img src={`/assets/channels/${x}.png`} alt={x}/></figure>)}</div></div>
        </section>

        <section className="pv2About" id="about">
          <div><p className="pv2Kicker">WHY SAPHIANT</p><h2>Local execution.<br/>Enterprise discipline.</h2></div>
          <div className="pv2AboutText"><p>We combine responsive U.S.-based coordination with hands-on channel experience. That means faster communication, clearer accountability, and better control across pricing, inventory, fulfillment, and returns.</p><div className="pv2Pills"><span>Retail-focused</span><span>Local U.S. support</span><span>Integrated operations</span><span>Return expertise</span></div></div>
        </section>

        <section className="pv2Contact" id="contact">
          <div><p className="pv2Kicker">LET'S BUILD THE NEXT CHANNEL</p><h2>Ready to scale in the U.S.?</h2></div>
          <a href="mailto:Support@saphiant.com">Support@saphiant.com <span>↗</span></a>
        </section>
      </main>
      <footer className="pv2Footer"><img src="/assets/saphiant-logo.svg" alt="Saphiant"/><p>U.S. distribution, retail, fulfillment, and recommerce.</p><span>© 2026 Saphiant Enterprises LLC</span></footer>
    </div>
  );
}
