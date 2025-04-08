
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Very simple markdown renderer for demonstration purposes
  // In a real app, you'd use a proper markdown library like react-markdown
  
  const renderMarkdown = (markdown: string) => {
    // Convert headers
    let html = markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>');

    // Convert paragraphs
    html = html.replace(/^\s*(\n)?(.+)/gim, function (m) {
      return /^<(\/)?(h|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
    });

    // Convert bold and italic
    html = html
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>');

    // Convert lists
    html = html
      .replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>\n</ul>')
      .replace(/^\s*\n- (.*)/gim, '<ul>\n<li>$1</li>\n</ul>')
      .replace(/^\s*\n\d\. (.*)/gim, '<ol>\n<li>$1</li>\n</ol>');
    
    html = html
      .replace(/<\/ul>\s*\n<ul>/gim, '')
      .replace(/<\/ol>\s*\n<ol>/gim, '');
    
    // Convert code blocks
    html = html
      .replace(/`{3}(.*?)`{3}/gms, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Convert line breaks
    html = html.replace(/\n/g, '<br>');

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
