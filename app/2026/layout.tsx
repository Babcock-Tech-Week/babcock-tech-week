import ArchiveBanner from "./_components/ArchiveBanner";

export default function Archive2026Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pt-10 sm:pt-9">
      <ArchiveBanner />
      {children}
    </div>
  );
}
