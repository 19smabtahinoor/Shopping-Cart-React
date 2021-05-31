import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'


function App() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <div className="m-10 bg-gray-100 shadow-xl p-8 rounded-lg">
          <Navbar />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
