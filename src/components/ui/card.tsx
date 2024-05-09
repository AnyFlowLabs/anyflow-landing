import { hexToRgb } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  color: 'red' | 'green' | 'blue' | 'white'; // Add more colors if needed
  shade?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'; // Add more shades if needed
  blurr: string; // value ranges from 0 to 100 
  opacity: number; // value ranges from 0 to 100
  width: number; // value ranges from 0 to 100
  padding?: number; // In rem
};

type ColorTheme = {
  [color in CardProps['color']]: {
    [shade in NonNullable<CardProps['shade']>]: string;
  };
};

const colorTheme: ColorTheme = {
    red: {
        '100': '#FEE2E2',
        '200': '#FECACA',
        '300': '#FCA5A5',
        '400': '#F87171',
        '500': '#EF4444',
        '600': '#DC2626',
        '700': '#B91C1C',
        '800': '#991B1B',
        '900': '#7F1D1D',
    },

    green: {
        '100': '#ECFDF5',
        '200': '#D1FAE5',
        '300': '#A7F3D0',
        '400': '#6EE7B7',
        '500': '#34D399',
        '600': '#10B981',
        '700': '#059669',
        '800': '#047857',
        '900': '#065F46',
    },

    blue: {
        '100': '#EFF6FF',
        '200': '#DBEAFE',
        '300': '#BFDBFE',
        '400': '#93C5FD',
        '500': '#60A5FA',
        '600': '#3B82F6',
        '700': '#2563EB',
        '800': '#1D4ED8',
        '900': '#1E40AF',
    },

    white: {
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#FFFFFF',
        '600': '#FFFFFF',
        '700': '#FFFFFF',
        '800': '#FFFFFF',
        '900': '#FFFFFF',
    },
};

export const Card = ({
  title,
  description,
  color,
  shade = '500',
  blurr = '15',
  opacity = 25,
  width = 100,
  padding = 16,
}: CardProps) => {
  const bgColor = colorTheme[color][shade];
  const rgbColor = hexToRgb(bgColor);
  if (!rgbColor) throw new Error('Invalid color: ${bgColor}');
  const rgbaColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity/100})`;
  const styles = {
    backgroundColor: rgbaColor,
    backdropFilter: `blur(${blurr}px)`,
    width: `${width}%`,
    padding: `${padding}rem`,
  };
  return (
    <div style={styles} className="rounded-xl shadow-2xl text-white sm:flex transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};