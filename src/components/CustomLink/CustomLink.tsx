import * as React from 'react';
import { Link } from '@chakra-ui/react';
import { COLORS } from 'const/colors';

interface LinkProps {
  children: React.ReactNode;
  url: string;
  size: number;
  color?: string;
}

export const CustomLink: React.FC<LinkProps> = ({
  children,
  url,
  size,
  color,
}) => {
  return (
    <Link
      href={url}
      isExternal
      transition="all .25s ease-in-out"
      color={color ? color : COLORS.white}
      fontSize={size}
      fontWeight="medium"
      _hover={{
        cursor: 'pointer',
        color: COLORS.secondaryGreen,
      }}>
      {children}
    </Link>
  );
};
