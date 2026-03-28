/**
 * boardgamefyi-embed — TypeScript declarations
 */
export {};
declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      'boardgamefyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'faq' | 'dna-radar' | 'dna-bars' | 'player-badge' | 'weight-badge';
      slug?: string;
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      styleVariant?: 'modern' | 'clean';
      size?: 'default' | 'compact' | 'large';
      placeholder?: string;
    };
  }
}
