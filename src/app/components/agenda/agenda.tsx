"use client"

import React, { useState } from 'react';
import styles from './agenda.module.css'

type TabProps = {
    label: string;
    content: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ label, content }) => {
    return (
        <div>
            <h2>{label}</h2>
            {content}
        </div>
    );
};

type TabsProps = {
    tabs: TabProps[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-labels">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

// Exemplo de uso:
const App: React.FC = () => {
    const tabs: TabProps[] = [
        { label: 'Tab 1', content: <p>Conteúdo da Tab 1</p> },
        { label: 'Tab 2', content: <p>Conteúdo da Tab 2</p> },
        { label: 'Tab 3', content: <p>Conteúdo da Tab 3</p> },
    ];

    return (
        <div className={styles.mainAgenda}>
            <h1>Componente de Abas</h1>
            <div className={styles.tabsMain}>
                <Tabs tabs={tabs} />

            </div>
        </div>
    );
};

export default App;
