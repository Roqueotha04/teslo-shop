import { TopMenu } from "@/src/components";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main >
        <TopMenu></TopMenu>
        {children}
      </main>
  );
}