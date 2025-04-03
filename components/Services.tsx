export const Services = () => {
  return (
    <section className="w-full h-auto py-12 bg-gray-50">
      <div className="p-8 text-center rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0F0E47] leading-snug">
          94% of surveyed organizations are <br />
          <span className="text-[#0F0E47]">
            using public cloud computing services
          </span>
        </h2>
        <p className="text-[#4B5563] mt-4 text-lg">
          And the most reliable and fastest growing organizations are protecting
          their cloud workloads and staying ahead of the curve with N2WS Backup
          & Recovery.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            bristolMyersSquibb,
            philips,
            vodafone,
            nasa,
            accenture,
            db,
            warnerMusic,
            moderna,
            trello,
            hp,
            wharton,
            warnerBros,
          ].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styled SVGs with better proportions and balance
const bristolMyersSquibb = (
  <svg
    width="250"
    height="50"
    viewBox="0 0 140 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="-50" y="35" fontSize="24" fill="#0F0E47" fontWeight="bold">
      Bristol Myers Squibb™
    </text>
  </svg>
);

const philips = (
  <svg
    width="100"
    height="50"
    viewBox="0 0 100 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0" y="35" fontSize="24" fill="#0071C5" fontWeight="bold">
      PHILIPS
    </text>
  </svg>
);

const vodafone = (
  <svg
    width="170"
    height="50"
    viewBox="0 0 70 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="22" fill="#E60000" />
    <text x="15" y="30" fontSize="20" fill="#E60000" fontWeight="bold">
      Vodafone
    </text>
  </svg>
);

const nasa = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="28" fill="#0B3D91" />
    <text x="7" y="35" fontSize="18" fill="white" fontWeight="bold">
      NASA
    </text>
  </svg>
);

const accenture = (
  <svg
    width="150"
    height="50"
    viewBox="0 0 110 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="-20" y="35" fontSize="24" fill="#6D0F49" fontWeight="bold">
      accenture
    </text>
    <polygon points="90,10 110,25 90,40" fill="#6D0F49" />
  </svg>
);

const db = (
  <svg
    width="60"
    height="50"
    viewBox="0 0 60 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="10"
      width="50"
      height="30"
      stroke="#003876"
      strokeWidth="3"
    />
    <text x="15" y="35" fontSize="20" fill="#003876" fontWeight="bold">
      DB
    </text>
  </svg>
);

const warnerMusic = (
  <svg
    width="60"
    height="50"
    viewBox="0 0 60 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="25" r="18" fill="#0072CE" />
    <text x="18" y="30" fontSize="16" fill="white" fontWeight="bold">
      WM
    </text>
  </svg>
);

const moderna = (
  <svg
    width="100"
    height="50"
    viewBox="0 0 100 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0" y="35" fontSize="24" fill="#D0021B" fontWeight="bold">
      moderna
    </text>
    <line
      x1="0"
      y1="40"
      x2="100"
      y2="40"
      stroke="#D0021B"
      strokeWidth="2"
      strokeDasharray="5,5"
    />
  </svg>
);

const trello = (
  <svg
    width="90"
    height="50"
    viewBox="0 0 90 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0" y="35" fontSize="24" fill="#026AA7" fontWeight="bold">
      Trello
    </text>
  </svg>
);

const hp = (
  <svg
    width="60"
    height="50"
    viewBox="0 0 60 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="25" r="18" fill="#0096D6" />
    <text x="20" y="30" fontSize="16" fill="white" fontWeight="bold">
      hp
    </text>
  </svg>
);

const wharton = (
  <svg
    width="130"
    height="50"
    viewBox="0 0 130 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0" y="35" fontSize="22" fill="#002F6C" fontWeight="bold">
      Wharton
    </text>
    <text x="0" y="45" fontSize="12" fill="#002F6C">
      University of Pennsylvania
    </text>
  </svg>
);

const warnerBros = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12,10 48,10 55,25 30,55 5,25" fill="#0B3D91" />
    <text x="20" y="35" fontSize="18" fill="white" fontWeight="bold">
      WB
    </text>
  </svg>
);
