// These styles apply to every route in the application
export default function Layout({ children }) {
  return (
    <>
      <div className="font-serif">
        {children}
      </div>
    </>
  );
}
