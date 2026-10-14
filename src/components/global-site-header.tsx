import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import { Button } from "@/components/ui/button";
import { navigationDirectLinks, navigationGroups } from "@/lib/global-navigation";
import { phoneDisplay, phoneHref } from "@/lib/site";

export function GlobalSiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const id = useId();
  const close = () => { setOpenGroup(null); setMobileOpen(false); };
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) close();
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  return (
    <header ref={headerRef} className="global-site-header home-serene border-b border-border bg-background text-foreground"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (openGroup) { triggerRefs.current[openGroup]?.focus(); setOpenGroup(null); }
        else { setMobileOpen(false); headerRef.current?.querySelector<HTMLButtonElement>('[aria-label="Abrir menu"]')?.focus(); }
      }}>
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" onClick={close} className="flex min-w-0 items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — início">
            <img src={logoAsset.url} width={44} height={44} alt="Logo da Central" className="size-11 shrink-0 object-contain" />
            <span className="max-w-sm font-display text-sm font-semibold leading-snug sm:text-base">Central de Acolhimento e Reabilitação</span>
          </Link>
          <Button variant="ghost" size="icon" className="global-mobile-toggle size-12 shrink-0" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen} aria-controls={`${id}-nav`} onClick={() => { setMobileOpen(!mobileOpen); setOpenGroup(null); }}>
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
          <Button asChild variant="link" className="global-desktop-phone h-auto min-h-12 whitespace-normal text-left"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button>
        </div>
        <nav id={`${id}-nav`} aria-label="Menu principal" className={`global-navigation ${mobileOpen ? "is-open" : ""}`}>
          <ul className="global-navigation-list">
            <li><Button asChild variant="ghost" className="global-nav-trigger"><Link to="/" onClick={close}>Início</Link></Button></li>
            {navigationGroups.map((group) => (
              <li key={group.label} className="global-nav-group">
                <Button ref={(node) => { triggerRefs.current[group.label] = node; }} variant="ghost" className="global-nav-trigger"
                  aria-expanded={openGroup === group.label} aria-controls={`${id}-${group.label}`} onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}>
                  {group.label}<ChevronDown aria-hidden="true" className={openGroup === group.label ? "rotate-180" : ""} />
                </Button>
                <ul id={`${id}-${group.label}`} hidden={openGroup !== group.label} className="global-nav-panel border border-border bg-popover text-popover-foreground">
                  {group.items.map((item) => (
                    <li key={item.label}><Link to={item.to} {...("hash" in item ? { hash: item.hash } : {})} onClick={close}
                      className="flex min-h-12 items-center rounded-md px-3 py-3 text-sm leading-relaxed transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
                      activeOptions={{ exact: true, includeHash: true }} activeProps={{ className: "bg-muted text-primary" }}>{item.label}</Link></li>
                  ))}
                </ul>
              </li>
            ))}
            {navigationDirectLinks.map(item => (
              <li key={item.label}><Button asChild variant="ghost" className="global-nav-trigger"><Link to={item.to} {...("hash" in item ? { hash: item.hash } : {})} onClick={close} activeOptions={{ includeHash: true }} activeProps={{ className: "text-primary" }}>{item.label}</Link></Button></li>
            ))}
          </ul>
          <Button asChild variant="link" className="global-mobile-phone min-h-12 px-3"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button>
        </nav>
      </div>
    </header>
  );
}