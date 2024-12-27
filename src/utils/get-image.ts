/**
 * Retrieves an image or a list of images from a specified folder.
 * If the specified image is found, it will be returned; otherwise, a default "not found" image will be provided.
 *
 * @param imageFolder - The path to the folder containing the images.
 * @returns A Promise that resolves to the requested image or a list of images,
 *          or the default "not found" image if the specified image is unavailable.
 */
export const getImage = async (imageFolder: string) => {
  const imageDir = `${process.env.APP_BASE_URL}/${imageFolder}`;
  const response = await fetch(imageDir, {
    method: 'HEAD',
  });

  if (!response.ok) return '/not-found-image.jpg';

  return imageDir;
};
