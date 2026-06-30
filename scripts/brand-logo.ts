/** Shared SMASH wordmark markup for static HTML generators. */
export const SMASH_LOGO_SRC = '/smash-logo-white.png';

/** Nav wordmark display height — keep in sync with SmashLogo default. */
export const SMASH_LOGO_NAV_HEIGHT = 14;

export const SMASH_LOGO_NAV_IMG = `<img src="${SMASH_LOGO_SRC}" alt="SMASH" width="60" height="15" style="height:${SMASH_LOGO_NAV_HEIGHT}px;width:auto;display:block;" />`;

export const SMASH_LOGO_NAV_LINK = `<a href="/" class="nav-brand">${SMASH_LOGO_NAV_IMG}</a>`;

export const SMASH_LOGO_NAV_LINK_INLINE = `<a href="/" style="display:inline-block;line-height:0;text-decoration:none;">${SMASH_LOGO_NAV_IMG}</a>`;

export function smashLogoNavLink(href = '/'): string {
  return `<a href="${href}" class="nav-brand">${SMASH_LOGO_NAV_IMG}</a>`;
}
