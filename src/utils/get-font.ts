/**
 * Retrieves the font file from the specified folder and processes it.
 *
 * @param fontFolder - The path to the folder containing the font file.
 * @returns A Promise resolving to the processed font data or an error if the operation fails.
 */
export const getFont = async (fontFolder: string) => {
  const fontDir = `${process.env.APP_BASE_URL}/${fontFolder}`;

  try {
    const response = await fetch(fontDir);

    if (!response.ok) throw new Error(`Failed to fetch font from ${fontDir}`);

    return await response.arrayBuffer();
  } catch (e: any) {
    throw new Error(`Error get font: ${e.message}`);
  }
};
