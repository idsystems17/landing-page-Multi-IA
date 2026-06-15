import { useState, useEffect, useRef } from "react";
import { Download, CheckCircle, Gift } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VIDEO_ID = "HBJYurOoVzo";
const PACK_URL = "/pack-prompts.pdf";
const UNLOCK_AT = 0.8;

interface Props {
  compact?: boolean;
}

export default function VideoSection({ compact = false }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const playedSecondsRef = useRef(0);

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: VIDEO_ID,
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              intervalRef.current = window.setInterval(() => {
                const p = playerRef.current;
                if (!p) return;
                const duration = p.getDuration();
                if (duration <= 0) return;
                playedSecondsRef.current += 2;
                const pct = playedSecondsRef.current / duration;
                setProgress(Math.min(pct, 1));
                if (pct >= UNLOCK_AT) {
                  setUnlocked(true);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }
              }, 2000);
            } else {
              if (intervalRef.current) clearInterval(intervalRef.current);
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={compact ? "w-full space-y-3" : "py-12 max-w-3xl mx-auto px-4 space-y-5"}>
      {!compact && (
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Veja funcionando</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937]">
            O Gerador de E-books em ação — antes de comprar
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Assista ao vídeo e ganhe um <strong className="text-[#1F2937]">pack de 25 prompts prontos</strong> de bônus.
          </p>
        </div>
      )}

      {compact && !unlocked && (
        <p className="text-[11px] font-semibold text-[#2563EB] text-center uppercase tracking-widest">
          🎁 Assista e ganhe 25 prompts grátis
        </p>
      )}

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
        <div id="yt-player" className="w-full h-full" />
      </div>

      {!unlocked && (
        <div className="space-y-1.5">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-[#2563EB] h-1.5 rounded-full transition-all duration-700"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <p className="text-center text-[11px] text-gray-400">
            {progress > 0.05
              ? `${Math.round(progress * 100)}% assistido — continue para desbloquear`
              : "Assista ao vídeo para desbloquear o pack de prompts grátis"}
          </p>
        </div>
      )}

      {unlocked && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#2563EB] font-semibold">
            <CheckCircle size={18} />
            <span className="text-sm">Pack Desbloqueado!</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Gift size={14} className="text-[#2563EB] shrink-0" />
            <p className="text-sm">
              Você ganhou o <strong className="text-[#1F2937]">Pack de 25 Prompts</strong> — prontos para usar agora.
            </p>
          </div>
          <a
            href={PACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-8 rounded-xl transition-all text-sm shadow-sm"
          >
            <Download size={15} />
            Baixar Pack Grátis
          </a>
          <p className="text-[10px] text-gray-400">
            Gostou? O gerador completo gera e-books inteiros — por R$98 pagamento único.
          </p>
        </div>
      )}
    </div>
  );
}
