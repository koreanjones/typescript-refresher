import { type PropsWithChildren } from 'react';

type HeaderTypes = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: HeaderTypes) {
  return (
    <header>
      <img {...image} />
      <h1>{children}</h1>
    </header>
  );
}
