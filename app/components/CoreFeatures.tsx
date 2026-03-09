'use client';

import React, { useEffect } from 'react';
import {
  Edit3,
  Search,
  Folder,
  Focus,
  ArrowDownUp,
  Link,
  FileText,
  Download,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ── CSS from the actual Dash app (globals.css) ── */
const illustrationStyles = `
/* Base container */
.dash-feat-illus {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; border-radius: 8px;
}

/* ── Page Linking ── */
.dash-feat-illus-link {
  flex-direction: row; gap: 0; align-items: center; padding: 4px;
}
.dash-feat-link-page {
  width: 18px; height: 24px; border: 1px solid; border-radius: 2px;
  display: flex; flex-direction: column; gap: 3px; padding: 4px 3px; flex-shrink: 0;
}
.dash-feat-link-line {
  width: 12px; height: 1.5px; flex-shrink: 0; border-radius: 1px;
  animation: dash-feat-link-connect 2.5s ease-in-out infinite;
}
@keyframes dash-feat-link-connect {
  0%,100% { opacity:0.3; width:4px } 50% { opacity:1; width:12px }
}

/* ── Code / Rich Text ── */
.dash-feat-illus-code { padding: 6px; }
.dash-feat-code-lines {
  display: flex; flex-direction: column; gap: 4px; width: 100%;
}
.dash-feat-code-line {
  display: flex; gap: 3px; align-items: center;
  animation: dash-feat-code-type 3s ease-out infinite;
}
@keyframes dash-feat-code-type {
  0% { opacity:0; transform:translateX(-4px) }
  20%,100% { opacity:1; transform:translateX(0) }
}
.dash-feat-code-line span {
  display: block; height: 3px; border-radius: 1px; flex-shrink: 0;
}

/* ── Quick Switcher / Search ── */
.dash-feat-illus-search {
  flex-direction: column; gap: 3px; padding: 6px;
}
.dash-feat-search-bar {
  display: flex; align-items: center; gap: 3px;
  border: 1px solid; border-radius: 4px; padding: 2px 4px; width: 100%;
}
.dash-feat-search-icon { font-size: 8px; flex-shrink: 0; }
.dash-feat-search-text {
  height: 2px; border-radius: 1px;
  animation: dash-feat-search-type 2.5s ease-in-out infinite;
}
@keyframes dash-feat-search-type {
  0% { width:0 } 40%,80% { width:70% } 100% { width:0 }
}
.dash-feat-search-results {
  display: flex; flex-direction: column; gap: 2px; width: 100%;
}
.dash-feat-search-result {
  padding: 3px 4px; border-radius: 2px;
  animation: dash-feat-search-reveal 2.5s ease-out infinite;
}
@keyframes dash-feat-search-reveal {
  0%,30% { opacity:0; transform:translateY(2px) }
  50%,80% { opacity:1; transform:translateY(0) }
  100% { opacity:0 }
}

/* ── Folders & Tags ── */
.dash-feat-illus-folders { padding: 3px; }
.dash-feat-sidebar-list {
  display: flex; flex-direction: column; gap: 2px; width: 100%;
}
.dash-feat-sidebar-item {
  display: flex; align-items: center; gap: 3px; padding: 3px 4px; border-radius: 3px;
}
.dash-feat-sidebar-chevron {
  font-size: 5px; line-height: 1;
  animation: dash-feat-chevron-rotate 5s ease-in-out infinite;
}
@keyframes dash-feat-chevron-rotate {
  0%,15% { transform:rotate(0deg) } 20%,75% { transform:rotate(90deg) } 80%,100% { transform:rotate(0deg) }
}
.dash-feat-sidebar-nested {
  display: flex; flex-direction: column; gap: 1px; padding-left: 8px; overflow: hidden;
  animation: dash-feat-nested-expand 5s ease-in-out infinite;
}
@keyframes dash-feat-nested-expand {
  0%,15% { max-height:0; opacity:0 } 25%,70% { max-height:40px; opacity:1 } 80%,100% { max-height:0; opacity:0 }
}
.dash-feat-sidebar-page {
  display: flex; align-items: center; justify-content: space-between;
  padding: 2px 3px; border-radius: 2px;
  opacity: 0; transform: translateY(-4px);
}
.dash-feat-sidebar-page-1 { animation: dash-feat-page-slide-in 5s 0.3s ease-out infinite; }
.dash-feat-sidebar-page-2 { animation: dash-feat-page-slide-in 5s 0.45s ease-out infinite; }
.dash-feat-sidebar-page-3 { animation: dash-feat-page-slide-in 5s 0.6s ease-out infinite; }
@keyframes dash-feat-page-slide-in {
  0%,18% { opacity:0; transform:translateY(-4px) }
  28%,68% { opacity:1; transform:translateY(0) }
  78%,100% { opacity:0; transform:translateY(-4px) }
}
.dash-feat-sidebar-tag {
  width: 8px; height: 4px; border-radius: 2px; flex-shrink: 0; opacity: 0.85;
}

/* ── Focus Mode ── */
.dash-feat-illus-focus {
  flex-direction: column; gap: 3px; padding: 8px;
}
.dash-feat-focus-line {
  height: 2px; border-radius: 1px;
}
.dash-feat-focus-dim {
  animation: dash-feat-focus-fade 3s ease-in-out infinite;
}
@keyframes dash-feat-focus-fade {
  0%,100% { opacity:0.4 } 50% { opacity:0.15 }
}
.dash-feat-focus-active {
  animation: dash-feat-focus-glow 3s ease-in-out infinite;
}
@keyframes dash-feat-focus-glow {
  0%,100% { opacity:0.8 } 50% { opacity:1 }
}

/* ── Export & Import ── */
.dash-feat-illus-export {
  padding: 4px; flex-direction: column; gap: 3px;
}
.dash-feat-export-doc {
  width: 28px; height: 22px; border: 1px solid; border-radius: 3px;
  display: flex; flex-direction: column; gap: 2px; padding: 4px 3px;
}
.dash-feat-export-arrow {
  animation: dash-feat-export-bounce 3s ease-in-out infinite;
}
@keyframes dash-feat-export-bounce {
  0%,100% { transform:translateY(0) } 50% { transform:translateY(3px) }
}
.dash-feat-export-formats { display: flex; gap: 2px; }
.dash-feat-export-fmt {
  font-size: 5px; font-weight: 700; font-family: monospace;
  padding: 1px 2px; border: 1px solid; border-radius: 2px;
  opacity: 0;
  animation: dash-feat-export-fmt-show 3s ease-in-out infinite;
}
.dash-feat-export-fmt-1 { animation-delay: 0.3s; }
.dash-feat-export-fmt-2 { animation-delay: 0.6s; }
.dash-feat-export-fmt-3 { animation-delay: 0.9s; }
@keyframes dash-feat-export-fmt-show {
  0%,15% { opacity:0; transform:translateY(-3px) }
  30%,80% { opacity:1; transform:translateY(0) }
  95%,100% { opacity:0 }
}
`;

/* ── Illustration Components (from FeaturesPanel.js, light theme colors) ── */

const accent = '#3b82f6';
const muted = '#e5e7eb';
const textMuted = '#9ca3af';

function LinkIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-link">
      <div className="dash-feat-link-page" style={{ borderColor: textMuted, background: `${accent}08` }}>
        <div style={{ background: textMuted, width: '80%', height: 2, borderRadius: 1 }} />
        <div style={{ background: textMuted, width: '50%', height: 2, borderRadius: 1 }} />
      </div>
      <div className="dash-feat-link-line" style={{ background: accent }} />
      <div className="dash-feat-link-page" style={{ borderColor: textMuted, background: `${accent}08` }}>
        <div style={{ background: textMuted, width: '70%', height: 2, borderRadius: 1 }} />
        <div style={{ background: textMuted, width: '40%', height: 2, borderRadius: 1 }} />
      </div>
    </div>
  );
}

function CodeIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-code">
      <div className="dash-feat-code-lines">
        <div className="dash-feat-code-line" style={{ animationDelay: '0s' }}>
          <span style={{ background: '#3b82f6', width: 14, height: 3 }} />
          <span style={{ background: '#93c5fd', width: 20, height: 3 }} />
        </div>
        <div className="dash-feat-code-line" style={{ animationDelay: '0.4s', paddingLeft: 8 }}>
          <span style={{ background: '#60a5fa', width: 10, height: 3 }} />
          <span style={{ background: '#bfdbfe', width: 16, height: 3 }} />
        </div>
        <div className="dash-feat-code-line" style={{ animationDelay: '0.8s', paddingLeft: 8 }}>
          <span style={{ background: '#2563eb', width: 22, height: 3 }} />
        </div>
        <div className="dash-feat-code-line" style={{ animationDelay: '1.2s' }}>
          <span style={{ background: '#3b82f6', width: 6, height: 3 }} />
        </div>
      </div>
    </div>
  );
}

function SearchIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-search">
      <div className="dash-feat-search-bar" style={{ borderColor: muted, background: `${accent}05` }}>
        <div className="dash-feat-search-icon" style={{ color: textMuted }}>&#9906;</div>
        <div className="dash-feat-search-text" style={{ background: accent }} />
      </div>
      <div className="dash-feat-search-results">
        <div className="dash-feat-search-result" style={{ background: `${accent}15` }}>
          <div style={{ background: textMuted, width: '70%', height: 2, borderRadius: 1 }} />
        </div>
        <div className="dash-feat-search-result" style={{ background: muted }}>
          <div style={{ background: textMuted, width: '50%', height: 2, borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

function FoldersIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-folders">
      <div className="dash-feat-sidebar-list">
        <div className="dash-feat-sidebar-item" style={{ background: `${accent}15` }}>
          <div className="dash-feat-sidebar-chevron" style={{ color: accent }}>&#9654;</div>
          <div style={{ background: accent, width: '55%', height: 2, borderRadius: 1 }} />
        </div>
        <div className="dash-feat-sidebar-nested">
          <div className="dash-feat-sidebar-page dash-feat-sidebar-page-1">
            <div style={{ background: accent, width: '60%', height: 2, borderRadius: 1, opacity: 0.5 }} />
            <div className="dash-feat-sidebar-tag" style={{ background: '#3b82f6' }} />
          </div>
          <div className="dash-feat-sidebar-page dash-feat-sidebar-page-2">
            <div style={{ background: accent, width: '40%', height: 2, borderRadius: 1, opacity: 0.5 }} />
            <div className="dash-feat-sidebar-tag" style={{ background: '#60a5fa' }} />
          </div>
          <div className="dash-feat-sidebar-page dash-feat-sidebar-page-3">
            <div style={{ background: accent, width: '50%', height: 2, borderRadius: 1, opacity: 0.5 }} />
            <div className="dash-feat-sidebar-tag" style={{ background: '#93c5fd' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FocusIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-focus">
      <div className="dash-feat-focus-line dash-feat-focus-dim" style={{ background: muted, width: '80%' }} />
      <div className="dash-feat-focus-line dash-feat-focus-dim" style={{ background: muted, width: '65%' }} />
      <div className="dash-feat-focus-line dash-feat-focus-active" style={{ background: accent, width: '75%' }} />
      <div className="dash-feat-focus-line dash-feat-focus-dim" style={{ background: muted, width: '55%' }} />
      <div className="dash-feat-focus-line dash-feat-focus-dim" style={{ background: muted, width: '70%' }} />
    </div>
  );
}

function ExportIllustration() {
  return (
    <div className="dash-feat-illus dash-feat-illus-export">
      <div className="dash-feat-export-doc" style={{ borderColor: muted }}>
        <div style={{ background: textMuted, width: '70%', height: 2, borderRadius: 1 }} />
        <div style={{ background: textMuted, width: '50%', height: 2, borderRadius: 1 }} />
        <div style={{ background: textMuted, width: '60%', height: 2, borderRadius: 1 }} />
      </div>
      <div className="dash-feat-export-arrow" style={{ color: accent }}>
        <Download size={14} />
      </div>
      <div className="dash-feat-export-formats">
        <span className="dash-feat-export-fmt dash-feat-export-fmt-1" style={{ color: accent, borderColor: `${accent}40` }}>PDF</span>
        <span className="dash-feat-export-fmt dash-feat-export-fmt-2" style={{ color: textMuted, borderColor: `${textMuted}40` }}>MD</span>
        <span className="dash-feat-export-fmt dash-feat-export-fmt-3" style={{ color: accent, borderColor: `${accent}40` }}>DOCX</span>
      </div>
    </div>
  );
}

/* ── Feature data ── */

const features = [
  {
    icon: Link,
    title: 'Page Linking',
    desc: 'Type [[ to link notes with wiki-style links. Build a connected knowledge base with effortless navigation.',
    Illustration: LinkIllustration,
  },
  {
    icon: Edit3,
    title: 'Rich Text Editing',
    desc: 'Code blocks with syntax highlighting, tables, images, and beautiful formatting powered by a modern editor.',
    Illustration: CodeIllustration,
  },
  {
    icon: Search,
    title: 'Quick Switcher',
    desc: 'Press Cmd+P to jump to any note instantly. Fuzzy search across all your pages in milliseconds.',
    Illustration: SearchIllustration,
  },
  {
    icon: Folder,
    title: 'Folders & Tags',
    desc: 'Organize with nested folders, colored tags, and drag-and-drop. Find everything where you left it.',
    Illustration: FoldersIllustration,
  },
  {
    icon: Focus,
    title: 'Focus Mode',
    desc: 'Distraction-free writing with typewriter scrolling and paragraph dimming. Just you and your words.',
    Illustration: FocusIllustration,
  },
  {
    icon: ArrowDownUp,
    title: 'Import & Export',
    desc: 'Export to PDF, Word, Markdown, and more. Import from multiple formats without losing structure.',
    Illustration: ExportIllustration,
  },
];

/* ── Component ── */

export default function CoreFeatures() {
  useEffect(() => {
    const id = 'dash-core-features-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = illustrationStyles;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  return (
    <section className="py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Write, link, and{' '}
            <span className="text-blue-600 dark:text-blue-400">organize</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A powerful editor with wiki-style page linking, focus mode, and smart
            organization — all while keeping your data completely private.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-2">
                <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {feature.desc}
              </p>

              {/* Animated illustration — scaled up from app's 56×56 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center min-h-[140px] overflow-hidden">
                <div style={{ transform: 'scale(2.2)', transformOrigin: 'center' }}>
                  <feature.Illustration />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Dash combines the power of wiki-style page linking, rich text editing, and smart organization — all running locally on your Mac with no cloud dependency. Available for macOS, one-time purchase at $14.99.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <a
            href="#payment-section"
            onClick={(e) => { e.preventDefault(); document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800"
          >
            Start writing privately
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
