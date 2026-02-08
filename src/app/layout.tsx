import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        
        {/* Não coloque o HamburgerMenu aqui se for usar no Template */}
        {children} 
      </body>
    </html>
  );
}