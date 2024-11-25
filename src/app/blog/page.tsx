import { redirect } from "next/navigation";

export const metadata = {
  title: "Notes",
  description: "Resources, notes, and thoughts from me",
};

export default function BlogPage() {
  redirect("https://blog.100xdevs.com/Cohort-3-0-322ac9e00cb248f090fffe05047de99f");
  return null;
}
