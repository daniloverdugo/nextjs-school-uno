import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-50">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">LamaDev</span>
        </Link>
        <Menu />
      </div>
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll bg-gray-50 flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
