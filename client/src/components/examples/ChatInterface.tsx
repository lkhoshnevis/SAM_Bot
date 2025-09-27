import ChatInterface from '../ChatInterface';

export default function ChatInterfaceExample() {
  const handleSendMessage = (name: string, message: string) => {
    console.log('Send message triggered:', { name, message });
  };

  return (
    <div className="p-8 bg-background min-h-screen">
      <ChatInterface onSendMessage={handleSendMessage} />
    </div>
  );
}