export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
