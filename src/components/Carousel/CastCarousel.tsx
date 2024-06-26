import HorizontalScroller from '@components/Base/HorizontalScroller';
import Cast from '@components/Cards/Cast';
import { Title } from '@mantine/core';

interface CastCarouselProps<T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T> {
  casts: T[] | undefined;
  id_path: K;
  profile_path: L;
  name_path: M;
  character_path: N;
  label?: string;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function CastCarousel<T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T>({
  casts,
  id_path,
  profile_path,
  name_path,
  character_path,
  label = 'Top Cast',
  gap = 'md',
}: CastCarouselProps<T, K, L, M, N>) {
  const filteredCasts = casts && casts.filter(cast => cast[profile_path] as string);
  if (!filteredCasts || filteredCasts.length === 0) return null;

  const slides = filteredCasts.map((cast, index) => {
    const id = cast[id_path] as number;
    const profileImagePath = cast[profile_path] as string;
    const name = cast[name_path] as string;
    const character = cast[character_path] as string;

    return <Cast key={index} id={id} profile_path={profileImagePath} name={name} character={character} />;
  });

  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        {label}
      </Title>
      <HorizontalScroller gap={gap}>{slides}</HorizontalScroller>
    </>
  );
}
