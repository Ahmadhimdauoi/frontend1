import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Spinner from './components/Spinner';

const ChatPage = React.lazy(() => import('./pages/ChatPage'));

function App() {
  return (
    <HashRouter>
      <div>
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Suspense fallback={
            <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Spinner className="w-8 h-8 text-primary"/>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 font-semibold">جاري التحميل...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/chat/:botId" element={<ChatPage />} />
              <Route path="*" element={<div className="text-center mt-10 text-gray-600">Page not found. Please use the link provided by your administrator.</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;