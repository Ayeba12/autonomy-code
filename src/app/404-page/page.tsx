import type { Metadata } from "next";
import { NotFoundContent } from "@/components/utility/NotFoundContent";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Oops! This page is off the grid.",
};

/** Browsable 404 demo route (linked from the nav "Pages" dropdown). */
const NotFoundDemoPage = () => <NotFoundContent />;

export default NotFoundDemoPage;
