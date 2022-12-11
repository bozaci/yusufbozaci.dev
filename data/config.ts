export interface IConfig {
  contactURL: string;
  email: string;
  twitter: string;
  github: string;
}

const config: IConfig = {
  contactURL:
    'https://api.whatsapp.com/send?phone=902269110467&text=Merhaba, bir proje ile ilgili iletişime geçiyorum.',
  email: 'yusuf@updatedev.net',
  twitter: 'yusufbozaci_',
  github: 'bozaci/yusufbozaci.dev',
};

export default config;
