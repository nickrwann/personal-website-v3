import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const EXAMPLE_PROMPTS = [
  "Why should I hire Nick?",
  "What is Nick best at?",
  "What does Nick like to do in his free time?",
];

export default function FloatingChatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Failed to get answer');
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Sorry, there was an error processing your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (prompt: string) => {
    setQuestion(prompt);
    setAnswer('');
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setAnswer('');
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [question]);

  if (!isExpanded) {
    return (
      <div className="fixed top-6 left-6 z-50 flex items-center gap-2 group">
        <Button
          onClick={() => setIsExpanded(true)}
          size="icon"
          className="rounded-full shadow-lg"
          data-testid="button-chatbot-toggle"
          aria-label="Open chat to ask about Nick"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <span className="text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
          Ask me
        </span>
      </div>
    );
  }

  return (
    <Card className="fixed top-6 left-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle className="text-base font-semibold" data-testid="text-chatbot-title">
            Ask about Nick
          </CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(false)}
          data-testid="button-chatbot-close"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        {!answer && !isLoading && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Try asking:
            </p>
            <div className="space-y-2">
              {EXAMPLE_PROMPTS.map((prompt, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  onClick={() => handleExampleClick(prompt)}
                  className="w-full justify-start text-sm"
                  data-testid={`button-example-prompt-${idx}`}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        )}

        {answer && (
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                Question:
              </p>
              <p className="text-sm text-foreground italic pl-3 border-l-2 border-border" data-testid="text-chatbot-question">
                {question}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                Answer:
              </p>
              <div 
                className="text-sm text-muted-foreground leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                data-testid="text-chatbot-answer"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {answer}
                </ReactMarkdown>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNewQuestion}
              className="w-full"
              data-testid="button-new-question"
            >
              Ask another question
            </Button>
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center py-8" data-testid="status-loading">
            <div className="text-sm text-muted-foreground">
              Thinking...
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2 items-end">
          <Textarea
            ref={textareaRef}
            placeholder="Ask a question about Nick..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isLoading}
            className="flex-1 min-h-[42px] max-h-[200px] resize-none overflow-y-auto"
            data-testid="input-chatbot-question"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!question.trim() || isLoading}
            data-testid="button-chatbot-submit"
            aria-label="Send question"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
