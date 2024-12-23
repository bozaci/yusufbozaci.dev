import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Mailbox } from '@phosphor-icons/react/dist/ssr';
import Config from '@/config.json';

export const socialMediaData = [
  {
    name: 'X (Twitter)',
    icon: <FontAwesomeIcon icon={faXTwitter} />,
    link: Config.socialMedia.twitter,
  },
  {
    name: 'GitHub',
    icon: <FontAwesomeIcon icon={faGithub} />,
    link: Config.socialMedia.github,
  },
  {
    name: 'LinkedIn',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    link: Config.socialMedia.linkedin,
  },
  {
    name: 'Email',
    icon: <Mailbox />,
    link: Config.socialMedia.email,
  },
];
