import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="font-display text-base font-semibold">Kingdom Marketing</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Training for Christian businesses on marketing that is faithful, lawful, and
              effective.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/curriculum" className="text-muted-foreground hover:text-foreground">
              Curriculum
            </Link>
            <Link to="/enroll" className="text-muted-foreground hover:text-foreground">
              Enroll
            </Link>
            <Link to="/auth" className="text-muted-foreground hover:text-foreground">
              Sign in
            </Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            Educational content only. Kingdom Marketing is not a law firm and does not provide legal
            advice. Consult qualified counsel about your specific advertising and compliance
            obligations.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Kingdom Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
