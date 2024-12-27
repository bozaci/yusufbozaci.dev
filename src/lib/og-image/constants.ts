import { getFont } from '@/utils/get-font';

/**
 *
 * Sizes
 *
 */
export const sizes = {
  width: 1200,
  height: 630,
};

/**
 *
 * Fonts
 *
 */
const fontConfigs = [
  { path: 'fonts/inter-display-regular.ttf', name: 'Inter Display', weight: 400 },
  { path: 'fonts/inter-display-semibold.ttf', name: 'Inter Display', weight: 500 },
];

export const getFonts = async () => {
  const fonts = await Promise.all(
    fontConfigs.map(async ({ path, name, weight }) => ({
      name,
      data: await getFont(path),
      weight,
    })),
  );

  return fonts;
};
