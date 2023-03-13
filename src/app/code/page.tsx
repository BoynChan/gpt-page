"use client";
import styles from "./code.module.css";
import Image from "next/image";
const Input = () => {
  return (
    <div>
      <input></input>
    </div>
  );
};

const exampleCode = `\`\`\`
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
\`\`\`
`;

export const Main: React.FC = () => {
  return (
    <div className={styles.code}>
      <h1 className="text-5xl">CodeGPT</h1>
      <div className={styles.feature_col}>
        <div className={styles.col}>
          <Image
            src="/com-mac-old-svgrepo-com.svg"
            alt="logo"
            className="mr-auto ml-auto"
            width={50}
            height={12}
          />
          <div className={styles.col_title}>Examples</div>
          <div className={styles.col_content}>
            <div>Type in any code</div>
            <div>Ask question about coding</div>
            <div>"How to use std::move"</div>
          </div>
        </div>
        <div className={styles.col}>
          <Image
            src="/community-service-station-svgrepo-com.svg"
            alt="logo"
            className="mr-auto ml-auto"
            width={50}
            height={12}
          />
          <div className={styles.col_title}>Details</div>
          <div className={styles.col_content}>
            <div>"How this code works"</div>
            <div>"What is markdown"</div>
          </div>
        </div>
        <div className={styles.col}>
          <Image
            src="/cld-server-svgrepo-com.svg"
            alt="logo"
            className="mr-auto ml-auto"
            width={50}
            height={12}
          />
          <div className={styles.col_title}>Capabilities</div>
          <div className={styles.col_content}>
            <div>Ask more things after code</div>
            <div>Save your record history to find out</div>
            <div>Making summarize easily</div>
          </div>
        </div>
      </div>
      <div className={styles.input_frame}>
        <Input></Input>
      </div>
    </div>
  );
};

export default function Code() {
  return (
    <div className="h-full">
      <Main></Main>
    </div>
  );
}
