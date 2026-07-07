/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Ads account ID, e.g. AW-1234567890 */
  readonly VITE_GOOGLE_ADS_ID?: string;
  /** Meta (Facebook) Pixel ID — numeric ID from Events Manager */
  readonly VITE_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
