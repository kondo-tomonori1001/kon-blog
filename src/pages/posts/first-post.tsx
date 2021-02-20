import Link from "next/link";
import { MainLayout } from "../../layouts/main/index";

export default function FirstPost() {
  return (
    <>
      <MainLayout page="first-post">
        <h1>First Post</h1>
        <Link href="/">Home</Link>
      </MainLayout>
    </>
  );
}
