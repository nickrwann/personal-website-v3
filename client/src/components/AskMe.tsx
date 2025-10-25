import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function AskMe() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setQuestion('');
      setAnswer('');
    }, 300);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-40"
        size="lg"
        data-testid="button-ask-me"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Ask Me
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleClose}
          data-testid="overlay-ask-me"
        >
          <Card
            className="w-full max-w-md p-6 animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
            data-testid="card-ask-me"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                Ask Me Anything
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                data-testid="button-close-ask-me"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {!answer ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ask me a question…"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={isLoading}
                    className="w-full"
                    data-testid="input-question"
                    autoFocus
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={!question.trim() || isLoading}
                  data-testid="button-submit-question"
                >
                  {isLoading ? (
                    'Thinking...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Your question:
                  </p>
                  <p className="text-base text-foreground italic">
                    "{question}"
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Answer:
                  </p>
                  <p 
                    className="text-base text-foreground leading-relaxed"
                    data-testid="text-answer"
                  >
                    {answer}
                  </p>
                </div>

                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full"
                  data-testid="button-ask-another"
                >
                  Ask another?
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
