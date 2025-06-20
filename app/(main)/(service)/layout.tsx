export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Sidebar</div>
      {children}
    </div>
  );
}
