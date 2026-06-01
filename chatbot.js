// Ibrahim Portfolio Chatbot - no-login, direct chat
(function () {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotStatus = document.getElementById('chatbotStatus');

    const API_URL = 'https://ibrahim-chatbot-api.vercel.app/chat';
    let hasShownWelcome = false;
    let isSending = false;

    function toggleChatbot() {
        if (!chatbotWindow) return;
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            if (!hasShownWelcome) {
                addMessage(
                    "Hi, I'm Ibrahim's AI assistant. Ask me anything about my portfolio, projects, skills, experience, or how I can help your business.",
                    'bot'
                );
                hasShownWelcome = true;
            }
            if (chatbotStatus) {
                chatbotStatus.textContent = "Online • Ready to answer your questions.";
            }
            setTimeout(() => {
                if (chatbotInput) chatbotInput.focus();
            }, 80);
        }
    }

    async function sendMessage() {
        if (!chatbotInput || !chatbotSend || isSending) return;
        const message = chatbotInput.value.trim();
        if (!message) return;

        addMessage(message, 'user');
        chatbotInput.value = '';
        chatbotSend.disabled = true;
        isSending = true;
        if (chatbotStatus) {
            chatbotStatus.textContent = "Ibrahim's assistant is thinking...";
        }

        const loadingId = addLoadingMessage();

        try {
            const payload = {
                message,
                context: 'portfolio_website'
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            removeLoadingMessage(loadingId);

            const botMessage =
                data.response ||
                data.answer ||
                data.message ||
                "I couldn't process your request right now. Please try again.";

            addMessage(botMessage, 'bot');
        } catch (error) {
            console.error('Chatbot error:', error);
            removeLoadingMessage(loadingId);
            addMessage(
                "Sorry, I'm having trouble connecting to the AI service right now. Please try again shortly.",
                'bot'
            );
        } finally {
            chatbotSend.disabled = false;
            isSending = false;
            if (chatbotStatus) {
                chatbotStatus.textContent = "Online • Ready to answer your questions.";
            }
            if (chatbotInput) chatbotInput.focus();
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text || '';
        return div.innerHTML;
    }

    function parseMarkdownSimple(text) {
        let html = escapeHtml(text);
        html = html.replace(/\r\n/g, '\n');

        // inline markdown: links, bold, italics
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        html = html.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/(^|[^\*])\*([^*]+?)\*(?!\*)/g, '$1<em>$2</em>');

        const lines = html.split('\n');
        const out = [];
        let inUl = false;
        let inOl = false;

        function closeLists() {
            if (inUl) {
                out.push('</ul>');
                inUl = false;
            }
            if (inOl) {
                out.push('</ol>');
                inOl = false;
            }
        }

        for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line) {
                closeLists();
                out.push('<br>');
                continue;
            }

            let match;
            if ((match = line.match(/^###\s+(.+)$/))) {
                closeLists();
                out.push('<h3>' + match[1] + '</h3>');
            } else if ((match = line.match(/^##\s+(.+)$/))) {
                closeLists();
                out.push('<h2>' + match[1] + '</h2>');
            } else if ((match = line.match(/^#\s+(.+)$/))) {
                closeLists();
                out.push('<h1>' + match[1] + '</h1>');
            } else if ((match = line.match(/^[-*]\s+(.+)$/))) {
                if (!inUl) {
                    closeLists();
                    inUl = true;
                    out.push('<ul>');
                }
                out.push('<li>' + match[1] + '</li>');
            } else if ((match = line.match(/^\d+\.\s+(.+)$/))) {
                if (!inOl) {
                    closeLists();
                    inOl = true;
                    out.push('<ol>');
                }
                out.push('<li>' + match[1] + '</li>');
            } else {
                closeLists();
                out.push('<p>' + line + '</p>');
            }
        }

        closeLists();
        return out.join('');
    }

    function addMessage(text, type) {
        if (!chatbotMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message chatbot-message-${type}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';

        if (type === 'bot') {
            const logoImg = document.createElement('img');
            logoImg.src = 'images/My profressional photos_tab.png';
            logoImg.alt = 'Ibrahim';
            logoImg.className = 'message-logo';
            avatar.appendChild(logoImg);
        } else {
            avatar.textContent = '👤';
        }

        const content = document.createElement('div');
        content.className = 'message-content markdown-body';
        content.innerHTML = type === 'bot'
            ? parseMarkdownSimple(text)
            : `<p>${escapeHtml(text)}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function addLoadingMessage() {
        if (!chatbotMessages) return null;
        const id = 'chatbot-loading-' + Date.now();

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'chatbot-message chatbot-message-bot';
        loadingDiv.id = id;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        const logoImg = document.createElement('img');
        logoImg.src = 'images/My profressional photos_tab.png';
        logoImg.alt = 'Ibrahim';
        logoImg.className = 'message-logo';
        avatar.appendChild(logoImg);

        const content = document.createElement('div');
        content.className = 'message-content chatbot-loading';
        content.innerHTML = '<span></span><span></span><span></span>';

        loadingDiv.appendChild(avatar);
        loadingDiv.appendChild(content);

        chatbotMessages.appendChild(loadingDiv);
        scrollToBottom();

        return id;
    }

    function removeLoadingMessage(id) {
        if (!id) return;
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    function scrollToBottom() {
        if (!chatbotMessages) return;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Event wiring
    if (chatbotButton) chatbotButton.addEventListener('click', toggleChatbot);
    if (chatbotClose) chatbotClose.addEventListener('click', toggleChatbot);

    if (chatbotSend) {
        chatbotSend.addEventListener('click', function () {
            sendMessage();
        });
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && chatbotWindow && chatbotWindow.classList.contains('active')) {
            toggleChatbot();
        }
    });
})();


