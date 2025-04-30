'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
 // adjust path if needed
import notiImg from '../../icons/ion_notifications.png';

const staticNotifications = [
  { id: 1, title: 'New Tournament Announced', time: '2h ago' },
  { id: 2, title: 'You earned a new badge', time: '6h ago' },
  { id: 3, title: 'Weekly leaderboard updated', time: '1d ago' },
];

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full p-2 border border-gray-800 hover:border-gray-600 transition-colors"
      >
        <Image src={notiImg} alt="Notification" width={20} height={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-[#1c1915] border border-gray-700 text-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-600 font-semibold">Notifications</div>
          <ul className="divide-y divide-gray-700">
            {staticNotifications.map((note) => (
              <li key={note.id} className="px-4 py-3 hover:bg-[#2c2a26] transition">
                <div className="text-sm">{note.title}</div>
                <div className="text-xs text-gray-400">{note.time}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
