"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export interface BusinessValue {
  /** "search" while typing, "selected" after picking a Google result, "manual" for hand entry */
  mode: "search" | "selected" | "manual";
  businessName: string;
  /** Full normalised URL (https://…) or "" */
  website: string;
  /** Google Maps / GBP listing link, or "" in manual mode */
  mapsUri: string;
  placeId: string;
}

export const emptyBusinessValue: BusinessValue = {
  mode: "search",
  businessName: "",
  website: "",
  mapsUri: "",
  placeId: "",
};

interface Suggestion {
  placeId: string;
  mainText: string;
  secondaryText: string;
}

interface Props {
  value: BusinessValue;
  onChange: (v: BusinessValue) => void;
  required?: boolean;
}

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all";

function newSessionToken(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function BusinessAutocomplete({
  value,
  onChange,
  required,
}: Props) {
  const labelId = useId();
  const listboxId = `${labelId}-listbox`;

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const sessionTokenRef = useRef<string>(newSessionToken());

  // Close the dropdown when clicking outside the component.
  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  // Clean up any pending timer / request on unmount.
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const fetchSuggestions = useCallback((input: string) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);

    fetch("/api/places/autocomplete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input,
        sessionToken: sessionTokenRef.current,
      }),
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data.suggestions || []);
        setOpen(true);
        setActiveIndex(-1);
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          setSuggestions([]);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleInput = (text: string) => {
    // Typing always returns us to "search" mode and drops any prior selection.
    onChange({
      mode: "search",
      businessName: text,
      website: "",
      mapsUri: "",
      placeId: "",
    });

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (text.trim().length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(() => fetchSuggestions(text.trim()), 250);
  };

  const handleSelect = async (s: Suggestion) => {
    setOpen(false);
    setActiveIndex(-1);
    setSuggestions([]);

    // Optimistically show the name; fill the rest from Place Details.
    onChange({
      mode: "selected",
      businessName: s.mainText,
      website: "",
      mapsUri: "",
      placeId: s.placeId,
    });

    try {
      const res = await fetch("/api/places/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          placeId: s.placeId,
          sessionToken: sessionTokenRef.current,
        }),
      });
      const data = await res.json();
      onChange({
        mode: "selected",
        businessName: data.name || s.mainText,
        website: data.website || "",
        mapsUri: data.mapsUri || "",
        placeId: s.placeId,
      });
    } catch {
      // Keep the name even if details lookup fails, never block the lead.
    } finally {
      // A new session starts after each completed lookup.
      sessionTokenRef.current = newSessionToken();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        e.preventDefault();
        handleSelect(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  const switchToManual = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    abortRef.current?.abort();
    setOpen(false);
    setSuggestions([]);
    onChange({ ...value, mode: "manual", mapsUri: "", placeId: "" });
  };

  const switchToSearch = () => {
    onChange({ ...emptyBusinessValue });
  };

  // ── Manual entry mode ──────────────────────────────────────────────
  if (value.mode === "manual") {
    const bareWebsite = value.website.replace(/^https?:\/\//, "");
    return (
      <div>
        <label
          id={labelId}
          className="block text-[#C9D1D9] text-sm font-medium mb-2"
        >
          Google Business Profile
        </label>
        <input
          type="text"
          required={required}
          value={value.businessName}
          onChange={(e) =>
            onChange({ ...value, businessName: e.target.value })
          }
          placeholder="Your business name"
          className={`${inputClass} mb-3`}
          aria-labelledby={labelId}
        />
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg focus-within:border-[#00E676]/50 focus-within:ring-1 focus-within:ring-[#00E676]/30 transition-all overflow-hidden">
          <span className="px-3 py-3 text-[#8B949E] text-sm select-none border-r border-white/10 whitespace-nowrap">
            https://
          </span>
          <input
            type="text"
            value={bareWebsite}
            onChange={(e) => {
              const bare = e.target.value.replace(/^https?:\/\//, "");
              onChange({
                ...value,
                website: bare ? `https://${bare}` : "",
              });
            }}
            placeholder="yourbusiness.com"
            className="flex-1 bg-transparent px-3 py-3 text-white placeholder-[#8B949E] focus:outline-none"
            aria-label="Business website"
          />
        </div>
        <button
          type="button"
          onClick={switchToSearch}
          className="inline-block text-[#00E676] text-xs mt-1 py-2 cursor-pointer hover:underline"
        >
          ← Search Google instead
        </button>
      </div>
    );
  }

  // ── Selected business confirmation ─────────────────────────────────
  if (value.mode === "selected") {
    return (
      <div>
        <label
          id={labelId}
          className="block text-[#C9D1D9] text-sm font-medium mb-2"
        >
          Google Business Profile
        </label>
        <div className="flex items-start gap-3 bg-white/5 border border-[#00E676]/40 rounded-lg px-4 py-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#00E676"
            className="mt-0.5 shrink-0"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="text-white font-medium truncate">
              {value.businessName}
            </p>
            {value.website && (
              <p className="text-[#8B949E] text-xs truncate">
                {value.website
                  .replace(/^https?:\/\//, "")
                  .replace(/\/.*$/, "")}
              </p>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={switchToSearch}
          className="inline-block text-[#00E676] text-xs mt-1 py-2 cursor-pointer hover:underline"
        >
          Change business
        </button>
      </div>
    );
  }

  // ── Search mode (default) ──────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative">
      <label
        id={labelId}
        className="block text-[#C9D1D9] text-sm font-medium mb-2"
      >
        Google Business Profile
      </label>
      <input
        type="text"
        required={required}
        value={value.businessName}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        placeholder="Search for your business…"
        className={inputClass}
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-labelledby={labelId}
        autoComplete="off"
      />

      {open && (suggestions.length > 0 || loading) && (
        <ul
          id={listboxId}
          role="listbox"
          style={{ backgroundColor: "#161B22" }}
          className="absolute z-50 mt-1 w-full border border-white/10 rounded-lg shadow-2xl overflow-hidden max-h-72 overflow-y-auto"
        >
          {loading && suggestions.length === 0 && (
            <li className="px-4 py-3 text-[#8B949E] text-sm">Searching…</li>
          )}
          {suggestions.map((s, i) => (
            <li
              key={s.placeId}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(s);
              }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                i === activeIndex ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <p className="text-white text-sm font-medium truncate">
                {s.mainText}
              </p>
              {s.secondaryText && (
                <p className="text-[#8B949E] text-xs truncate">
                  {s.secondaryText}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={switchToManual}
        className="inline-block text-[#8B949E] text-xs mt-1 py-2 cursor-pointer"
      >
        Can&apos;t find your business?{" "}
        <span className="text-[#00E676] underline">Enter manually</span>
      </button>
    </div>
  );
}
