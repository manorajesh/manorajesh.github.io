import './App.css';
import './Obsession.css';
import ReactMarkdown from 'react-markdown'
import React, { useState, useEffect } from "react";

function Obsession() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch('/assets/obsessions.md')
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div>
            <h2>today's obsession is...</h2>
        <div className='md'>
            <ReactMarkdown children={markdown} />
        </div>
        </div>
    );
}

export default Obsession;
