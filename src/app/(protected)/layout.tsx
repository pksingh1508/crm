import Navbar from "@/components/common/Navbar";

export default function ProtectedLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
