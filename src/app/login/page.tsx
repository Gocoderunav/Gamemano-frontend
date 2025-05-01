// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');

//     if (user.username === username && user.password === password) {
//       localStorage.setItem('loggedIn', 'true');
//       router.push('/products'); // after login, go to products
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
//       <h1 className="text-2xl mb-6">Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <button
//         onClick={handleLogin}
//         className="bg-blue-600 px-4 py-2 rounded w-full max-w-sm"
//       >
//         Login
//       </button>
//     </div>
//   );
// }



// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');

//     if (user.username === username && user.password === password) {
//       localStorage.setItem('loggedIn', 'true');

//       // Redirect to saved product detail page or default to /products
//       const target = localStorage.getItem('redirectAfterLogin') || '/products';
//       localStorage.removeItem('redirectAfterLogin');
//       router.push(target);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
//       <h1 className="text-2xl mb-6">Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <button
//         onClick={handleLogin}
//         className="bg-blue-600 px-4 py-2 rounded w-full max-w-sm"
//       >
//         Login
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     if (user.username === username && user.password === password) {
//       localStorage.setItem('loggedIn', 'true');
//       const redirect = localStorage.getItem('redirectAfterLogin') || '/products';
//       localStorage.removeItem('redirectAfterLogin');
//       router.push(redirect);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
//       <h1 className="text-2xl mb-6">Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
//       />
//       <button
//         onClick={handleLogin}
//         className="bg-blue-600 px-4 py-2 rounded w-full max-w-sm"
//       >
//         Login
//       </button>
//     </div>
//   );
// }



'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.username === username && user.password === password) {
      localStorage.setItem('loggedIn', 'true');
      const redirect = localStorage.getItem('redirectAfterLogin') || '/products';
      localStorage.removeItem('redirectAfterLogin');
      router.push(redirect);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl mb-6">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-700 p-2 rounded mb-4 w-full max-w-sm"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 px-4 py-2 rounded w-full max-w-sm"
      >
        Login
      </button>
    </div>
  );
}
