"use client";

export default function VLibrasIframe() {
  return (
    <iframe
      src="/vlibras.html"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "0",
        height: "0",
        border: "none",
        zIndex: 9999,
      }}
      title="VLibras"
    />
  );
}
