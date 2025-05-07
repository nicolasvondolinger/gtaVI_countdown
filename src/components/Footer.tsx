import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto py-6 bg-gray-900 text-center">
      <div className="flex justify-center gap-6">
        <Link 
          href="https://www.linkedin.com/in/nicolas-von-dolinger-5a7036207" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src="/assets/linkedin.png" 
            alt="LinkedIn" 
            width={40} 
            height={40}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <Link 
          href="https://github.com/nicolasvondolinger" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src="/assets/github.png" 
            alt="GitHub" 
            width={40} 
            height={40}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <Link 
          href="https://www.rockstargames.com/VI" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src="/assets/rockstar.png" 
            alt="Rockstar" 
            width={40} 
            height={40}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </footer>
  );
}