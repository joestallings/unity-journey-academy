
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderMarkdown = (markdown: string) => {
    // Process code blocks first (to avoid conflicts with other transformations)
    let html = markdown.replace(/```([a-zA-Z]*)\n([\s\S]*?)\n```/g, (match, language, code) => {
      return `<pre class="language-${language || 'plaintext'}"><code>${code
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</code></pre>`;
    });

    // Process inline code
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Convert headers
    html = html
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-4 mb-2">$1</h4>');

    // Convert lists
    html = html
      .replace(/^\s*\n\* (.*)/gim, '<ul class="list-disc pl-6 my-4">\n<li>$1</li>\n</ul>')
      .replace(/^\s*\n- (.*)/gim, '<ul class="list-disc pl-6 my-4">\n<li>$1</li>\n</ul>')
      .replace(/^\s*\n\d\. (.*)/gim, '<ol class="list-decimal pl-6 my-4">\n<li>$1</li>\n</ol>');
    
    // Combine adjacent list items
    html = html
      .replace(/<\/ul>\s*\n<ul class="list-disc pl-6 my-4">/gim, '')
      .replace(/<\/ol>\s*\n<ol class="list-decimal pl-6 my-4">/gim, '');
    
    // Convert paragraphs (after lists to avoid conflicts)
    html = html.replace(/^\s*(?!<[hou]|<\/[hou]|<pre|<code|<\/code|<\/pre)(.+)/gim, '<p class="my-4">$1</p>');
    
    // Convert bold and italic
    html = html
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/\_\_(.*?)\_\_/gim, '<strong>$1</strong>')
      .replace(/\_(.*?)\_/gim, '<em>$1</em>');
    
    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:text-accent transition-colors">$1</a>');
    
    // Handle line breaks - replace double newlines with paragraph breaks instead of <br> tags
    // This is the key change to fix excessive spacing
    html = html
      .replace(/\n\s*\n/g, '</p><p class="my-4">') // Double newlines become paragraph breaks
      .replace(/\n(?!\s*\n)/g, ' '); // Single newlines become spaces within paragraphs
      
    return html;
  };

  return (
    <div 
      className="markdown-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;
