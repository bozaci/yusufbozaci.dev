export interface ProjectBannerProps {
  data: {
    image: string;
    website: string;
    borderColor: string;
    backgroundColor: string;
    theme: 'black' | 'white' | string;
  };
  className?: string;
}
