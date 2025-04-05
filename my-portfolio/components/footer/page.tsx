import React from 'react'

export default function Footer({myUserName}: {myUserName: string}) {
  // Footer component that takes a username as a prop and displays links to GitHub, LinkedIn, and Upwork profiles.
  // The links open in a new tab and have a hover effect for better user experience.
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="mt-2">
          <a
            href={`https://github.com/${myUserName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          {" | "}
          <a
            href={`https://linkedin.com/in/${myUserName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href={`https://www.upwork.com/freelancers/~0135f85a00872141d4`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Upwork
          </a>
        </div>
      </footer>
  )
}
