'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#facts', label: 'Quick Facts' },
  { href: '#why-apply', label: 'Why Apply?' },
  { href: '#process', label: 'Process' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#faq', label: 'FAQs' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
    <div className="container mx-auto flex h-28 items-center justify-between px-8 md:h-32 md:px-12">
  <Link href="https://www.pierc.org" className="flex items-center gap-2 text-xl font-semibold">
    <Image
      src="https://www.pierc.org/_next/static/media/PIERC.959ad75d.svg"
      alt="PIERC Logo"
      width={125}
      height={125}
    />
  </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild size="sm">
              <Link href={link.href} >{link.label}</Link>
            </Button>
          ))}
          <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground ml-2" asChild>
            <Link href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform" >Apply Now &rarr;</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setOpenMobileMenu(false)}
                   
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4" asChild>
                  <Link href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform" onClick={() => setOpenMobileMenu(false)}>Apply Now &rarr;</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
