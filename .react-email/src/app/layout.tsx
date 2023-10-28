import { Inter } from '@next/font/google';
import classnames from 'classnames';
import '../styles/globals.css';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-slate-12 sans">
        <div className={classnames(inter.variable, 'sans')}>
          {children}
        </div>
      </body>
    </html>
  );
}
