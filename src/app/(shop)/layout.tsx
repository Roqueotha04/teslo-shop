import { TopMenu } from "@/src/components";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="min-h-screen px-5">
        <TopMenu></TopMenu>
        {children}
      </main>
  );
}