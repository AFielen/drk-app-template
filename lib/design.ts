export type Design = 'default' | 'advisory';

export const DESIGN: Design =
  process.env.NEXT_PUBLIC_DRK_DESIGN === 'advisory' ? 'advisory' : 'default';
