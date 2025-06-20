export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Nav</div>
      {children}
    </div>
  );
}
