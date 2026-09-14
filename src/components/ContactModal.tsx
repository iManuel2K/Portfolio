import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Check, Copy, Send, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("3D Automotive & Product");
  const [message, setMessage] = useState("");

  const contactEmail = "imanuel.harizi@proton.me";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(
      `Project Inquiry: ${projectType} - ${name}`,
    );
    const body = encodeURIComponent(
      `Hi IMNL,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Details:\n${message}\n\nSent from IMNL 3D Portfolio`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl rounded-3xl bg-[#11141A] border border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 my-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-[#8A99A8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5484D] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct Communication</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Let&apos;s build something striking.
            </h3>
            <p className="text-sm text-[#8A99A8] mt-2 font-sans-body">
              Drop a line directly or use the inquiry form below. Available for
              freelance 3D CGI, concept modeling, and digital direction.
            </p>

            {/* Direct Email Pill */}
            <div className="my-6 p-4 rounded-2xl bg-[#161B24] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-[#E5484D]/10 text-[#E5484D]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] text-[#606E7B] block font-mono">
                    DIRECT INBOX
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white truncate">
                    {contactEmail}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-[#D7E2EA] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Form */}
            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  Opening Email Client...
                </h4>
                <p className="text-xs text-[#CBD5E1]">
                  If your email client didn&apos;t open automatically, you can
                  email directly to{" "}
                  <span className="font-mono text-white">{contactEmail}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#E5484D] underline hover:text-white pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8A99A8] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Jensen"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0D12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5484D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8A99A8] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0D12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5484D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8A99A8] mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0D12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5484D] transition-colors cursor-pointer"
                  >
                    <option value="3D Automotive & Product">
                      3D Automotive & Product CGI
                    </option>
                    <option value="Motion Design & Animation">
                      Motion Design & Commercials
                    </option>
                    <option value="Interactive Web Experience">
                      Interactive 3D Web & Configurator
                    </option>
                    <option value="Architectural Renovation">
                      Architecture & Space Visualization
                    </option>
                    <option value="General Collaboration">
                      General Inquiries & Collaboration
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8A99A8] mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your timeline, vision, and deliverables..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0D12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5484D] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#E5484D] hover:bg-[#F2555A] text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(229,72,77,0.35)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to IMNL</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
