import { useState, useEffect } from "react";

interface Quote {
  q: string;
  a: string;
}

interface Props {
  locale: "es" | "en";
}

const ES_QUOTES: Quote[] = [
  { q: "El único modo de hacer un gran trabajo es amar lo que haces.", a: "Steve Jobs" },
  { q: "La simplicidad es la máxima sofisticación.", a: "Leonardo da Vinci" },
  { q: "No cuentes los días, haz que los días cuenten.", a: "Muhammad Ali" },
  { q: "La mejor manera de predecir el futuro es creándolo.", a: "Peter Drucker" },
  { q: "No importa lo lento que vayas, siempre y cuando no te detengas.", a: "Confucio" },
  { q: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", a: "Albert Schweitzer" },
  { q: "La creatividad es la inteligencia divirtiéndose.", a: "Albert Einstein" },
  { q: "No se trata de tener ideas, se trata de hacer que se vuelvan realidad.", a: "Scott Belsky" },
  { q: "La disciplina es el puente entre metas y logros.", a: "Jim Rohn" },
  { q: "El fracaso es la oportunidad de comenzar de nuevo con más inteligencia.", a: "Henry Ford" },
  { q: "Sé el cambio que quieres ver en el mundo.", a: "Mahatma Gandhi" },
  { q: "Si puedes soñarlo, puedes lograrlo.", a: "Walt Disney" },
  { q: "La acción es la clave fundamental para todo éxito.", a: "Pablo Picasso" },
  { q: "El futuro pertenece a quienes creen en la belleza de sus sueños.", a: "Eleanor Roosevelt" },
  { q: "Nunca consideres el estudio como una obligación, sino como una oportunidad.", a: "Albert Einstein" },
  { q: "La paciencia es amarga, pero su fruto es dulce.", a: "Jean-Jacques Rousseau" },
  { q: "El optimismo es la fe que conduce al logro.", a: "Helen Keller" },
  { q: "La verdadera sabiduría está en reconocer la propia ignorancia.", a: "Sócrates" },
  { q: "La actitud es una pequeña cosa que hace una gran diferencia.", a: "Winston Churchill" },
  { q: "El conocimiento es poder.", a: "Francis Bacon" },
  { q: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", a: "John Lennon" },
  { q: "El mayor placer en la vida es hacer lo que la gente dice que no puedes hacer.", a: "Walter Bagehot" },
  { q: "Cada día es una nueva oportunidad para cambiar tu vida.", a: "Anónimo" },
  { q: "La perseverancia es la madre del éxito.", a: "Benjamin Disraeli" },
  { q: "No encuentres la falta, encuentra el remedio.", a: "Henry Ford" },
  { q: "El único límite a nuestros logros de mañana será nuestras dudas de hoy.", a: "Franklin D. Roosevelt" },
  { q: "El que tiene fe en sí mismo no necesita que los demás crean en él.", a: "Miguel de Unamuno" },
  { q: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.", a: "Nelson Mandela" },
  { q: "Siempre parece imposible hasta que se hace.", a: "Nelson Mandela" },
  { q: "El que no vive para servir, no sirve para vivir.", a: "Mahatma Gandhi" },
];

const EN_QUOTES: Quote[] = [
  { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
  { q: "Simplicity is the ultimate sophistication.", a: "Leonardo da Vinci" },
  { q: "Don't count the days, make the days count.", a: "Muhammad Ali" },
  { q: "The best way to predict the future is to create it.", a: "Peter Drucker" },
  { q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius" },
  { q: "Success is not the key to happiness. Happiness is the key to success.", a: "Albert Schweitzer" },
  { q: "Creativity is intelligence having fun.", a: "Albert Einstein" },
  { q: "It's not about ideas. It's about making ideas happen.", a: "Scott Belsky" },
  { q: "Discipline is the bridge between goals and accomplishment.", a: "Jim Rohn" },
  { q: "Failure is the opportunity to begin again more intelligently.", a: "Henry Ford" },
  { q: "Be the change that you wish to see in the world.", a: "Mahatma Gandhi" },
  { q: "If you can dream it, you can do it.", a: "Walt Disney" },
  { q: "Action is the foundational key to all success.", a: "Pablo Picasso" },
  { q: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt" },
  { q: "Never regard study as a duty, but as an opportunity.", a: "Albert Einstein" },
  { q: "Patience is bitter, but its fruit is sweet.", a: "Jean-Jacques Rousseau" },
  { q: "Optimism is the faith that leads to achievement.", a: "Helen Keller" },
  { q: "True wisdom comes from recognizing one's own ignorance.", a: "Socrates" },
  { q: "Attitude is a little thing that makes a big difference.", a: "Winston Churchill" },
  { q: "Knowledge is power.", a: "Francis Bacon" },
  { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" },
  { q: "The greatest pleasure in life is doing what people say you cannot do.", a: "Walter Bagehot" },
  { q: "Every day is a new opportunity to change your life.", a: "Anonymous" },
  { q: "Perseverance is the mother of success.", a: "Benjamin Disraeli" },
  { q: "Don't find fault, find a remedy.", a: "Henry Ford" },
  { q: "The only limit to our realization of tomorrow will be our doubts of today.", a: "Franklin D. Roosevelt" },
  { q: "He who has faith in himself does not need others to believe in him.", a: "Miguel de Unamuno" },
  { q: "Education is the most powerful weapon which you can use to change the world.", a: "Nelson Mandela" },
  { q: "It always seems impossible until it's done.", a: "Nelson Mandela" },
  { q: "The best preparation for tomorrow is doing your best today.", a: "H. Jackson Brown Jr." },
];

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function DailyQuote({ locale }: Props) {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const storageKey = `daily-quote-${locale}`;

    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.date === today) {
          setQuote(parsed.quote);
          return;
        }
      }
    } catch (e) {
      // ignore
    }

    const fetchQuote = async () => {
      let selectedQuote: Quote;

      if (locale === "en") {
        try {
          const res = await fetch("https://zenquotes.io/api/today");
          const data = await res.json();
          if (data && data[0] && data[0].q && data[0].a) {
            selectedQuote = { q: data[0].q, a: data[0].a };
          } else {
            throw new Error("Invalid API response");
          }
        } catch (e) {
          const dayIndex = getDayOfYear() % EN_QUOTES.length;
          selectedQuote = EN_QUOTES[dayIndex];
        }
      } else {
        const dayIndex = getDayOfYear() % ES_QUOTES.length;
        selectedQuote = ES_QUOTES[dayIndex];
      }

      try {
        localStorage.setItem(storageKey, JSON.stringify({ date: today, quote: selectedQuote }));
      } catch (e) {
        // ignore
      }

      setQuote(selectedQuote);
    };

    fetchQuote();
  }, [locale]);

  if (!quote) {
    return (
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800/40">
        <div className="h-12 animate-pulse bg-gray-100 dark:bg-gray-800/50 rounded" />
      </div>
    );
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800/40">
      <blockquote className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
        <span className="text-yellow-500 dark:text-yellow-400 font-semibold not-italic text-lg leading-none">"</span>
        {quote.q}
        <span className="text-yellow-500 dark:text-yellow-400 font-semibold not-italic text-lg leading-none">"</span>
        <footer className="mt-2 text-xs text-gray-400 dark:text-gray-500 not-italic">
          — {quote.a}
        </footer>
      </blockquote>
    </div>
  );
}
