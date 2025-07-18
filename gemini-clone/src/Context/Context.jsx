// context/ContextProvider.js or .tsx if using TypeScript

import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
    setInput("");
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let query = prompt || input;
    if (!query) return;

    if (!prompt) {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
    } else {
      setRecentPrompt(prompt);
    }

    try {
      const response = await run(query);

      // Format markdown-like response
      let responseArray = response.split("**");
      let formattedResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 1) {
          formattedResponse += `<b>${responseArray[i]}</b>`;
        } else {
          formattedResponse += responseArray[i];
        }
      }

      formattedResponse = formattedResponse.replace(/\*/g, "<br/>");

      const responseCharacters = formattedResponse.split("");
      for (let i = 0; i < responseCharacters.length; i++) {
        delayPara(i, responseCharacters[i]);
      }
    } catch (error) {
      console.error("Error in Gemini run:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    onSent,
    showResult,
    loading,
    resultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
