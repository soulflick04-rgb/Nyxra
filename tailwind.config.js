// Shared Tailwind Configuration for NYXRA Website
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-secondary-container": "#6d4f00",
                "on-primary-fixed": "#3b0900",
                "primary": "#b02f00",
                "on-primary-container": "#571300",
                "tertiary-fixed-dim": "#c9c6c0",
                "surface-dim": "#dcd9d9",
                "primary-container": "#ff5c2a",
                "on-tertiary-fixed-variant": "#484743",
                "surface": "#fcf9f8",
                "on-error-container": "#93000a",
                "tertiary-container": "#95938e",
                "on-secondary-fixed": "#261900",
                "on-surface": "#1c1b1b",
                "surface-variant": "#e5e2e1",
                "error-container": "#ffdad6",
                "secondary": "#7a5900",
                "surface-container-low": "#f6f3f2",
                "inverse-on-surface": "#f3f0ef",
                "surface-container-highest": "#e5e2e1",
                "surface-tint": "#b02f00",
                "on-tertiary-container": "#2d2c28",
                "secondary-fixed-dim": "#fbbc1a",
                "on-error": "#ffffff",
                "on-primary": "#ffffff",
                "primary-fixed-dim": "#ffb5a0",
                "inverse-surface": "#313030",
                "on-background": "#1c1b1b",
                "tertiary": "#605e5a",
                "on-primary-fixed-variant": "#872200",
                "outline": "#8f7068",
                "surface-container-high": "#ebe7e7",
                "primary-fixed": "#ffdbd1",
                "on-tertiary": "#ffffff",
                "on-surface-variant": "#5b4139",
                "outline-variant": "#e3beb4",
                "surface-container": "#f0edec",
                "background": "#fcf9f8",
                "on-secondary": "#ffffff",
                "tertiary-fixed": "#e6e2dc",
                "on-secondary-fixed-variant": "#5c4200",
                "surface-bright": "#fcf9f8",
                "error": "#ba1a1a",
                "secondary-container": "#febf1e",
                "inverse-primary": "#ffb5a0",
                "on-tertiary-fixed": "#1c1c18",
                "secondary-fixed": "#ffdea2",
                "surface-container-lowest": "#ffffff"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "gutter": "24px",
                "section-gap": "160px",
                "stack-lg": "48px",
                "margin-mobile": "20px",
                "stack-sm": "12px",
                "container-max": "1440px",
                "stack-md": "24px"
            },
            fontFamily: {
                "label-caps": ["Hanken Grotesk"],
                "button": ["Hanken Grotesk"],
                "headline-xl": ["Playfair Display"],
                "headline-lg-mobile": ["Playfair Display"],
                "headline-lg": ["Playfair Display"],
                "display-xl": ["Playfair Display"],
                "body-lg": ["Hanken Grotesk"],
                "display-lg": ["Playfair Display"],
                "body-md": ["Hanken Grotesk"]
            },
            fontSize: {
                "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
                "button": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],
                "headline-xl": ["64px", { lineHeight: "72px", fontWeight: "700" }],
                "headline-lg-mobile": ["36px", { lineHeight: "42px", fontWeight: "700" }],
                "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
                "display-xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "900" }],
                "body-lg": ["20px", { lineHeight: "32px", fontWeight: "400" }],
                "display-lg": ["80px", { lineHeight: "88px", letterSpacing: "-0.02em", fontWeight: "800" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
            }
        }
    }
};
