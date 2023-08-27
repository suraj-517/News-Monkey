import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

    const [progress, setProgress] = useState(0);



    return (
        <>
            <Router>
                <NavBar />
                <LoadingBar
                    height={2}
                    color='#f11946'
                    progress={progress}
                />
                <Routes>
                    <Route exact path="/" element={<News setProgress={setProgress} key="1" pageSize={3} country="in" category="general" />} />
                    <Route exact path="/Business" element={<News setProgress={setProgress} key="2" pageSize={3} country="in" category="business" />} />
                    <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="3" pageSize={3} country="in" category="entertainment" />} />
                    <Route exact path="/General" element={<News setProgress={setProgress} key="4" pageSize={3} country="in" category="general" />} />
                    <Route exact path="/Health" element={<News setProgress={setProgress} key="5" pageSize={3} country="in" category="health" />} />
                    <Route exact path="/Science" element={<News setProgress={setProgress} key="6" pageSize={3} country="in" category="science" />} />
                    <Route exact path="/Sports" element={<News setProgress={setProgress} key="7" pageSize={3} country="in" category="sports" />} />
                    <Route exact path="/Technology" element={<News setProgress={setProgress} key="8" pageSize={3} country="in" category="technology" />} />

                </Routes>

            </Router>
        </>
    )
}
