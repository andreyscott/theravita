import {
  Leaf, Cpu, Route, Network, HeartPulse, Building2, Users, Globe, Search, Handshake, PenLine,
  MessageCircle, BookOpen, Mic, Mail, Newspaper, type LucideProps,
} from "lucide-react";

const icons = {
  leaf: Leaf,
  cpu: Cpu,
  route: Route,
  network: Network,
  heart: HeartPulse,
  building: Building2,
  users: Users,
  globe: Globe,
  search: Search,
  handshake: Handshake,
  pen: PenLine,
  message: MessageCircle,
  book: BookOpen,
  mic: Mic,
  mail: Mail,
  news: Newspaper,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = icons[name];
  return <C aria-hidden="true" strokeWidth={1.6} {...props} />;
}
