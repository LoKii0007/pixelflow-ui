export const Theme = {
  light: "light",
  dark: "dark",
};

export const NavItems = {
    home: "Home",
    components: "Components",
    documentation: "Documentation",
    github: "Github",
    twitter: "Twitter",
    linkedin: "Linkedin",
    instagram: "Instagram",
}

export const EaseTypes = {
  default: {
    label: "Default",
    value: "ease-[cubic-bezier(0.35,0.1,0.25,1)]",
    className: "after:ease-[cubic-bezier(0.35,0.1,0.25,1)] before:ease-[cubic-bezier(0.35,0.1,0.25,1)] transition-all ",
  },
  in: {
    label: "Ease In",
    value: "ease-in",
    className: "after:ease-in before:ease-in transition-all ",
  },
  out: {
    label: "Ease Out",
    value: "ease-out",
    className: "after:ease-out before:ease-out transition-all ",
  },
  inOut: {
    label: "Ease In Out",
    value: "ease-in-out",
    className: "after:ease-in-out before:ease-in-out transition-all ",
  },
  powerIn: {
    label: "Power In",
    value: "ease-[cubic-bezier(0.25,1,0.5,1)]",
    className: "after:ease-[cubic-bezier(0.25,1,0.5,1)] before:ease-[cubic-bezier(0.25,1,0.5,1)] transition-all ",
  },
  powerOut: {
    label: "Power Out",
    value: "ease-[cubic-bezier(0.25,0.1,0.25,1)]",
    className: "after:ease-[cubic-bezier(0.25,0.1,0.25,1)] before:ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all ",
  },
  powerInOut: {
    label: "Power In Out",
    value: "ease-[cubic-bezier(0.25,0.1,0.25,1)]",
    className: "after:ease-[cubic-bezier(0.25,0.1,0.25,1)] before:ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all ",
  },
  custom: {
    label: "Custom",
    value: "ease-[cubic-bezier(0.25,0.1,0.25,1)]",
    className: "after:ease-[cubic-bezier(0.25,0.1,0.25,1)] before:ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all ",
  },
};

export const DurationTypes = {
  slowest: {
    label: "Slowest",
    value: "duration-1000",
    className: "duration-1000",
  },
  slower: {
    label: "Slower",
    value: "duration-700",
    className: "duration-700",
  },
  medium: {
    label: "Medium",
    value: "duration-500",
    className: "duration-500",
  },
  faster: {
    label: "Faster",
    value: "duration-300",
    className: "duration-300",
  },
  fastest: {
    label: "Fastest",
    value: "duration-100",
    className: "duration-100",
  },
  custom: {
    label: "Custom",
    value: "duration-100",
    className: "duration-100",
  },
};

