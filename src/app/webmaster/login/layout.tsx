export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Este layout vacío evita que se aplique el layout de admin con sidebar
  return <>{children}</>;
}
