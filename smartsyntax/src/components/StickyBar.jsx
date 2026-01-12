export default function StickyBar() {
  return (
    <div className="fixed bottom-0 w-full bg-black/80 border-t border-cyan-400 flex justify-around py-3">
      <a href="#jobs" className="text-cyan-400 font-semibold">Apply</a>
      <a
        href="https://whatsapp.com/channel/0029Vb7hulXLtOjBFoumO02Q"
        target="_blank"
        className="text-cyan-400 font-semibold"
      >
        Join WhatsApp
      </a>
    </div>
  );
}
