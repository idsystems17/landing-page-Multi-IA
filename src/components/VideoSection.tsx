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
  // Segundos reais assistidos — ignora adiantar
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
    <div className={compact ? "w-full space-y-3 pt-2" : "py-14 max-w-3xl mx-auto px-4 space-y-6"}>
      {!compact && (
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">Veja funcionando</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight">
            O produto em ação — antes de comprar
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto">
            Assista ao vídeo e ganhe um{" "}
            <strong className="text-white">pack de 25 prompts prontos</strong> — de graça.
          </p>
        </div>
      )}

      {compact && !unlocked && (
        <p className="text-[11px] font-mono text-orange-400 text-center uppercase tracking-widest">
          Assista e ganhe 25 prompts grátis
        </p>
      )}

      {/* Player */}
      <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/10 bg-black">
        <div id="yt-player" className="w-full h-full" />
      </div>

      {/* Barra de progresso */}
      {!unlocked && (
        <div className="space-y-1.5">
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div
              className="bg-orange-500 h-1.5 rounded-full transition-all duration-700"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <p className="text-center text-[11px] font-mono text-gray-500">
            {progress > 0.05
              ? `${Math.round(progress * 100)}% assistido — continue para desbloquear o pack`
              : "Assista ao vídeo para desbloquear o pack de prompts grátis"}
          </p>
        </div>
      )}

      {/* Recompensa desbloqueada */}
      {unlocked && (
        <div className="bg-orange-600/10 border border-orange-500/30 rounded-sm p-5 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-orange-400">
            <CheckCircle size={18} />
            <span className="font-black uppercase text-sm tracking-widest">Pack Desbloqueado!</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Gift size={14} className="text-orange-400 shrink-0" />
            <p className="text-sm font-light">
              Você ganhou o <strong className="text-white">Pack de 25 Prompts</strong> — prontos para copiar e usar agora.
            </p>
          </div>
          <a
            href={PACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black py-3 px-8 rounded-sm transition-all uppercase text-sm tracking-tight"
          >
            <Download size={15} />
            Baixar Pack de Prompts Grátis
          </a>
          <p className="text-[10px] font-mono text-gray-600">
            Curtiu? O método completo tem muito mais — por R$ 98,00 uma vez só.
          </p>
        </div>
      )}
    </div>
  );
}
