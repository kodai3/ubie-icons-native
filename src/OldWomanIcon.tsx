import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgOldWomanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8.75 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M16.5 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.516 8.82A10 10 0 0 0 2 12v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9c0-5.523-4.477-10-10-10-4.3 0-7.966 2.714-9.379 6.522a1 1 0 0 0-.105.298m13.804 9.914A8 8 0 0 1 4.247 10.02c.697.018 1.65.01 2.672-.234 1.335-.317 2.795-1.022 4.238-2.48 1.175.776 2.224 1.422 3.425 1.88 1.408.536 2.973.796 5.166.814.164.64.252 1.31.252 2.001a7.97 7.97 0 0 1-2.14 5.446l-2.153-2.153a1 1 0 0 0-1.414 1.414zM4 18.001c.569.757 1.242 1.43 1.999 1.999H4zM20 20v-1.999A10 10 0 0 1 18.001 20zM18.917 7.978c-1.57-.07-2.667-.298-3.624-.662-1.188-.453-2.217-1.134-3.738-2.148a1 1 0 0 0-1.314.181C8.876 6.941 7.56 7.577 6.456 7.84c-.506.121-.966.167-1.397.18A8 8 0 0 1 12 4a8 8 0 0 1 6.917 3.978"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgOldWomanIcon;
