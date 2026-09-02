type IconProps = {
  className?: string;
};

export const GitHubIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.2c-5.5 0-9.9 4.4-9.9 9.9 0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.8 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.4.1-5.5-4.4-9.9-9.8-9.9Z" />
  </svg>
);

export const LinkedInIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.5 8.7H2.6v12h2.9v-12ZM4 3.2C3 3.2 2.3 4 2.3 4.9S3 6.6 4 6.6s1.7-.7 1.7-1.7S5 3.2 4 3.2Zm16.9 10.6c0-3.2-1.7-5.3-4.5-5.3-1.7 0-2.7.9-3.1 1.7V8.7h-2.9v12h2.9v-6.4c0-1.7.9-2.8 2.4-2.8s2.3 1 2.3 2.8v6.4h2.9v-6.9Z" />
  </svg>
);

export const MailIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.6 5.2h16.8v13.6H3.6V5.2Zm8.4 7.6 6.2-5.6H5.8l6.2 5.6Zm-1.1 1.4-5.5-5v7.6h13.2V9.2l-5.5 5a1.7 1.7 0 0 1-2.2 0Z" />
  </svg>
);

export const CopyIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 3.6h10.4V14H16V6H8V3.6Zm-2.4 4h10.8v12.8H5.6V7.6Zm2.4 2.4v8h6v-8H8Z" />
  </svg>
);

export const FileIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.8 2.8h7.4L19.8 8v13.2H6.8V2.8Zm7 1.9v4h4.3l-4.3-4Zm-4.7 8.1h7.8v-1.6H9.1v1.6Zm0 3.3h7.8v-1.6H9.1v1.6Zm0 3.3h5.1v-1.6H9.1v1.6Z" />
  </svg>
);

export const ArrowIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.2 5.6 19.6 12l-6.4 6.4-1.4-1.4 4-4H4.4v-2h11.4l-4-4 1.4-1.4Z" />
  </svg>
);
