import { SiteHeader } from "@/components/site-header"
import { HeroPlaceholder } from "@/components/hero-placeholder"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CoursesSection } from "@/components/courses-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CookieNotice } from "@/components/cookie-notice"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO TEMPORÁRIA — substituir pelo código definitivo do cliente */}
        <HeroPlaceholder />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <AboutSection />
        <DifferentialsSection />
        <ProcessSection />
        <PortfolioSection />
        <CoursesSection />
        <FaqSection />
        <FinalCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <CookieNotice />
    </>
  )
}
