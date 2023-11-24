import React, { useEffect } from 'react';
import { useMessage } from '../contexts/MessageContext';
import styles from '../styles/messageCenter.module.css'

const MessageDisplay: React.FC = () => {
  const { messages, removeMessage } = useMessage();

  useEffect(() => {
  if (messages.length > 0) {
    const timeoutId = setTimeout(() => {
      removeMessage(0); // Remove the first message after a delay (e.g., 5000 milliseconds or 5 seconds)
    }, 5000);

    // Clear the timeout when the component unmounts or a new message arrives
    return () => clearTimeout(timeoutId);
  }
}, [messages, removeMessage]);
 

  const getMessageClassName = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'error':
        return styles.errorMessage;
      case 'warning':
        return styles.warningMessage;
      case 'info':
        return styles.infoMessage;
      default:
        return '';
    }
  };

	return (
		<>
			{messages.map((message, index) => (
				<div className={`${styles.messageDisplay} ${getMessageClassName(message.type)}`}>
					<div key={index}>
						{message.message}
					</div>
				</div>
			))}
		</>
	);
};

export default MessageDisplay;
