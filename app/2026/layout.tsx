import ArchiveBanner from "./_components/ArchiveBanner";

export default function ArchiveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pt-10 sm:pt-8">
      <ArchiveBanner />
      {children}
    </div>
  );
}
