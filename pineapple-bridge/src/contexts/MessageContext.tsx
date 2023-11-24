import { createContext, useContext, useState, ReactNode } from 'react';
import { MessageProps } from '../helper/MessageCenter';

interface MessageContextProps {
  messages: MessageProps[];
  addMessage: (message: MessageProps) => void;
  removeMessage: (index: number) => void;
  clearMessages: () => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [messages, setMessages] = useState<MessageProps[]>([]);

	const addMessage = (message: MessageProps) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	const removeMessage = (index: number) => {
  setMessages((prevMessages) => [
    ...prevMessages.slice(0, index),
    ...prevMessages.slice(index + 1),
  ]);
};

	const clearMessages = () => {
		setMessages([]);
	};

	return (
		<MessageContext.Provider value={{ messages, addMessage, removeMessage, clearMessages }}>
		{children}
		</MessageContext.Provider>
	);
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
