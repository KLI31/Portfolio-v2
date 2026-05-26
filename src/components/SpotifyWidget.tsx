import { useState, useEffect, useRef } from "react";

interface Track {
  name: string;
  artist: string;
  url: string;
  isNowPlaying: boolean;
}

const POLL_PLAYING = 20_000;  // 20s when a track is playing
const POLL_IDLE    = 60_000;  // 60s when nothing is playing

export function SpotifyWidget({ locale }: { locale: "es" | "en" }) {
  const [track, setTrack] = useState<Track | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.PUBLIC_LASTFM_API_KEY;
    const username = import.meta.env.PUBLIC_LASTFM_USERNAME;

    if (!apiKey || !username) return;

    const fetchTrack = async () => {
      try {
        const res = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
        );
        const data = await res.json();
        const item = data?.recenttracks?.track?.[0];
        if (!item) return;

        const next: Track = {
          name: item.name,
          artist: item.artist["#text"],
          url: item.url,
          isNowPlaying: !!item["@attr"]?.nowplaying,
        };

        setTrack((prev) => {
          if (prev?.name === next.name && prev?.artist === next.artist && prev?.isNowPlaying === next.isNowPlaying) {
            return prev;
          }
          return next;
        });

        // Adjust polling rate based on whether something is actively playing
        const delay = next.isNowPlaying ? POLL_PLAYING : POLL_IDLE;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(fetchTrack, delay);
      } catch {
        // silently ignore network errors
      }
    };

    fetchTrack();
    intervalRef.current = setInterval(fetchTrack, POLL_PLAYING);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!track) return null;

  const label =
    locale === "es"
      ? track.isNowPlaying
        ? "Escuchando ahora"
        : "Última reproducción"
      : track.isNowPlaying
        ? "Now playing"
        : "Last played";

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
    >
      <svg
        className="w-4 h-4 text-green-500 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
      <span className="text-green-500 font-medium">{label}</span>
      <span>—</span>
      <span>
        {track.name} · {track.artist}
      </span>
    </a>
  );
}
