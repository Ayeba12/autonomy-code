import type { Metadata } from "next";
import { NotFoundContent } from "@/components/utility/NotFoundContent";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Oops! This page is off the grid.",
};

/** Root 404 boundary (404 spec: image hero + Back to Home). */
const NotFound = () => <NotFoundContent />;

export default NotFound;
