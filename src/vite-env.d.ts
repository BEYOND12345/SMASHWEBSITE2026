/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Ads account ID, e.g. AW-1234567890 */
  readonly VITE_GOOGLE_ADS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
