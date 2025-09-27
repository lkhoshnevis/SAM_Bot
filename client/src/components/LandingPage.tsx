import ChatInterface from "./ChatInterface";

export default function LandingPage() {
  const handleSendMessage = (name: string, message: string) => {
    // Create SMS URL with the message
    const phoneNumber = "5599311785"; // Remove formatting for SMS URL
    const encodedMessage = encodeURIComponent(message);
    const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`;
    
    // Open SMS app
    window.location.href = smsUrl;
    
    console.log('Opening SMS to:', phoneNumber, 'with message:', message);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Alpha Test Label */}
        <div className="text-center mb-4" data-testid="text-alpha-label">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            alpha test
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6" data-testid="text-main-title">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Sam bot, the Ai thats friends with everyone
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chat with it over time and get connected to people you never knew could be valuable
          </p>
        </div>

        {/* Try Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">Try it out</h2>
          </div>
          
          <ChatInterface onSendMessage={handleSendMessage} />
        </div>

        {/* Footer */}
        <div className="text-center" data-testid="text-restriction">
          <p className="text-sm text-muted-foreground">
            test group limited to UCSB students
          </p>
        </div>
      </div>
    </div>
  );
}