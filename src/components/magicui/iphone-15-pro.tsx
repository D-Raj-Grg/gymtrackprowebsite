import { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
}

export function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}: Iphone15ProProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 433 882"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer frame */}
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      {/* Inner bezel */}
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        className="fill-[#E5E5E5] dark:fill-[#262626]"
      />
      {/* Screen area */}
      <path
        d="M21 75C21 44.0721 46.0721 19 77 19H355C385.928 19 411 44.0721 411 75V807C411 837.928 385.928 863 355 863H77C46.0721 863 21 837.928 21 807V75Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      {/* Screen background */}
      <path
        d="M22 75C22 44.6243 46.6243 20 77 20H355C385.376 20 410 44.6243 410 75V807C410 837.376 385.376 862 355 862H77C46.6243 862 22 837.376 22 807V75Z"
        className="fill-black"
      />

      {/* Screen content area - clip to rounded rect */}
      {src && (
        <image
          href={src}
          x="22"
          y="20"
          width="388"
          height="842"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#screenClip)"
        />
      )}

      {videoSrc && (
        <foreignObject x="22" y="20" width="388" height="842" clipPath="url(#screenClip)">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </foreignObject>
      )}

      {/* Dynamic Island */}
      <path
        d="M154 48C154 38.0589 162.059 30 172 30H260C269.941 30 278 38.0589 278 48V48C278 57.9411 269.941 66 260 66H172C162.059 66 154 57.9411 154 48V48Z"
        className="fill-[#1a1a1a] dark:fill-[#1a1a1a]"
      />

      {/* Left side buttons */}
      {/* Silent switch */}
      <path
        d="M0 171C0 167.686 2.68629 165 6 165V165C9.31371 165 12 167.686 12 171V195C12 198.314 9.31371 201 6 201V201C2.68629 201 0 198.314 0 195V171Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      {/* Volume up */}
      <path
        d="M0 231C0 227.686 2.68629 225 6 225V225C9.31371 225 12 227.686 12 231V291C12 294.314 9.31371 297 6 297V297C2.68629 297 0 294.314 0 291V231Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      {/* Volume down */}
      <path
        d="M0 315C0 311.686 2.68629 309 6 309V309C9.31371 309 12 311.686 12 315V375C12 378.314 9.31371 381 6 381V381C2.68629 381 0 378.314 0 375V315Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      {/* Right side button - Power */}
      <path
        d="M420 267C420 263.686 422.686 261 426 261H428C431.314 261 434 263.686 434 267V363C434 366.314 431.314 369 428 369H426C422.686 369 420 366.314 420 363V267Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      {/* Clip path for screen content */}
      <defs>
        <clipPath id="screenClip">
          <path d="M22 75C22 44.6243 46.6243 20 77 20H355C385.376 20 410 44.6243 410 75V807C410 837.376 385.376 862 355 862H77C46.6243 862 22 837.376 22 807V75Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
