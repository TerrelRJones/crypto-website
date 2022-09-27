import { Box } from '@chakra-ui/react';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  SMALL = 'small',
  LARGE = 'large',
}

interface ButtonProps {
  children: string;
  buttonType: ButtonType;
  buttonSize?: ButtonSize;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  buttonSize,
  onClick,
}) => {
  const { isMobile } = useMobileResponsiveness();

  const getButtonSize = () => {
    if (buttonSize === ButtonSize.SMALL) return '5px 15px';
    if (buttonSize === ButtonSize.LARGE) return '20px 15px';
    return '10px 15px';
  };

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
      padding={getButtonSize()}
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
