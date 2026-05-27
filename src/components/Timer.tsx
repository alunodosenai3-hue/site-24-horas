import { useState, useEffect } from "react";

export default function Timer() {
  const TOTAL_SECONDS = 15 * 60; // 15 mins
  const [timeLeft, setTimeLeft] = useState<number>(TOTAL_SECONDS);
  const [centiSeconds, setCentiSeconds] = useState<number>(99);

  // Load from localStorage or set initial
  useEffect(() => {
    const savedEndTime = localStorage.getItem("conversion_timer_endtime_v1");
    const now = Date.now();
    
    if (savedEndTime) {
      const parsedEndTime = parseInt(savedEndTime, 10);
      const remaining = Math.floor((parsedEndTime - now) / 1000);
      
      if (remaining > 5) {
        setTimeLeft(remaining);
      } else {
        // If it expired, let's keep it at a realistic 2-3 mins so they can still purchase
        const newEndTime = now + (3 * 60 + 47) * 1000;
        localStorage.setItem("conversion_timer_endtime_v1", newEndTime.toString());
        setTimeLeft(3 * 60 + 47);
      }
    } else {
      const targetEndTime = now + TOTAL_SECONDS * 1000;
      localStorage.setItem("conversion_timer_endtime_v1", targetEndTime.toString());
      setTimeLeft(TOTAL_SECONDS);
    }
  }, []);

  // Centiseconds decrementor helper (tick every 10ms for ultra-professional visual feedback)
  useEffect(() => {
    const interval = setInterval(() => {
      setCentiSeconds((prev) => {
        if (prev <= 0) return 99;
        return prev - 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Main seconds timer decrementor
  useEffect(() => {
    if (timeLeft <= 0) {
      // Loop or restart minimally
      setTimeLeft(3 * 60 + 19); // pseudo loop to maintain urgent feel
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = prev - 1;
        // Keep updated in localStorage occasionally
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatUnit = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const isCritical = timeLeft < 3 * 60; // Less than 3 minutes left

  return (
    <div className="flex flex-col items-center">
      {/* Small Urgent Indicator */}
      <div className="flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-500/20 rounded-full mb-3">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-bold">
          ESTA OFERTA EXPIRA EM BREVE
        </span>
      </div>

      {/* Flashing Timer counter inside elegant pill */}
      <div 
        id="urgency-timer" 
        className={`flex items-center gap-2 md:gap-4 px-6 py-4 rounded-2xl border transition-all ${
          isCritical 
            ? "bg-red-950/20 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.15)]" 
            : "bg-purple-950/30 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
        }`}
      >
        <div className="flex flex-col items-center min-w-[50px] md:min-w-[65px]">
          <span className={`text-3xl md:text-5xl font-mono font-bold tracking-tight ${isCritical ? 'text-red-400' : 'text-purple-400'}`}>
            {formatUnit(minutes)}
          </span>
          <span className="text-[9px] md:text-xxs font-mono text-gray-400 uppercase mt-1 tracking-wider">Mins</span>
        </div>

        <span className={`text-2xl md:text-4xl font-mono font-bold ${isCritical ? 'text-red-500/80' : 'text-purple-500/80'} -translate-y-1`}>:</span>

        <div className="flex flex-col items-center min-w-[50px] md:min-w-[65px]">
          <span className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white">
            {formatUnit(seconds)}
          </span>
          <span className="text-[9px] md:text-xxs font-mono text-gray-400 uppercase mt-1 tracking-wider">Segs</span>
        </div>

        <span className={`text-2xl md:text-4xl font-mono font-bold ${isCritical ? 'text-red-500/80' : 'text-purple-500/80'} -translate-y-1`}>:</span>

        <div className="flex flex-col items-center min-w-[50px] md:min-w-[65px]">
          <span className={`text-3xl md:text-5xl font-mono font-bold tracking-tight ${isCritical ? 'text-red-300' : 'text-purple-300'}`}>
            {formatUnit(centiSeconds)}
          </span>
          <span className="text-[9px] md:text-xxs font-mono text-gray-400 uppercase mt-1 tracking-wider">Cents</span>
        </div>
      </div>
    </div>
  );
}
