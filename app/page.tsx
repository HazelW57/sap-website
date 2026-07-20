"use client";

import { useRef, useState } from "react";

const logo = "/assets/saphiant-logo.png";

const capabilities = [
  ["01", "Retail & Marketplace Distribution", "Expand across retail programs, marketplaces and specialty channels with coordinated inventory, pricing and execution."],
  ["02", "U.S. Fulfillment & Operations", "Support receiving, storage, fulfillment, drop, ship programs and channel, specific operational requirements."],
  ["03", "Recommerce & Inventory Recovery", "Recover value from returned, excess and re, certified inventory through structured inspection, grading and resale programs."],
  ["04", "Brand & Channel Management", "Coordinate listings, promotions, inventory allocation, channel communication and ongoing execution."],
];

const reasons = [
  ["01", "Retail, Focused Experience", "Practical experience supporting major retail programs, marketplaces and channel partners."],
  ["02", "Local U.S. Support", "A Los Angeles, based team enabling faster communication, coordination and issue resolution."],
  ["03", "Integrated Operations", "Distribution, fulfillment, marketplace execution and recommerce managed through one operating structure."],
  ["04", "Disciplined Channel Control", "Structured pricing, inventory allocation and channel, specific execution designed to protect brand value."],
];

const brandLogos = ["dreame","mova","hyperx","yaber","amazfit","meraw","yesoul","tp-link","cudy","segway","blutron","actbest","gitryin","buture","honiture","outin","toputure","arivea","conano","linner","mondo"].map(name => ({name, src:`/assets/brands/${name}.png`}));
const channelLogos = ["tiktok","temu","target","amazon","mgm-resorts","walmart","ebay","lowes","micro-center","woot","best-buy","loves","bh","home-depot","sams-club","qvc","hsn","newegg","benlink","dicks","verdi"].map(name => ({name, src:`/assets/channels/${name}.${name === "temu" ? "jpg" : "png"}`}));

function LogoRail({items}:{items:{name:string;src:string}[]}) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction:number) => rail.current?.scrollBy({left:direction * Math.min(900, window.innerWidth * .72), behavior:"smooth"});
  return <div className="railShell"><div className="railControls"><button onClick={()=>move(-1)} aria-label="Scroll logos left">←</button><button onClick={()=>move(1)} aria-label="Scroll logos right">→</button></div><div className="logoRail" ref={rail}><div className="logoRows">{items.map(item=><figure className="logoTile" key={item.name}><img src={item.src} alt={item.name.replaceAll("-"," ")}/></figure>)}</div></div></div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="header"><a className="brand" href="#top"><img src={logo} alt="Saphiant Enterprises" /></a><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?"×":"☰"}</button><nav className={open?"open":""}><a href="#solutions">Solutions</a><a href="#brands">Brands</a><a href="#channels">Channels</a><a href="#operations">Operations</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="headerCta" href="#contact">Partner With Us</a></header>
    <main id="top">
      <section className="hero"><div className="heroCopy"><p className="eyebrow">U.S. Distribution and Recommerce</p><h1>Scale Across U.S. Retail with Confidence</h1><p>Saphiant helps consumer brands expand through U.S. retail, marketplaces, fulfillment and recommerce channels with disciplined local execution.</p><div className="actions"><a className="button" href="#contact">Partner With Us</a><a className="button ghost" href="#solutions">Explore Our Capabilities</a></div></div><div className="network"><div className="grid"></div><article className="tag t1"><b>Retail & Marketplaces</b><span>Channel execution</span></article><article className="tag t2"><b>U.S. Operations</b><span>Fulfillment coordination</span></article><article className="tag t3"><b>Recommerce</b><span>Inventory recovery</span></article><i className="dot d1"></i><i className="dot d2"></i><i className="dot d3"></i></div></section>
      <section className="trust"><span>U.S. Retail</span><span>Marketplace Operations</span><span>Fulfillment</span><span>Recommerce</span><span>Brand Support</span></section>
      <section className="section light" id="solutions"><div className="heading"><div><p className="eyebrow">Integrated Capabilities</p><h2>Built for Multi-Channel Growth</h2></div><p>Practical support across the product lifecycle, from retail launch and marketplace execution to fulfillment and value recovery.</p></div><div className="cards">{capabilities.map(([n,h,p],i)=><article className="card" key={n}><span className="miniMark">{["↗","▦","↻","◎"][i]}</span><small>{n}</small><h3>{h}</h3><p>{p}</p></article>)}</div></section>
      <section className="section dark" id="operations"><div className="heading"><div><p className="eyebrow">Why Saphiant</p><h2>Execution Beyond Distribution</h2></div><p>Local coordination, disciplined channel management and connected operations help products move with greater control.</p></div><div className="reasons">{reasons.map(([n,h,p],i)=><article key={n}><span className="miniMark">{["◇","⌁","＋","◌"][i]}</span><b>{n}</b><h3>{h}</h3><p>{p}</p></article>)}</div></section>
      <section className="section processSection" id="recommerce"><div className="heading"><div><p className="eyebrow">Product Lifecycle</p><h2>Responsible Recommerce and Inventory Recovery</h2></div><p>Saphiant supports new, in, box, open, box, returned and re, certified inventory programs through structured operational processes and controlled channel deployment.</p></div><div className="process">{["Inventory Intake","Inspection","Functional Testing","Cleaning and Grading","Channel Allocation","Fulfillment and Reporting"].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></article>)}</div></section>
      <section className="logosSection" id="brands"><div className="logoIntro"><div><p className="eyebrow">Brand Relationships</p><h2>Brands We Support</h2></div><p>Selected current and historical relationships across consumer electronics, home appliances, personal care and smart mobility.</p></div><LogoRail items={brandLogos}/><small>Selected current and historical brand relationships. Certain relationships may be product, program, or channel, specific.</small></section>
      <section className="logosSection channelsSection" id="channels"><div className="logoIntro"><div><p className="eyebrow">Sales Channels</p><h2>Channel Experience</h2></div><p>Flexible access across retail, marketplace, specialty, wholesale and recommerce opportunities.</p></div><LogoRail items={channelLogos}/><small>Selected current and historical channel experience. Availability depends on product category, program requirements and partner approval.</small></section>
      <section className="about" id="about"><p className="eyebrow">About Saphiant</p><h2>Built to Help Brands Scale with Confidence</h2><p>Founded in 2018 and headquartered in the Los Angeles area, Saphiant Enterprises supports brands and channel partners across distribution, retail operations, fulfillment and recommerce.</p><div className="stats"><span><b>2018</b>Founded</span><span><b>Los Angeles</b>Headquarters</span><span><b>U.S.</b>Fulfillment Network</span><span><b>New + Recommerce</b>Product Capabilities</span></div></section>
      <section className="contact" id="contact"><div><p className="eyebrow">Start a Conversation</p><h2>Let’s Discuss Your U.S. Growth Strategy</h2><p>Tell us about your brand, products, target channels or inventory needs.</p></div><aside><small>Email our team</small><a href="mailto:Support@saphiant.com">Support@saphiant.com</a><p>13625 Marquardt Ave<br/>Santa Fe Springs, CA 90670</p></aside></section>
    </main>
    <footer><img src={logo} alt="Saphiant Enterprises"/><p>U.S. distribution, retail, fulfillment and recommerce solutions for consumer brands.</p><span>© 2026 Saphiant Enterprises LLC</span></footer>
  </>;
}
