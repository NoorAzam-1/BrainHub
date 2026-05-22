export default function ToggleTabs() {
  return (
    <div className="flex glass-card p-1 rounded-2xl border border-white/60">
      <button className="px-4 sm:px-6 py-2 rounded-xl bg-linear-to-r from-primary to-accent text-black text-sm font-semibold shadow-md shadow-primary/15">
        Reading Now
      </button>
      <button className="px-4 sm:px-6 py-2 text-sm text-on-surface-variant">
        Finished
      </button>
    </div>
  );
}