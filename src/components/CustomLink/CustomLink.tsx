import * as React from 'react';
import { Link } from '@chakra-ui/react';
import { COLORS } from 'const/colors';

interface LinkProps {
  children: string;
  url: string;
}

export const CustomLink: React.FC<LinkProps> = ({ children, url }) => {
  return (
    <Link
      href={url}
      isExternal
      transition="all .25s ease-in-out"
      color={COLORS.white}
      fontSize={20}
      fontWeight="medium"
      _hover={{
        cursor: 'pointer',
        color: COLORS.secondaryGreen,
      }}>
      {children}
    </Link>
  );
};
