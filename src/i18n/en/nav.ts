/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Getting Started', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Introduction', slug: 'introduction', key: 'introduction' },
	{ text: 'Installation', slug: 'install', key: 'install' },
	{ text: 'Configuration', slug: 'configuration', key: 'configuration' },
] as const;
