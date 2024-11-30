import React, { useState } from 'react';
import "./home.scss"
import { getSummary } from './services/action';

// Helper function to introduce delay
const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const Home: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [sentenceCount, setSentenceCount] = useState<number>(4); // Default group size (X)
    const [groups, setGroups] = useState<string[]>([]);
    const [summaries, setSummaries] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const RATE_LIMIT_DELAY = 2000; // 2 seconds between requests to stay under 30 requests/min
    const mockSummarize = async (text: string): Promise<string> => {
        try {
            // const response = await axios.post('http://localhost:9015/api/v1/admin/get-summary', {
            //     content: text, // The chunk of text to summarize
            // });
            let payload={content: text}
            debugger
            const response = await getSummary(payload)
            return response.data.summary || 'No summary available'; // Replace `summary` with the actual response key
        } catch (error) {
            console.error('Error during API call:', error);
            return 'Error: Unable to summarize this chunk.';
        }
    };
    
    // Function to split text into groups of X sentences
    const splitTextIntoGroups = (text: string, x: number): string[] => {
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        const chunks: string[] = [];
        for (let i = 0; i < sentences.length; i += x) {
            chunks.push(sentences.slice(i, i + x).join(' '));
        }
        return chunks;
    };

    // Function to summarize text with rate limiting
    const handleSummarize = async (): Promise<void> => {
        setIsLoading(true);
        setSummaries([]);
        setProgress(0);

        const chunks = splitTextIntoGroups(text, sentenceCount);
        setGroups(chunks);

        const summaryResults: string[] = [];
        for (let i = 0; i < chunks.length; i++) {
            try {
                const summary = await mockSummarize(chunks[i]);
                summaryResults.push(summary);
                setSummaries((prev) => [...prev, summary]);
                setProgress(Math.round(((i + 1) / chunks.length) * 100));
            } catch (error) {
                summaryResults.push('Error: Unable to summarize this chunk.');
                setSummaries((prev) => [...prev, 'Error: Unable to summarize this chunk.']);
            }

            if (i < chunks.length - 1) {
                await delay(RATE_LIMIT_DELAY); // Wait before the next request
            }
        }

        setIsLoading(false);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Text Summarizer - Split Screen</h1>
            <textarea
                rows={8}
                cols={80}
                placeholder="Paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="sentenceCount">Group size (sentences): </label>
                <input
                    type="number"
                    id="sentenceCount"
                    value={sentenceCount}
                    onChange={(e) => setSentenceCount(Number(e.target.value))}
                    style={{ width: '50px', marginLeft: '10px' }}
                />
            </div>
            <button
                onClick={handleSummarize}
                disabled={isLoading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: isLoading ? '#6c757d' : '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
            >
                {isLoading ? 'Summarizing...' : 'Summarize'}
            </button>

            {isLoading && (
                <div style={{ marginTop: '10px' }}>
                    <p>Progress: {progress}%</p>
                    <progress value={progress} max={100} style={{ width: '100%' }} />
                </div>
            )}

            {groups.length > 0 && summaries.length > 0 && (
                <div style={{ display: 'flex', marginTop: '20px', height: '400px', overflow: 'auto' }}>
                    {/* Left Panel: Groups of sentences */}
                    <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
                        <h2>Original Text Groups</h2>
                        {groups.map((group, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <p><strong>Group {index + 1}:</strong></p>
                                <p>{group}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Panel: Summaries */}
                    <div style={{ flex: 1, padding: '10px' }}>
                        <h2>Summaries</h2>
                        {summaries.map((summary, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <p><strong>Summary {index + 1}:</strong></p>
                                <p>{summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
