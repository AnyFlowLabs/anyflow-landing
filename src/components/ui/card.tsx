import { hexToRgb } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  color: 'default' | 'foreground'; // Add more colors if needed
  blurr: string; // value ranges from 0 to 100 
  opacity: number; // value ranges from 0 to 1
  width: number; // value ranges from 0 to 100
  padding?: number; // In rem
};

const cardStyle = "rounded-xl shadow-2xl sm:flex transform transition-transform duration-500 hover:scale-105 hover:shadow-xl";

const cardVariants = {
  'default': ' bg-card text-black',
  'foreground': ' bg-card-foreground text-white'
}

const colorMap = {
  'default': '#FFFFFF',
  'foreground': '#000000'
}

export const Card = ({
  title,
  description,
  color,
  blurr = '15',
  opacity = 0.2,
  width = 100,
  padding = 16,
}: CardProps) => {
  const variant = cardVariants[color];
  const bgColor = colorMap[color] || '#FFFFFF';
  const rgbColor = hexToRgb(bgColor);
  if (!rgbColor) throw new Error('Invalid color: ${bgColor}');
  const rgbaColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`;
  const styles = {
    backgroundColor: rgbaColor,
    backdropFilter: `blur(${blurr}px)`,
    width: `${width}%`,
    padding: `${padding}rem`,
  };
  
  return (
    <div style={styles} className={cardStyle+variant}>
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};