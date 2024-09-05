import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowDUpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11.254 6.366a.946.946 0 0 1 1.495 0l7.996 9.818c.574.703.116 1.816-.747 1.816H4.002c-.863 0-1.32-1.113-.747-1.817z"
    />
  </Svg>
);
export default SvgArrowDUpIcon;
