import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AskMe() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    console.log('Question submitted:', question);
    setIsLoading(true);

    setTimeout(() => {
      setAnswer(`Thanks for asking "${question}"! This is where the AI-powered answer would appear. Connect this to your LLM/RAG service to provide real responses.`);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setQuestion('');
    setAnswer('');
    console.log('Q&A reset');
  };

  return (
    <section className="py-16 px-6 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border pt-12">
          <h2 
            className="text-3xl sm:text-4xl font-semibold font-display text-foreground mb-8 text-center"
            data-testid="text-askme-heading"
          >
            Curious about my work?
          </h2>

          <div className="max-w-2xl mx-auto">
            {!answer ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Ask me a question…"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                    data-testid="input-question"
                  />
                  <Button
                    type="submit"
                    disabled={!question.trim() || isLoading}
                    data-testid="button-submit-question"
                    className="min-w-[100px]"
                  >
                    {isLoading ? (
                      'Thinking...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    Your question:
                  </p>
                  <p className="text-base text-foreground italic pl-4 border-l-2 border-border">
                    {question}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    Answer:
                  </p>
                  <p 
                    className="text-base text-muted-foreground leading-relaxed"
                    data-testid="text-answer"
                  >
                    {answer}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-sm text-foreground hover-elevate transition-all duration-300 rounded px-3 py-2 -mx-3"
                    data-testid="button-ask-another"
                  >
                    Ask another?
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
