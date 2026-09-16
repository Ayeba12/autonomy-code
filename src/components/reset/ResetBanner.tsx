import Link from "next/link";
import { DiagonalArrow } from "@/components/ui/DiagonalLink";
import { reset } from "@/content/reset";

/**
 * One quiet line on the home page while booking is open: the workshop
 * name, its dates, and a diagonal link. Remove after 13 November.
 */
export const ResetBanner = () => (
  <Link
    href="/annual-reset"
    className="group block border-b border-dashed border-line bg-paper-2 py-4 transition-colors duration-300 hover:bg-white"
  >
    <div className="container-site flex items-center justify-between gap-6 max-md:flex-col max-md:items-start max-md:gap-1.5">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-body-m text-ink">
        <span className="font-heading text-body-s tracking-[0.18em] text-brand uppercase">
          {reset.name}
        </span>
        <span className="text-smoke">{reset.dates}, {reset.time}, {reset.format.toLowerCase()}.</span>
      </p>
      <span className="inline-flex items-center gap-2 text-body-m font-medium transition-colors duration-300 group-hover:text-brand">
        Take your seat
        <DiagonalArrow />
      </span>
    </div>
  </Link>
);
