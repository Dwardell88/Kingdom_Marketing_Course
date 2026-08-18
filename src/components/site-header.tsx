import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Logo } from "@/components/logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/enroll", label: "Enroll" },
] as const;

export function SiteHeader() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Kingdom Marketing
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          {!loading &&
            (user ? (
              <div className="ml-2 flex items-center gap-2">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/course">My course</Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="ml-2 flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/auth">Sign in</Link>
                </Button>
                <Button asChild variant="gold" size="sm">
                  <Link to="/enroll">Get the course</Link>
                </Button>
              </div>
            ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-8 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-accent"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                {user ? (
                  <>
                    <Button asChild variant="secondary">
                      <Link to="/course">My course</Link>
                    </Button>
                    <Button variant="ghost" onClick={signOut}>
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild variant="gold">
                      <Link to="/enroll">Get the course</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link to="/auth">Sign in</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
