// Proof/stat card component
// Created: 2026-03-17

interface StatCardProps {
  value: string;
  label: string;
  source: string;
}

export default function StatCard({ value, label, source }: StatCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-colors">
      <div className="text-3xl sm:text-4xl font-black text-gold mb-2">{value}</div>
      <div className="text-white text-sm font-medium mb-1">{label}</div>
      <div className="text-white/40 text-xs">{source}</div>
    </div>
  );
}
