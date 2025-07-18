import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      {/* Top Navbar */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets?.user_icon} alt="User Icon" />
      </div>

      {/* Main Body */}
      <div className="main-container">
        {!showResult ? (
          <>
            {/* Greeting Section */}
            <div className="greet">
              <p>
                <span>Hello, Dev..</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Suggestion Cards */}
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets?.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets?.bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets?.message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets?.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          // Result View
          <div className="result">
            <div className="result-title">
              <img src={assets?.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets?.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: resultData || '<i>No response received.</i>',
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* Bottom Input Section */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets?.gallery_icon} alt="Gallery" />
              <img src={assets?.mic_icon} alt="Mic" />
           <img onClick={() => onSent()} src={assets.send_icon} alt="" />

            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
