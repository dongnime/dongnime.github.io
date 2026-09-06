// SPDX-License-Identifier: Apache-2.0

export const GITHUB_EXTENSION_REPO = 'dongnime/extensions';
export const GITHUB_EXTENSION_BASE = `https://raw.githubusercontent.com/${GITHUB_EXTENSION_REPO}/repo`;
export const GITHUB_EXTENSION_JSON = `${GITHUB_EXTENSION_BASE}/index.json`;
export const GITHUB_EXTENSION_MIN_JSON = `${GITHUB_EXTENSION_BASE}/index.min.json`;
export const GITHUB_EXTENSION_PB = `${GITHUB_EXTENSION_BASE}/index.min.json`;
export const JSDELIVR_EXTENSION_PB = `https://cdn.jsdelivr.net/gh/${GITHUB_EXTENSION_REPO}@repo/index.min.json`;

export const ANIYOMI_REPO = 'aniyomiorg/aniyomi';
export const ANIYOMI_RELEASES_API = `https://api.github.com/repos/${ANIYOMI_REPO}/releases/latest`;
export const ANIYOMI_MIN_VERSION = '0.15.2';

export const MIHON_REPO = 'mihonapp/mihon';
export const MIHON_RELEASES_API = `https://api.github.com/repos/${MIHON_REPO}/releases/latest`;
// Fallback shown when the latest release can't be fetched (offline, API rate limit, etc.).
export const MIHON_MIN_VERSION = '0.20.1';
