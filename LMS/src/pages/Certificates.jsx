import { Award, Download, ExternalLink } from 'lucide-react';
import { certificates } from '../data/mockData';

export default function CertificatesPage() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Certificates</h1>
        <p className="text-sm text-ink-500 mt-1">Your earned credentials</p>
      </div>
      {certificates.length === 0 ? (
        <div className="card p-12 text-center">
          <Award size={48} className="mx-auto text-ink-300 mb-3" />
          <p className="text-ink-500">No certificates yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {certificates.map((c) => (
            <div key={c.id} className="card overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <Award size={20} className="text-amber-300" />
                  <span className="text-xs font-semibold">Certificate</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-ink-900">{c.title}</h3>
                <p className="text-sm text-ink-500 mt-1">by {c.instructor}</p>
                <div className="flex items-center justify-between mt-3 text-xs text-ink-500">
                  <span>Issued {c.issuedDate}</span>
                  <span className="font-mono">{c.credentialId}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition">
                    <Download size={14} /> Download
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-ink-100 text-ink-700 text-xs font-semibold hover:bg-ink-50 transition">
                    <ExternalLink size={14} /> Verify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}