// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function SignupPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     localStorage.setItem('user', JSON.stringify({ username, password }));
//     localStorage.setItem('loggedIn', 'true');

//     const redirect = localStorage.getItem('redirectAfterLogin') || '/products';
//     localStorage.removeItem('redirectAfterLogin');
//     router.push(redirect);
//   };

//   return (
//     <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
//       <h1 className="text-2xl mb-6">Sign Up</h1>
//       <input
//         type="text"
//         placeholder="Choose username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <input
//         type="password"
//         placeholder="Choose password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <button
//         onClick={handleSignup}
//         className="bg-green-600 px-4 py-2 rounded w-full max-w-sm"
//       >
//         Sign Up
//       </button>
//     </div>
//   );
// }




'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    localStorage.setItem('loggedIn', 'true');
    const redirect = localStorage.getItem('redirectAfterLogin') || '/products';
    localStorage.removeItem('redirectAfterLogin');
    router.push(redirect);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl mb-6">Sign Up</h1>
      <input
        type="text"
        placeholder="Choose username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
      />
      <input
        type="password"
        placeholder="Choose password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
      />
      <button
        onClick={handleSignup}
        className="bg-green-600 px-4 py-2 rounded w-full max-w-sm"
      >
        Sign Up
      </button>
    </div>
  );
}
