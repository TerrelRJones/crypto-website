import { Box } from '@chakra-ui/react';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps {
  children: string;
  buttonType: ButtonType;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  onClick,
}) => {
  const { isMobile } = useMobileResponsiveness();

  return (
    <Box
      onClick={onClick}
      bgColor={
        ButtonType.PRIMARY.includes(buttonType)
          ? COLORS.primaryBlue
          : 'transparent'
      }
      border={`2px solid  ${
        ButtonType.PRIMARY.includes(buttonType)
          ? COLORS.primaryBlue
          : COLORS.white
      }`}
      padding="10px 15px"
      borderRadius={50}
      fontWeight="bold"
      color="white "
      minW={!isMobile && '150px'}
      textAlign="center"
      transition="all .25s ease-in-out"
      _hover={{
        cursor: 'pointer',
        color: COLORS.primaryBlue,
        bgColor: COLORS.secondaryGreen,
        borderColor: COLORS.secondaryGreen,
      }}>
      {children}
    </Box>
  );
};
