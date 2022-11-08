// These styles apply to every route in the application
import { Baskervville } from '@next/font/google';

const baskervville = Baskervville({
  weight: '400'
});

export default function Layout({ children }) {
  return (
    <>
      <div className={baskervville.className}>
        {children}
      </div>
    </>
  );
}
