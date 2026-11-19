import { Component, useCallback, useEffect, useRef, useState } from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

class IntroErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Silently disable intro overlay if an unexpected runtime error occurs
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const TOTAL_DURATION_MS = 10000;
const EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';

const CURSOR_META = {
  marck: {
    id: 'marck',
    name: 'Marck · Dev',
    color: '#3B82F6',
    pillClass: 'bg-blue-600/95 border-blue-400/50 text-white',
    badgeClass: 'bg-blue-500 text-white',
    borderRgba: 'rgba(59, 130, 246, 0.85)',
    glowRgba: 'rgba(59, 130, 246, 0.25)',
  },
  design: {
    id: 'design',
    name: 'UI / Design',
    color: '#8B5CF6',
    pillClass: 'bg-violet-600/95 border-violet-400/50 text-white',
    badgeClass: 'bg-violet-500 text-white',
    borderRgba: 'rgba(139, 92, 246, 0.85)',
    glowRgba: 'rgba(139, 92, 246, 0.25)',
  },
  backend: {
    id: 'backend',
    name: 'Backend',
    color: '#10B981',
    pillClass: 'bg-emerald-600/95 border-emerald-400/50 text-white',
    badgeClass: 'bg-emerald-500 text-[#050508]',
    borderRgba: 'rgba(16, 185, 129, 0.85)',
    glowRgba: 'rgba(16, 185, 129, 0.22)',
  },
  qa: {
    id: 'qa',
    name: 'QA',
    color: '#F59E0B',
    pillClass: 'bg-amber-600/95 border-amber-400/50 text-white',
    badgeClass: 'bg-amber-500 text-[#050508]',
    borderRgba: 'rgba(245, 158, 11, 0.82)',
    glowRgba: 'rgba(245, 158, 11, 0.2)',
  },
};

function getFinalViewportRect(element) {
  if (!element || typeof element.getBoundingClientRect !== 'function') {
    return null;
  }

  try {
    const rect = element.getBoundingClientRect();
    let offsetX = 0;
    let offsetY = 0;

    if (typeof window.DOMMatrixReadOnly === 'function') {
      let current = element;
      while (
        current &&
        current !== document.body &&
        current !== document.documentElement
      ) {
        const transform = window.getComputedStyle(current).transform;
        if (transform && transform !== 'none') {
          try {
            const matrix = new window.DOMMatrixReadOnly(transform);
            offsetX += matrix.m41;
            offsetY += matrix.m42;
          } catch {
            // Ignore non-standard transform values
          }
        }
        current = current.parentElement;
      }
    }

    return {
      left: rect.left - offsetX,
      top: rect.top - offsetY,
      width: rect.width,
      height: rect.height,
    };
  } catch {
    return null;
  }
}

function CursorArrowSvg({ color }) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
    >
      <path
        d="M2.2 1.6L15.4 9.5L9.3 11.1L6.1 17.4L2.2 1.6Z"
        fill={color}
        stroke="#050508"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FigmaBox({
  rect,
  pad = 8,
  active,
  visible,
  label,
  dimText,
  color,
  borderRgba,
  glowRgba,
  badgeClass,
  offsetX = 0,
  offsetY = 0,
  scaleX = 1,
  scaleY = 1,
  durationMs = 450,
}) {
  if (!rect) return null;

  const width = Math.max(rect.width + pad * 2, 24);
  const height = Math.max(rect.height + pad * 2, 20);
  const left = rect.left - pad;
  const top = rect.top - pad;

  return (
    <div
      style={{
        left,
        top,
        width,
        height,
        transformOrigin: 'top left',
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
        opacity: visible ? 1 : 0,
        borderColor: active ? borderRgba : 'rgba(255, 255, 255, 0.14)',
        borderStyle: active ? 'solid' : 'dashed',
        boxShadow: active ? `0 0 0 1px ${glowRgba}` : 'none',
        transition: `transform ${durationMs}ms ${EASE_CSS}, opacity 380ms ${EASE_CSS}, border-color 280ms ease`,
      }}
      className="pointer-events-none fixed rounded-[4px] border will-change-transform"
    >
      {/* Layer tag */}
      <span
        style={{
          color: active ? color : 'rgba(161, 161, 170, 0.55)',
          opacity: visible ? 1 : 0,
          transition: `opacity 300ms ${EASE_CSS}, color 250ms ease`,
        }}
        className="absolute -top-5 left-0 whitespace-nowrap font-mono text-[10px] font-medium tracking-wider"
      >
        {label}
      </span>

      {/* Corner resize handles (shown prominently when active) */}
      {active && (
        <>
          <span
            style={{ borderColor: color }}
            className="absolute -left-[3.5px] -top-[3.5px] h-[7px] w-[7px] rounded-[1px] border-[1.5px] bg-[#050508]"
          />
          <span
            style={{ borderColor: color }}
            className="absolute -right-[3.5px] -top-[3.5px] h-[7px] w-[7px] rounded-[1px] border-[1.5px] bg-[#050508]"
          />
          <span
            style={{ borderColor: color }}
            className="absolute -bottom-[3.5px] -left-[3.5px] h-[7px] w-[7px] rounded-[1px] border-[1.5px] bg-[#050508]"
          />
          <span
            style={{ borderColor: color }}
            className="absolute -bottom-[3.5px] -right-[3.5px] h-[7px] w-[7px] rounded-[1px] border-[1.5px] bg-[#050508]"
          />
        </>
      )}

      {/* Dynamic W × H px badge */}
      {active && dimText && (
        <span
          className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-[1px] font-mono text-[9px] font-semibold tracking-wide shadow-sm ${badgeClass}`}
        >
          {dimText}
        </span>
      )}
    </div>
  );
}

function CollabIntroOverlayInner() {
  const { language } = useLanguage();
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [rects, setRects] = useState(null);

  // Canvas & element states
  const [gridVisible, setGridVisible] = useState(false);
  const [wireframesVisible, setWireframesVisible] = useState(false);
  const [activeFrames, setActiveFrames] = useState({
    title: false,
    subtitle: false,
    badge: false,
    cta: false,
    navbar: false,
  });

  // Live title drag & subtitle resize state (mirrored on both real DOM and Figma frame)
  const [titleOffset, setTitleOffset] = useState({ x: 0, y: 0, dur: 0 });
  const [subtitleScale, setSubtitleScale] = useState({ sx: 1, sy: 1, dur: 0 });
  const [subtitleDim, setSubtitleDim] = useState('');

  // Snap guides state
  const [snapGuides, setSnapGuides] = useState({
    verticalAxis: false,
    titleHoriz: false,
    ctaHoriz: false,
    gapLabel: null,
  });

  // Backend typing reveal & momentary text selection
  const [badgeMask, setBadgeMask] = useState({
    visible: false,
    scaleX: 1,
    caretProgress: 0,
    typing: false,
    dur: 0,
  });
  const [quoteSelection, setQuoteSelection] = useState({
    visible: false,
    scaleX: 0,
    dur: 0,
  });

  // Figma collaborative comment bubble (Phase 3)
  const [commentState, setCommentState] = useState({
    status: 'hidden', // 'hidden' | 'open' | 'resolved' | 'closing'
    x: 0,
    y: 0,
  });

  // Multiplayer cursor positions & transitions
  const [cursors, setCursors] = useState({});
  // Click ripples
  const [ripples, setRipples] = useState([]);

  // Track timers, RAFs, and modified real DOM elements for spotless cleanup
  const timersRef = useRef([]);
  const rafsRef = useRef([]);
  const touchedElementsRef = useRef(new Set());
  const cleanedUpRef = useRef(false);

  const restoreAllInlineStyles = useCallback(() => {
    touchedElementsRef.current.forEach((el) => {
      if (!el) return;
      el.style.removeProperty('transform');
      el.style.removeProperty('transform-origin');
      el.style.removeProperty('transition');
      el.style.removeProperty('opacity');
      el.style.removeProperty('will-change');
      el.classList.remove(
        'collab-qa-hover-amber',
        'collab-qa-hover-primary',
        'collab-qa-hover-secondary'
      );
    });
    touchedElementsRef.current.clear();
  }, []);

  const clearScheduledWork = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    rafsRef.current.forEach((id) => window.cancelAnimationFrame(id));
    rafsRef.current = [];
  }, []);

  const finishAndCleanup = useCallback(() => {
    if (cleanedUpRef.current) return;
    cleanedUpRef.current = true;
    clearScheduledWork();
    restoreAllInlineStyles();
    setActive(false);
  }, [clearScheduledWork, restoreAllInlineStyles]);

  // ESC key handler for immediate skip
  useEffect(() => {
    if (!active) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        finishAndCleanup();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, finishAndCleanup]);

  // Main 10-second 4-phase choreography
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    try {
      if (
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return undefined;
      }
    } catch {
      // Continue safely if matchMedia is unavailable
    }

    cleanedUpRef.current = false;

    const schedule = (ms, fn) => {
      const id = window.setTimeout(() => {
        if (cleanedUpRef.current) return;
        try {
          fn();
        } catch {
          finishAndCleanup();
        }
      }, ms);
      timersRef.current.push(id);
      return id;
    };

    const touchEl = (el) => {
      if (el) touchedElementsRef.current.add(el);
      return el;
    };

    const triggerRipple = (x, y, color) => {
      const id = `${Date.now()}-${Math.random()}`;
      setRipples((prev) => [...prev, { id, x, y, color }]);
      schedule(520, () => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      });
    };

    const moveCursor = (id, x, y, dur = 600, opacity = 1) => {
      setCursors((prev) => ({
        ...prev,
        [id]: { x, y, dur, opacity },
      }));
    };

    const startRaf = window.requestAnimationFrame(() => {
      if (cleanedUpRef.current) return;

      try {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const mobile = vw < 768;
        setIsMobile(mobile);

        const getEl = (name) =>
          document.querySelector(`[data-collab-target="${name}"]`);

        const titleEl = touchEl(getEl('title'));
        const subtitleEl = touchEl(getEl('subtitle-block'));
        const badgeEl = touchEl(getEl('badge'));
        const badgeTextEl = getEl('badge-text');
        const quoteEl = getEl('quote');
        const ctaEl = getEl('cta');
        const ctaPrimaryEl = touchEl(getEl('cta-primary'));
        const ctaSecondaryEl = touchEl(getEl('cta-secondary'));
        const navbarEl = touchEl(getEl('navbar'));
        const langEl = touchEl(getEl('lang-switcher'));

        if (!titleEl || !ctaEl) return;

        const titleRect = getFinalViewportRect(titleEl);
        const ctaRect = getFinalViewportRect(ctaEl);
        if (
          !titleRect ||
          !ctaRect ||
          titleRect.width <= 0 ||
          ctaRect.width <= 0
        ) {
          return;
        }

        const measured = {
          title: titleRect,
          subtitle: subtitleEl ? getFinalViewportRect(subtitleEl) : null,
          badge: badgeEl ? getFinalViewportRect(badgeEl) : null,
          badgeText: badgeTextEl ? getFinalViewportRect(badgeTextEl) : null,
          quote: quoteEl ? getFinalViewportRect(quoteEl) : null,
          cta: ctaRect,
          ctaPrimary: ctaPrimaryEl ? getFinalViewportRect(ctaPrimaryEl) : null,
          ctaSecondary: ctaSecondaryEl
            ? getFinalViewportRect(ctaSecondaryEl)
            : null,
          navbar: navbarEl ? getFinalViewportRect(navbarEl) : null,
          lang: langEl ? getFinalViewportRect(langEl) : null,
        };

      setRects(measured);
      setActive(true);

      // Helper for dynamic subtitle dimension animation
      const animateSubtitleDim = (fromSx, toSx, fromSy, toSy, durationMs) => {
        if (!measured.subtitle) return;
        const start = performance.now();
        const tick = (now) => {
          if (cleanedUpRef.current) return;
          const t = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const curW = Math.round(
            measured.subtitle.width * (fromSx + (toSx - fromSx) * eased)
          );
          const curH = Math.round(
            measured.subtitle.height * (fromSy + (toSy - fromSy) * eased)
          );
          setSubtitleDim(`${curW} × ${curH} px`);
          if (t < 1) {
            const rid = window.requestAnimationFrame(tick);
            rafsRef.current.push(rid);
          }
        };
        const rid = window.requestAnimationFrame(tick);
        rafsRef.current.push(rid);
      };

      // ================================================================
      // PHASE 1 (0.0s – 2.2s) · Preparación del lienzo
      // ================================================================
      const initDx = mobile ? -16 : -34;
      const initDy = mobile ? -10 : -18;

      // Prepare displaced Title & slightly compressed Subtitle for live build
      titleEl.style.willChange = 'transform, opacity';
      titleEl.style.transition = 'none';
      titleEl.style.transform = `translate3d(${initDx}px, ${initDy}px, 0)`;
      titleEl.style.opacity = '0.45';
      setTitleOffset({ x: initDx, y: initDy, dur: 0 });

      if (subtitleEl && measured.subtitle) {
        subtitleEl.style.willChange = 'transform, opacity';
        subtitleEl.style.transformOrigin = 'top left';
        subtitleEl.style.transition = 'none';
        subtitleEl.style.transform = 'scale3d(0.92, 0.96, 1)';
        subtitleEl.style.opacity = '0.5';
        setSubtitleScale({ sx: 0.92, sy: 0.96, dur: 0 });
        setSubtitleDim(
          `${Math.round(measured.subtitle.width * 0.92)} × ${Math.round(
            measured.subtitle.height * 0.96
          )} px`
        );
      }

      if (badgeEl && !mobile) {
        badgeEl.style.opacity = '0.65';
        setBadgeMask({
          visible: true,
          scaleX: 1,
          caretProgress: 0,
          typing: false,
          dur: 0,
        });
      }

      // Fade in design grid + wireframe contours
      schedule(60, () => {
        setGridVisible(true);
        setWireframesVisible(true);
      });

      // Spawn cursors off-screen at edges
      const initCursors = {
        marck: { x: vw + 36, y: vh * 0.24, dur: 0, opacity: 0 },
        design: { x: -48, y: vh * 0.72, dur: 0, opacity: 0 },
      };
      if (!mobile) {
        initCursors.backend = { x: -40, y: vh * 0.14, dur: 0, opacity: 0 };
        initCursors.qa = { x: vw * 0.84, y: -36, dur: 0, opacity: 0 };
      }
      setCursors(initCursors);

      // Staggered organic entry + exploratory movements (0.2s -> 2.1s)
      const titleGrabX =
        measured.title.left + Math.min(measured.title.width * 0.56, mobile ? 160 : 250);
      const titleGrabY = measured.title.top + measured.title.height * 0.44;

      schedule(200, () => {
        moveCursor(
          'marck',
          mobile ? vw * 0.76 : vw * 0.72,
          mobile ? vh * 0.28 : vh * 0.26,
          720,
          1
        );
      });
      schedule(1120, () => {
        moveCursor(
          'marck',
          titleGrabX + initDx + 22,
          titleGrabY + initDy - 14,
          520,
          1
        );
      });
      schedule(1820, () => {
        moveCursor('marck', titleGrabX + initDx, titleGrabY + initDy, 340, 1);
      });

      // UI / Design entry toward subtitle corner handle
      const subRight = measured.subtitle
        ? measured.subtitle.left + measured.subtitle.width * 0.92 + 8
        : measured.cta.left + 120;
      const subBottom = measured.subtitle
        ? measured.subtitle.top + measured.subtitle.height * 0.96 + 8
        : measured.cta.top - 20;

      schedule(450, () => {
        moveCursor(
          'design',
          mobile ? vw * 0.28 : vw * 0.2,
          mobile ? vh * 0.68 : vh * 0.64,
          700,
          1
        );
      });
      schedule(1350, () => {
        moveCursor('design', subRight + 24, subBottom + 18, 480, 1);
      });
      schedule(1980, () => {
        moveCursor('design', subRight, subBottom, 280, 1);
      });

      // Desktop-only Backend & QA entry
      if (!mobile) {
        if (measured.badge) {
          const badgeClickX = measured.badge.left + 44;
          const badgeClickY = measured.badge.top + measured.badge.height * 0.5;
          schedule(700, () => {
            moveCursor('backend', vw * 0.22, vh * 0.16, 650, 1);
          });
          schedule(1550, () => {
            moveCursor('backend', badgeClickX, badgeClickY, 480, 1);
          });
        }

        if (measured.navbar) {
          schedule(950, () => {
            moveCursor(
              'qa',
              measured.navbar.left + measured.navbar.width * 0.52,
              measured.navbar.top + measured.navbar.height * 0.55,
              720,
              1
            );
          });
          schedule(1850, () => {
            moveCursor(
              'qa',
              measured.navbar.left + measured.navbar.width * 0.68,
              measured.navbar.top + measured.navbar.height * 0.5,
              340,
              1
            );
          });
        }
      }

      // ================================================================
      // PHASE 2 (2.2s – 5.8s) · Armado y ajuste en vivo
      // ================================================================

      // --- CURSOR 1 (Marck · Dev): Grab Title -> drag -> 300ms pause -> micro-adjust -> SNAP! ---
      schedule(2200, () => {
        triggerRipple(titleGrabX + initDx, titleGrabY + initDy, CURSOR_META.marck.color);
        setActiveFrames((prev) => ({ ...prev, title: true }));
      });

      // Drag 1: (-34, -18) -> (-6, -3)
      const midDx = mobile ? -4 : -6;
      const midDy = mobile ? -2 : -3;
      schedule(2350, () => {
        titleEl.style.transition = `transform 750ms ${EASE_CSS}, opacity 500ms ${EASE_CSS}`;
        titleEl.style.transform = `translate3d(${midDx}px, ${midDy}px, 0)`;
        titleEl.style.opacity = '1';
        setTitleOffset({ x: midDx, y: midDy, dur: 750 });
        moveCursor('marck', titleGrabX + midDx, titleGrabY + midDy, 750, 1);
      });

      // 300ms human pause (3100ms -> 3400ms), then micro-adjustment to exact (0, 0) + snap guides
      schedule(3400, () => {
        titleEl.style.transition = `transform 420ms ${EASE_CSS}`;
        titleEl.style.transform = 'translate3d(0px, 0px, 0)';
        setTitleOffset({ x: 0, y: 0, dur: 420 });
        moveCursor('marck', titleGrabX, titleGrabY, 420, 1);
      });

      schedule(3780, () => {
        const gapPx = measured.badge
          ? Math.max(
              0,
              Math.round(
                measured.title.top - (measured.badge.top + measured.badge.height)
              )
            )
          : 24;
        setSnapGuides((prev) => ({
          ...prev,
          verticalAxis: true,
          titleHoriz: true,
          gapLabel: `${gapPx} px`,
        }));
      });

      schedule(4550, () => {
        setSnapGuides((prev) => ({ ...prev, titleHoriz: false }));
      });

      // --- CURSOR 2 (UI / Design): Resize subtitle via corner handle + live W×H -> align CTA ---
      if (subtitleEl && measured.subtitle) {
        const expandedSx = mobile ? 1.02 : 1.035;
        const expandedSy = 1.02;
        const expandedX =
          measured.subtitle.left + measured.subtitle.width * expandedSx + 8;
        const expandedY =
          measured.subtitle.top + measured.subtitle.height * expandedSy + 8;
        const finalSubX = measured.subtitle.left + measured.subtitle.width + 8;
        const finalSubY = measured.subtitle.top + measured.subtitle.height + 8;

        schedule(2300, () => {
          triggerRipple(subRight, subBottom, CURSOR_META.design.color);
          setActiveFrames((prev) => ({ ...prev, subtitle: true }));
        });

        schedule(2450, () => {
          subtitleEl.style.transition = `transform 580ms ${EASE_CSS}, opacity 450ms ${EASE_CSS}`;
          subtitleEl.style.transform = `scale3d(${expandedSx}, ${expandedSy}, 1)`;
          subtitleEl.style.opacity = '1';
          setSubtitleScale({ sx: expandedSx, sy: expandedSy, dur: 580 });
          animateSubtitleDim(0.92, expandedSx, 0.96, expandedSy, 580);
          moveCursor('design', expandedX, expandedY, 580, 1);
        });

        // 250ms pause (3030ms -> 3280ms), then lock to exact 1.0 × 1.0
        schedule(3280, () => {
          subtitleEl.style.transition = `transform 420ms ${EASE_CSS}`;
          subtitleEl.style.transform = 'scale3d(1, 1, 1)';
          setSubtitleScale({ sx: 1, sy: 1, dur: 420 });
          animateSubtitleDim(expandedSx, 1, expandedSy, 1, 420);
          moveCursor('design', finalSubX, finalSubY, 420, 1);
        });
      }

      // Move UI / Design to align CTA buttons (3.95s -> 5.1s)
      const ctaAlignX =
        measured.cta.left + Math.min(measured.cta.width * 0.55, mobile ? 160 : 230);
      const ctaAlignY = measured.cta.top + measured.cta.height * 0.5;

      schedule(3950, () => {
        setActiveFrames((prev) => ({ ...prev, subtitle: false }));
        moveCursor('design', ctaAlignX, ctaAlignY, 580, 1);
      });

      schedule(4580, () => {
        triggerRipple(ctaAlignX, ctaAlignY, CURSOR_META.design.color);
        setActiveFrames((prev) => ({ ...prev, cta: true }));
        setSnapGuides((prev) => ({
          ...prev,
          verticalAxis: true,
          ctaHoriz: true,
        }));
      });

      schedule(5350, () => {
        setSnapGuides((prev) => ({ ...prev, ctaHoriz: false }));
      });

      // --- CURSOR 3 (Backend, Desktop): Click Badge -> typewriter reveal -> text selection on Quote ---
      if (!mobile && measured.badge && badgeEl) {
        const badgeClickX = measured.badge.left + 44;
        const badgeClickY = measured.badge.top + measured.badge.height * 0.5;

        schedule(2400, () => {
          triggerRipple(badgeClickX, badgeClickY, CURSOR_META.backend.color);
          setActiveFrames((prev) => ({ ...prev, badge: true }));
          badgeEl.style.transition = `opacity 350ms ${EASE_CSS}`;
          badgeEl.style.opacity = '1';
        });

        // Typewriter left-to-right sweep reveal on badge text
        schedule(2560, () => {
          setBadgeMask({
            visible: true,
            scaleX: 0,
            caretProgress: 1,
            typing: true,
            dur: 1220,
          });
          if (measured.badgeText) {
            moveCursor(
              'backend',
              measured.badgeText.left + measured.badgeText.width + 6,
              measured.badgeText.top + measured.badgeText.height * 0.55,
              1220,
              1
            );
          }
        });

        schedule(3850, () => {
          setBadgeMask((prev) => ({ ...prev, visible: false, typing: false }));
        });

        // 300ms pause, then inspect Quote with momentary text selection
        if (measured.quote) {
          const quoteStartX = measured.quote.left + 4;
          const quoteEndX =
            measured.quote.left + Math.min(measured.quote.width * 0.82, 340);
          const quoteMidY = measured.quote.top + measured.quote.height * 0.52;

          schedule(4150, () => {
            setActiveFrames((prev) => ({ ...prev, badge: false }));
            moveCursor('backend', quoteStartX, quoteMidY, 440, 1);
          });

          schedule(4640, () => {
            triggerRipple(quoteStartX, quoteMidY, CURSOR_META.backend.color);
            setQuoteSelection({ visible: true, scaleX: 0, dur: 0 });
          });

          schedule(4720, () => {
            setQuoteSelection({ visible: true, scaleX: 1, dur: 640 });
            moveCursor('backend', quoteEndX, quoteMidY, 640, 1);
          });

          schedule(5650, () => {
            setQuoteSelection((prev) => ({ ...prev, visible: false }));
          });
        }
      }

      // --- CURSOR 4 (QA, Desktop): Sweep Navbar + ES//EN + CTAs with real hover & gentle click pulses ---
      if (!mobile) {
        schedule(2450, () => {
          setActiveFrames((prev) => ({ ...prev, navbar: true }));
        });

        if (measured.lang && langEl) {
          const langX = measured.lang.left + measured.lang.width * 0.5;
          const langY = measured.lang.top + measured.lang.height * 0.55;

          schedule(2550, () => {
            moveCursor('qa', langX, langY, 550, 1);
          });

          // Hover + simulated soft press on ES // EN
          schedule(3120, () => {
            langEl.classList.add('collab-qa-hover-amber');
            langEl.style.transition = `transform 160ms ${EASE_CSS}`;
            langEl.style.transform = 'scale3d(0.95, 0.95, 1)';
            triggerRipple(langX, langY, CURSOR_META.qa.color);
          });

          schedule(3320, () => {
            langEl.style.transform = 'scale3d(1, 1, 1)';
          });

          schedule(3580, () => {
            langEl.classList.remove('collab-qa-hover-amber');
            setActiveFrames((prev) => ({ ...prev, navbar: false }));
          });
        }

        // Sweep to Primary CTA
        if (measured.ctaPrimary && ctaPrimaryEl) {
          const pX = measured.ctaPrimary.left + measured.ctaPrimary.width * 0.52;
          const pY = measured.ctaPrimary.top + measured.ctaPrimary.height * 0.52;

          schedule(3650, () => {
            moveCursor('qa', pX, pY, 620, 1);
          });

          schedule(4300, () => {
            ctaPrimaryEl.classList.add('collab-qa-hover-primary');
            ctaPrimaryEl.style.transition = `transform 160ms ${EASE_CSS}`;
            ctaPrimaryEl.style.transform = 'scale3d(0.97, 0.97, 1)';
            triggerRipple(pX, pY, CURSOR_META.qa.color);
          });

          schedule(4500, () => {
            ctaPrimaryEl.style.transform = 'scale3d(1.02, 1.02, 1)';
          });

          schedule(4720, () => {
            ctaPrimaryEl.style.transform = 'scale3d(1, 1, 1)';
            ctaPrimaryEl.classList.remove('collab-qa-hover-primary');
          });
        }

        // Hop to Secondary CTA
        if (measured.ctaSecondary && ctaSecondaryEl) {
          const sX =
            measured.ctaSecondary.left + measured.ctaSecondary.width * 0.5;
          const sY =
            measured.ctaSecondary.top + measured.ctaSecondary.height * 0.52;

          schedule(4780, () => {
            moveCursor('qa', sX, sY, 420, 1);
          });

          schedule(5230, () => {
            ctaSecondaryEl.classList.add('collab-qa-hover-secondary');
            ctaSecondaryEl.style.transition = `transform 160ms ${EASE_CSS}`;
            ctaSecondaryEl.style.transform = 'scale3d(0.97, 0.97, 1)';
            triggerRipple(sX, sY, CURSOR_META.qa.color);
          });

          schedule(5440, () => {
            ctaSecondaryEl.style.transform = 'scale3d(1, 1, 1)';
          });

          schedule(5680, () => {
            ctaSecondaryEl.classList.remove('collab-qa-hover-secondary');
          });
        }
      }

      // ================================================================
      // PHASE 3 (5.8s – 8.5s) · Revisión en equipo (toque Figma)
      // ================================================================
      const commentX = mobile
        ? Math.min(vw - 258, Math.max(12, measured.title.left + 24))
        : Math.min(
            vw - 274,
            measured.title.left + Math.min(measured.title.width * 0.72, 420)
          );
      const commentY = Math.max(76, measured.title.top - (mobile ? 10 : 8));
      const resolveBtnX = commentX + 206;
      const resolveBtnY = commentY + 76;

      // Rotate zones for peer review
      schedule(5820, () => {
        setActiveFrames({
          title: true,
          subtitle: false,
          badge: false,
          cta: false,
          navbar: false,
        });
        setSnapGuides((prev) => ({ ...prev, verticalAxis: false, gapLabel: null }));

        // UI / Design moves near Title to leave comment
        moveCursor('design', commentX + 10, commentY + 12, 540, 1);
        // Marck moves down to check CTA
        moveCursor(
          'marck',
          measured.cta.left + Math.min(measured.cta.width * 0.35, 130),
          measured.cta.top + measured.cta.height * 0.5,
          560,
          1
        );
        if (!mobile && measured.subtitle) {
          moveCursor(
            'backend',
            measured.subtitle.left + measured.subtitle.width * 0.65,
            measured.subtitle.top + measured.subtitle.height * 0.45,
            580,
            1
          );
        }
        if (!mobile && measured.badge) {
          moveCursor(
            'qa',
            measured.badge.left + measured.badge.width * 0.78,
            measured.badge.top + measured.badge.height * 0.5,
            580,
            1
          );
        }
      });

      // UI / Design clicks & opens Figma comment bubble (6.42s)
      schedule(6420, () => {
        triggerRipple(commentX + 10, commentY + 12, CURSOR_META.design.color);
        setCommentState({ status: 'open', x: commentX, y: commentY });
      });

      // UI / Design steps slightly aside while Marck glides to resolve it (6.82s)
      schedule(6820, () => {
        moveCursor('design', commentX - 26, commentY - 18, 420, 1);
        moveCursor('marck', resolveBtnX, resolveBtnY, 640, 1);
      });

      // Marck clicks Resolve on the comment bubble (7.55s)
      schedule(7550, () => {
        triggerRipple(resolveBtnX, resolveBtnY, CURSOR_META.marck.color);
        setCommentState((prev) => ({ ...prev, status: 'resolved' }));
      });

      // Bubble closes cleanly (7.95s -> 8.38s)
      schedule(7950, () => {
        setCommentState((prev) => ({ ...prev, status: 'closing' }));
      });

      schedule(8380, () => {
        setCommentState((prev) => ({ ...prev, status: 'hidden' }));
      });

      // ================================================================
      // PHASE 4 (8.5s – 10.0s) · Cierre y salida limpia
      // ================================================================
      schedule(8500, () => {
        setGridVisible(false);
        setWireframesVisible(false);
        setActiveFrames({
          title: false,
          subtitle: false,
          badge: false,
          cta: false,
          navbar: false,
        });
        setSnapGuides({
          verticalAxis: false,
          titleHoriz: false,
          ctaHoriz: false,
          gapLabel: null,
        });
      });

      // Staggered fluid exit of all cursors using translate3d
      schedule(8680, () => {
        moveCursor('marck', vw + 64, vh * 0.16, 820, 0);
      });
      schedule(8820, () => {
        moveCursor('design', -90, vh * 0.78, 820, 0);
      });
      if (!mobile) {
        schedule(8940, () => {
          moveCursor('backend', -90, vh * 0.22, 820, 0);
        });
        schedule(9060, () => {
          moveCursor('qa', vw + 64, -50, 820, 0);
        });
      }

      // Exact 10.0s completion & full inline style restoration
      schedule(TOTAL_DURATION_MS, () => {
        finishAndCleanup();
      });
      } catch {
        finishAndCleanup();
      }
    });

    rafsRef.current.push(startRaf);

    return () => {
      cleanedUpRef.current = true;
      clearScheduledWork();
      restoreAllInlineStyles();
    };
  }, [clearScheduledWork, finishAndCleanup, restoreAllInlineStyles]);

  if (!active || !rects) return null;

  const isEn = language === 'en';
  const commentText = isEn
    ? 'Aligned ✓ · Ready for prod'
    : 'Alineado ✓ · Listo para prod';
  const resolveLabel =
    commentState.status === 'resolved'
      ? isEn
        ? 'Resolved ✓'
        : 'Resuelto ✓'
      : isEn
        ? 'Resolve'
        : 'Resolver';
  const skipLabel = isEn ? 'Skip intro' : 'Saltar intro';

  const axisX = rects.title.left;
  const axisTop = rects.badge ? rects.badge.top - 22 : rects.title.top - 22;
  const axisBottom = rects.cta.top + rects.cta.height + 24;

  const titleDim = `${Math.round(rects.title.width)} × ${Math.round(
    rects.title.height
  )} px`;
  const ctaDim = `${Math.round(rects.cta.width)} × ${Math.round(
    rects.cta.height
  )} px`;
  const badgeDim = rects.badge
    ? `${Math.round(rects.badge.width)} × ${Math.round(rects.badge.height)} px`
    : '';
  const navDim = rects.navbar
    ? `${Math.round(rects.navbar.width)} × ${Math.round(rects.navbar.height)} px`
    : '';

  return (
    <>
      <div
        aria-hidden="true"
        className="collab-intro-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden select-none"
      >
        {/* Phase 1 Technical Design Grid Overlay */}
        <div
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: `opacity 600ms ${EASE_CSS}`,
          }}
          className="collab-canvas-grid pointer-events-none fixed inset-0"
        />

        {/* Subtle Snap Alignment Guides */}
        <div
          style={{
            left: axisX,
            top: Math.max(0, axisTop),
            height: Math.max(120, axisBottom - Math.max(0, axisTop)),
            opacity: snapGuides.verticalAxis ? 0.8 : 0,
            transform: `scale3d(1, ${snapGuides.verticalAxis ? 1 : 0.7}, 1)`,
            transformOrigin: 'top center',
            transition: `opacity 320ms ${EASE_CSS}, transform 420ms ${EASE_CSS}`,
          }}
          className="pointer-events-none fixed w-px border-l border-dashed border-rose-500/75"
        >
          {snapGuides.gapLabel && rects.badge && (
            <span
              style={{
                top: Math.max(
                  12,
                  rects.badge.top +
                    rects.badge.height -
                    Math.max(0, axisTop) +
                    2
                ),
              }}
              className="absolute left-2 whitespace-nowrap rounded bg-rose-500/90 px-1.5 py-[1px] font-mono text-[9px] font-semibold text-white shadow-sm"
            >
              {snapGuides.gapLabel}
            </span>
          )}
        </div>

        {/* Horizontal snap line for Title */}
        <div
          style={{
            top: rects.title.top - 10,
            left: Math.max(0, rects.title.left - (isMobile ? 16 : 56)),
            width: rects.title.width + (isMobile ? 32 : 120),
            opacity: snapGuides.titleHoriz ? 0.75 : 0,
            transform: `scale3d(${snapGuides.titleHoriz ? 1 : 0.6}, 1, 1)`,
            transformOrigin: 'left center',
            transition: `opacity 300ms ${EASE_CSS}, transform 380ms ${EASE_CSS}`,
          }}
          className="pointer-events-none fixed h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"
        />

        {/* Horizontal snap line for CTA */}
        <div
          style={{
            top: rects.cta.top - 8,
            left: Math.max(0, rects.cta.left - (isMobile ? 12 : 48)),
            width: rects.cta.width + (isMobile ? 24 : 110),
            opacity: snapGuides.ctaHoriz ? 0.75 : 0,
            transform: `scale3d(${snapGuides.ctaHoriz ? 1 : 0.6}, 1, 1)`,
            transformOrigin: 'left center',
            transition: `opacity 300ms ${EASE_CSS}, transform 380ms ${EASE_CSS}`,
          }}
          className="pointer-events-none fixed h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"
        />

        {/* Figma Selection & Wireframe Boxes */}
        <FigmaBox
          rect={rects.title}
          pad={10}
          visible={wireframesVisible}
          active={activeFrames.title}
          label="Hero / Display Title"
          dimText={titleDim}
          color={CURSOR_META.marck.color}
          borderRgba={CURSOR_META.marck.borderRgba}
          glowRgba={CURSOR_META.marck.glowRgba}
          badgeClass={CURSOR_META.marck.badgeClass}
          offsetX={titleOffset.x}
          offsetY={titleOffset.y}
          durationMs={titleOffset.dur}
        />

        {rects.subtitle && (
          <FigmaBox
            rect={rects.subtitle}
            pad={8}
            visible={wireframesVisible}
            active={activeFrames.subtitle}
            label="Auto Layout · Copy"
            dimText={subtitleDim}
            color={CURSOR_META.design.color}
            borderRgba={CURSOR_META.design.borderRgba}
            glowRgba={CURSOR_META.design.glowRgba}
            badgeClass={CURSOR_META.design.badgeClass}
            scaleX={subtitleScale.sx}
            scaleY={subtitleScale.sy}
            durationMs={subtitleScale.dur}
          />
        )}

        <FigmaBox
          rect={rects.cta}
          pad={8}
          visible={wireframesVisible}
          active={activeFrames.cta}
          label="Auto Layout · CTA"
          dimText={ctaDim}
          color={CURSOR_META.design.color}
          borderRgba={CURSOR_META.design.borderRgba}
          glowRgba={CURSOR_META.design.glowRgba}
          badgeClass={CURSOR_META.design.badgeClass}
        />

        {!isMobile && rects.badge && (
          <FigmaBox
            rect={rects.badge}
            pad={6}
            visible={wireframesVisible}
            active={activeFrames.badge}
            label="Auto Layout · Status"
            dimText={badgeDim}
            color={CURSOR_META.backend.color}
            borderRgba={CURSOR_META.backend.borderRgba}
            glowRgba={CURSOR_META.backend.glowRgba}
            badgeClass={CURSOR_META.backend.badgeClass}
          />
        )}

        {!isMobile && rects.navbar && (
          <FigmaBox
            rect={rects.navbar}
            pad={4}
            visible={wireframesVisible}
            active={activeFrames.navbar}
            label="Nav · Fixed Top"
            dimText={navDim}
            color={CURSOR_META.qa.color}
            borderRgba={CURSOR_META.qa.borderRgba}
            glowRgba={CURSOR_META.qa.glowRgba}
            badgeClass={CURSOR_META.qa.badgeClass}
          />
        )}

        {/* Backend Typewriter Reveal Mask over Badge Text (100% GPU transform) */}
        {!isMobile && rects.badgeText && badgeMask.visible && (
          <div
            style={{
              left: rects.badgeText.left - 2,
              top: rects.badgeText.top - 1,
              width: rects.badgeText.width + 6,
              height: rects.badgeText.height + 2,
              transformOrigin: 'right center',
              transform: `scale3d(${badgeMask.scaleX}, 1, 1)`,
              transition: `transform ${badgeMask.dur}ms linear`,
            }}
            className="pointer-events-none fixed rounded-sm bg-[#0D0D14]/95 will-change-transform"
          >
            {badgeMask.typing && (
              <span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-400 shadow-[0_0_8px_#10B981]" />
            )}
          </div>
        )}

        {/* Backend Momentary Text Selection Highlight on Quote */}
        {!isMobile && rects.quote && (
          <div
            style={{
              left: rects.quote.left,
              top: rects.quote.top - 1,
              width: Math.min(rects.quote.width * 0.82, 340),
              height: rects.quote.height + 2,
              transformOrigin: 'left center',
              transform: `scale3d(${quoteSelection.scaleX}, 1, 1)`,
              opacity: quoteSelection.visible ? 1 : 0,
              transition: `transform ${quoteSelection.dur}ms ${EASE_CSS}, opacity 240ms ease`,
            }}
            className="pointer-events-none fixed rounded-[2px] border-r-2 border-emerald-400 bg-emerald-500/20 will-change-transform"
          />
        )}

        {/* Phase 3: Minimalist Figma Comment Pin & Bubble */}
        {commentState.status !== 'hidden' && (
          <div
            style={{
              left: commentState.x,
              top: commentState.y,
              opacity: commentState.status === 'closing' ? 0 : 1,
              transform:
                commentState.status === 'closing'
                  ? 'translate3d(0, -6px, 0) scale3d(0.9, 0.9, 1)'
                  : 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
              transition: `transform 360ms ${EASE_CSS}, opacity 320ms ${EASE_CSS}`,
            }}
            className="pointer-events-none fixed z-30 flex items-start gap-2 will-change-transform"
          >
            {/* Teardrop Figma Pin */}
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full rounded-bl-[2px] border border-violet-300/60 bg-violet-600 text-white shadow-[0_4px_16px_rgba(124,58,237,0.45)]">
              <MessageSquare className="h-3 w-3" />
            </div>

            {/* Comment Card */}
            <div className="w-[216px] rounded-xl border border-white/15 bg-[#0D0D14]/95 p-3 shadow-[0_14px_36px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  <span className="font-mono text-[10px] font-semibold text-white">
                    UI / Design
                  </span>
                </div>
                <span className="font-mono text-[9px] text-zinc-500">
                  {isEn ? 'now' : 'ahora'}
                </span>
              </div>

              <p className="font-sans text-xs text-zinc-200">{commentText}</p>

              <div className="mt-2.5 flex justify-end">
                <span
                  className={`inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 font-mono text-[10px] font-medium transition-colors duration-200 ${
                    commentState.status === 'resolved'
                      ? 'border-emerald-400/60 bg-emerald-500/20 text-emerald-300'
                      : 'border-white/15 bg-white/[0.05] text-zinc-300'
                  }`}
                >
                  <Check className="h-3 w-3" />
                  {resolveLabel}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Click Pulses / Ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              left: ripple.x - 14,
              top: ripple.y - 14,
              borderColor: ripple.color,
            }}
            className="pointer-events-none fixed z-40 h-7 w-7 animate-ping rounded-full border-2 opacity-75"
          />
        ))}

        {/* Multiplayer Cursors (pure translate3d + opacity) */}
        {Object.entries(cursors).map(([id, state]) => {
          const meta = CURSOR_META[id];
          if (!meta) return null;
          return (
            <div
              key={id}
              style={{
                transform: `translate3d(${state.x}px, ${state.y}px, 0)`,
                opacity: state.opacity,
                transition: `transform ${state.dur}ms ${EASE_CSS}, opacity 360ms ${EASE_CSS}`,
              }}
              className="pointer-events-none fixed left-0 top-0 z-50 will-change-transform"
            >
              <CursorArrowSvg color={meta.color} />
              <div
                className={`ml-3.5 -mt-1 inline-flex items-center whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide shadow-[0_6px_18px_rgba(0,0,0,0.6)] backdrop-blur-sm ${meta.pillClass}`}
              >
                {meta.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Discreet Skip Button (pointer-events-auto) */}
      <button
        type="button"
        onClick={finishAndCleanup}
        className="collab-intro-layer pointer-events-auto fixed bottom-5 right-5 z-[70] inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-[#0D0D14]/90 px-3.5 py-2 font-mono text-[11px] tracking-wide text-zinc-300 shadow-[0_8px_28px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-200 hover:border-blue-500/50 hover:text-white"
      >
        <span>{skipLabel}</span>
        <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-zinc-400">
          ESC
        </kbd>
      </button>
    </>
  );
}

export default function CollabIntroOverlay() {
  return (
    <IntroErrorBoundary>
      <CollabIntroOverlayInner />
    </IntroErrorBoundary>
  );
}
