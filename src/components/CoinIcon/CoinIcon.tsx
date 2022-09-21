import {
  BackgroundProps,
  Avatar as Circle,
  SpaceProps,
} from '@chakra-ui/react';

type BackgroundColor = Pick<BackgroundProps, 'bgColor'>;

interface CoinIconProps extends BackgroundColor {
  icon?: React.ReactElement;
  src?: string;
  spacing?: SpaceProps;
}

//replace icon with C logo for fallback icon

export const CoinIcon = ({
  bgColor = 'yellow.400',
  icon = <></>,
  src,
  spacing,
}: CoinIconProps) => {
  return <Circle bgColor={bgColor} icon={icon} src={src} {...spacing} />;
};
