import React, { useState } from "react";
import { HeroSection } from "@/modules";
import DetailsSection from "@/modules/DetailsSection";
import TerminalModePage from "@/modules/TerminalMode";
import TerminalModeProvider from "@/modules/TerminalMode/TerminalModeProvider";

const PortfolioLayout: React.FC = () => {
    const [showHero, setShowHero] = useState(true);
    const [terminalMode, setTerminalMode] = useState(false);

    return (
        <main
            className={`w-full max-w-full bg-gray-900 min-h-[100vh] overflow-hidden ${
                showHero ? "max-h-[100vh]" : ""
            }`}
        >
            {!terminalMode && <DetailsSection />}
            {!terminalMode && (
                <div
                    className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start bg-gray-900 transition-transform duration-500 ${
                        showHero ? "" : "translate-x-full"
                    }`}
                >
                    <HeroSection
                        setShowHero={setShowHero}
                        setTerminalMode={setTerminalMode}
                    />
                </div>
            )}
            <TerminalModeProvider>
                {terminalMode && <TerminalModePage />}
            </TerminalModeProvider>
        </main>
    );
};

export default PortfolioLayout;
