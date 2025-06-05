import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm your My Ward assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! For immediate assistance, please email us at support@myward.com",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-deep-blue text-white p-5 rounded-full shadow-lg hover:bg-soft-blue transition-colors duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-24 right-0 w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-deep-blue text-white px-6 py-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="w-7 h-7" />
                <h3 className="font-semibold text-lg">My Ward Assistant</h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="h-[480px] overflow-y-auto p-6 space-y-6 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.sender === "user"
                        ? "bg-deep-blue text-white"
                        : "bg-white text-gray-800 shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {message.sender === "bot" ? (
                        <Bot className="w-5 h-5 text-deep-blue" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                      <span className="text-sm font-medium opacity-90">
                        {message.sender === "user" ? "You" : "Assistant"}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-75 mt-2 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="w-5 h-5 text-deep-blue" />
                      <span className="text-sm font-medium opacity-90">Assistant</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <motion.div
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="w-2.5 h-2.5 bg-deep-blue rounded-full"
                      />
                      <motion.div
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.2,
                        }}
                        className="w-2.5 h-2.5 bg-deep-blue rounded-full"
                      />
                      <motion.div
                        animate={{
                          y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.4,
                        }}
                        className="w-2.5 h-2.5 bg-deep-blue rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ""}
                  className={`p-3 rounded-xl ${
                    inputMessage.trim() === ""
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-deep-blue hover:bg-soft-blue"
                  } text-white transition-colors duration-300`}
                >
                  <Send className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot; 