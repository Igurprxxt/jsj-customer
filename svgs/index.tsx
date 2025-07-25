import * as React from 'react';
import Svg, { Circle, ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

function TradeLogoSVG({ className, width = 25, height = 25, stroke }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G fill="#fff">
        <Path d="M16.477 3.446l-6.544 7.107L6.605 8.03a.72.72 0 00-.96.08L2.44 11.505l1.02 1.02L6.249 9.57l3.334 2.527a.722.722 0 00.966-.086l6.99-7.59.456.419a.196.196 0 00.188.044.193.193 0 00.134-.14l.656-2.62a.197.197 0 00-.057-.19.197.197 0 00-.197-.042l-2.556.877a.197.197 0 00-.13.145.192.192 0 00.06.184l.38.347h.004z" />
        <Path d="M7.438 16.502l-3.575-3.576 2.45-2.596 1.126.854v5.318h-.001zm3.53-4.106c-.243.264-.589.416-.949.416a1.28 1.28 0 01-.778-.262l-1.238-.938v5.455l.656.656c.359.358.834.556 1.341.556s.983-.198 1.341-.556l.657-.656v-5.79l-1.03 1.12v-.001zm5.591-3.63a.525.525 0 00-.524-.524h-1.242l-2.23 2.421v5.839l3.996-3.996v-3.74z" />
        <Path d="M18.942 7.44l-1.776-1.775-.949 1.03 1.735 1.734c.868.868.868 2.28 0 3.147l-6.378 6.378a2.21 2.21 0 01-1.574.652 2.21 2.21 0 01-1.574-.652l-6.378-6.378a2.226 2.226 0 010-3.147l6.378-6.378A2.21 2.21 0 0110 1.4a2.21 2.21 0 011.574.652l2.818 2.819.948-1.03-2.778-2.779A3.6 3.6 0 0010 0a3.6 3.6 0 00-2.562 1.061L1.059 7.44a3.628 3.628 0 000 5.124l6.379 6.378A3.599 3.599 0 0010 20.005c.969 0 1.878-.377 2.562-1.062l6.379-6.378a3.628 3.628 0 000-5.124z" />
      </G>
    </Svg>
  );
}

function PngIconSVG({ className, width = 40, height = 40, stroke }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M7.75 4A3.25 3.25 0 0111 .75h16c.121 0 .238.048.323.134l10.793 10.793a.457.457 0 01.134.323v24A3.25 3.25 0 0135 39.25H11A3.25 3.25 0 017.75 36V4z"
        stroke="#333741"
        strokeWidth={1.5}
      />
      <Path d="M27 .5V8a4 4 0 004 4h7.5" stroke="#333741" strokeWidth={1.5} />
      <Path
        d="M1 20a2 2 0 012-2h24a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V20z"
        fill="#099250"
      />
      <Path
        d="M4.914 30v-7.273h2.87c.551 0 1.021.106 1.41.316.388.209.684.499.887.87.206.37.31.796.31 1.279 0 .483-.105.909-.313 1.278-.209.37-.51.657-.906.863-.393.206-.869.309-1.427.309h-1.83V26.41h1.581c.296 0 .54-.051.732-.153.194-.104.338-.247.433-.43.097-.184.145-.396.145-.635 0-.242-.048-.452-.145-.632a.972.972 0 00-.433-.423c-.195-.102-.44-.153-.74-.153H6.453V30H4.914zm12.558-7.273V30h-1.328l-3.164-4.577h-.053V30h-1.538v-7.273h1.35l3.139 4.574h.063v-4.574h1.531zm6.093 2.351a1.596 1.596 0 00-.21-.458 1.415 1.415 0 00-.77-.558 1.862 1.862 0 00-.543-.074c-.372 0-.699.092-.98.277-.28.185-.498.453-.654.806-.156.35-.234.779-.234 1.285 0 .507.076.938.23 1.293.154.355.372.626.654.813.282.185.614.277.998.277.348 0 .645-.061.891-.184.249-.126.438-.302.568-.53.133-.227.199-.495.199-.805l.313.046H22.15v-1.158h3.044v.916c0 .64-.135 1.189-.405 1.648-.27.457-.642.81-1.115 1.058-.474.246-1.016.37-1.626.37-.682 0-1.281-.15-1.797-.452a3.13 3.13 0 01-1.208-1.289c-.286-.558-.43-1.221-.43-1.988 0-.59.086-1.115.256-1.577.173-.464.415-.857.725-1.179.31-.322.67-.567 1.083-.735a3.51 3.51 0 011.339-.252c.412 0 .795.06 1.15.18.355.12.67.287.945.505.277.218.503.477.678.778.175.298.288.627.337.987h-1.562z"
        fill="#fff"
      />
    </Svg>
  );
}

function PdfIconSVG({ className, width = 40, height = 40, stroke }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <Path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <Path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <Path d="M480 224L384 128 480 128z" fill="#cad1d8" />
      <Path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#f15642"
      />
      <Path
        d="M101.744 303.152c0-4.224 3.328-8.832 8.688-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.688-3.184-8.688-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36zM196.656 384c-4.224 0-8.832-2.304-8.832-7.92v-72.672c0-4.592 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528h-30.448zm8.064-72.912V368.4h21.232c34.544 0 36.08-57.312 0-57.312H204.72zM303.872 312.112v20.336h32.624c4.608 0 9.216 4.608 9.216 9.072 0 4.224-4.608 7.68-9.216 7.68h-32.624v26.864c0 4.48-3.184 7.92-7.664 7.92-5.632 0-9.072-3.44-9.072-7.92v-72.672c0-4.592 3.456-7.936 9.072-7.936h44.912c5.632 0 8.96 3.344 8.96 7.936 0 4.096-3.328 8.704-8.96 8.704h-37.248v.016z"
        fill="#fff"
      />
      <Path d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z" fill="#cad1d8" />
    </Svg>
  );
}

function MenuIcon({ className, width = 24, height = 24, stroke }: any) {
  return (
    <Svg
      width={width}
      height={height}
      fill="#fff"
      viewBox="0 0 24 24"
      strokeWidth={2}
      // stroke={stroke || '#000'}
      className={className}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
      />
    </Svg>
  );
}

function AverageIcon({ className, width = 24, height = 24, fill = '#EDF022' }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 22" fill="none" className={className}>
      <G clipPath="url(#clip0_757_3901)" fill={fill}>
        <Path d="M6.867 10.183H3.444c-.473 0-.856.366-.856.817v9.808c0 .45.383.817.856.817h3.423c.472 0 .856-.366.856-.817V11c0-.451-.384-.817-.856-.817zM13.712.375H10.29c-.472 0-.855.366-.855.817v19.615c0 .452.383.818.855.818h3.423c.473 0 .856-.366.856-.818V1.192c0-.451-.383-.817-.856-.817zM20.558 5.28h-3.423c-.473 0-.856.365-.856.817v14.71c0 .452.383.818.856.818h3.423c.473 0 .856-.366.856-.817V6.097c0-.452-.383-.818-.856-.818z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.875 20.808a.8.8 0 01.25-.578.877.877 0 01.606-.24h20.538c.227 0 .445.086.605.24a.8.8 0 01.251.578.8.8 0 01-.25.577.877.877 0 01-.606.24H1.731a.877.877 0 01-.605-.24.799.799 0 01-.251-.578z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_757_3901">
          <Path fill="#fff" transform="translate(.875 .375)" d="M0 0H22.25V21.2506H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function AnalyticsPerformanceSVG({ className, width = 20, height = 20 }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        d="M5 6.63h5v1.25H5V6.63zm0-2.5h7.5v1.25H5V4.13zm0-2.5h7.5v1.25H5V1.63z"
        fill="#768EA7"
      />
      <Path
        d="M2.944 17.88l3.52-6.247 4.646 4.057a1.25 1.25 0 001.928-.334l4.356-6.502-1.038-.696-4.375 6.53-.044.064-4.647-4.056a1.252 1.252 0 00-1.925.331L2.5 16.12V1.63H1.25v16.25a1.25 1.25 0 001.25 1.25h16.25v-1.25H2.944z"
        fill="#768EA7"
      />
    </Svg>
  );
}

function AnalyticsDistributionSVG({
  className,
  width = 20,
  height = 20,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none">
      <Path
        d="M7.719.662a7.719 7.719 0 107.718 7.719A7.728 7.728 0 007.72.662zm6.531 7.719c0 .602-.083 1.202-.247 1.781h-2.858c.182-1.18.182-2.382 0-3.562h2.858c.164.579.248 1.179.247 1.78zM5.79 11.35h3.858a8.544 8.544 0 01-1.93 3.34 8.558 8.558 0 01-1.929-3.34zm-.29-1.188a10.45 10.45 0 010-3.562h4.444a10.452 10.452 0 010 3.562H5.5zM1.187 8.381c0-.602.083-1.202.248-1.781h2.858a11.681 11.681 0 000 3.562H1.435a6.502 6.502 0 01-.248-1.781zm8.461-2.969H5.79a8.543 8.543 0 011.93-3.34 8.557 8.557 0 011.93 3.34zm3.884 0H10.89a10.041 10.041 0 00-1.655-3.384 6.553 6.553 0 014.301 3.384h-.003zM6.204 2.028a10.042 10.042 0 00-1.655 3.384H1.902a6.553 6.553 0 014.302-3.384zM1.902 11.35H4.55c.333 1.222.895 2.37 1.655 3.384a6.554 6.554 0 01-4.302-3.384zm7.332 3.384a10.041 10.041 0 001.655-3.384h2.646a6.554 6.554 0 01-4.301 3.384z"
        fill="#768EA7"
      />
    </Svg>
  );
}
function NoTradesSVG({
  className,
  width = 60,
  height = 60,
  fill = '#fff',
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 108.67 122.88" fill={fill}>
      <Path
        d="M25.14 53.37a2.77 2.77 0 000 5.54h20.11a2.77 2.77 0 000-5.54zm60.48-36.9l6.66 6.69-8 8.14 8 8.14-6.67 6.66-8-8.09-8 8.1L63 39.43l8-8.14-8-8.15 6.67-6.65 8 8.08 8-8.1zM77.77 0A30.91 30.91 0 0191 58.82v57.69a6.38 6.38 0 01-6.37 6.37H6.37A6.38 6.38 0 010 116.51V22.4A6.38 6.38 0 016.37 16h44.3a30.89 30.89 0 0127.1-16zm7.78 60.81a30.92 30.92 0 01-37.23-39.29H6.37a.9.9 0 00-.63.26.92.92 0 00-.26.63v94.09a.89.89 0 00.89.89h78.28a.9.9 0 00.63-.26.92.92 0 00.26-.63V60.81zM25.14 92.22a2.74 2.74 0 000 5.48h38.47a2.74 2.74 0 100-5.48zm0-19.41a2.74 2.74 0 000 5.48h38.47a2.74 2.74 0 000-5.48z"
        fillRule="evenodd"
      />
    </Svg>
  );
}

function TradeBottomLoaderAnimationSVG({
  className,
  width = 60,
  height = 60,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg viewBox="0 0 200 200" width={width} height={height}>
      <Circle fill="#FF156D" stroke="#FF156D" strokeWidth={15} r={15} cx={40} cy={65} />
      <Circle fill="#FF156D" stroke="#FF156D" strokeWidth={15} r={15} cx={100} cy={65} />
      <Circle fill="#FF156D" stroke="#FF156D" strokeWidth={15} r={15} cx={160} cy={65} />
    </Svg>
  );
}

function PieCoinsSVG({
  className,
  width = 30,
  height = 30,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 256 256"
      height={height}
      width={width}>
      <Path
        d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43zM232 132c0 13.22-30.79 28-72 28-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26zM72 150.25v-23.79A183.74 183.74 0 0096 128a183.74 183.74 0 0024-1.54v23.79A163 163 0 0196 152a163 163 0 01-24-1.75zm96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57zM96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28-72-14.78-72-28 30.79-28 72-28zm-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124zm64 48v-4.17c2.63.1 5.29.17 8 .17 3.88 0 7.67-.13 11.39-.35a121.92 121.92 0 0012.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87zm48 26.25V174.4a179.48 179.48 0 0024 1.6 183.74 183.74 0 0024-1.54v23.79a165.45 165.45 0 01-48 0zm64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87z"
        stroke="none"
      />
    </Svg>
  );
}

function BankSvg({
  className,
  width = 30,
  height = 30,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 256 256"
      height={height}
      width={width}>
      <Path d="M232 96H24l104-64z" opacity={0.2} stroke="none" />
      <Path
        d="M24 104h24v64H32a8 8 0 000 16h192a8 8 0 000-16h-16v-64h24a8 8 0 004.19-14.81l-104-64a8 8 0 00-8.38 0l-104 64A8 8 0 0024 104zm40 0h32v64H64zm80 0v64h-32v-64zm48 64h-32v-64h32zM128 41.39L203.74 88H52.26zM248 208a8 8 0 01-8 8H16a8 8 0 010-16h224a8 8 0 018 8z"
        stroke="none"
      />
    </Svg>
  );
}
function CommissionSVG({
  className,
  width = 30,
  height = 30,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 256 256"
      height={height}
      width={width}>
      <Path d="M96 37.5v72l-62.4 36A96 96 0 0196 37.5z" opacity={0.2} stroke="none" />
      <Path
        d="M100 116.43a8 8 0 004-6.93v-72A8 8 0 0093.34 30a104.06 104.06 0 00-67.61 117 8 8 0 004.52 5.81 7.86 7.86 0 003.35.74 8 8 0 004-1.07zM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0148-78.38zm130.34 26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05 104.05 0 00128 24a8 8 0 00-8 8v91.83l-78.81 45.9a8 8 0 00-2.87 11A104 104 0 00232 128a103.34 103.34 0 00-13.66-51.48zM136 40.36a88.05 88.05 0 0163.89 36.94L136 114.51zM128 216a88.45 88.45 0 01-71.49-36.68l75.4-43.91.22-.14 75.77-44.13A88 88 0 01128 216z"
        stroke="none"
      />
    </Svg>
  );
}
function AnalyticsSetupTagSVG({
  className,
  width = 20,
  height = 20,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 20 21"
      height={height}
      width={width}>
      <Path
        d="M5.417 4.548a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm12.425 5.483l-7.5-7.5a1.667 1.667 0 00-1.175-.483H3.333a1.667 1.667 0 00-1.666 1.667v5.833a1.667 1.667 0 00.491 1.183l.342.334a4.667 4.667 0 011.733-.617l-.9-.9V3.715h5.834l7.5 7.5-5.834 5.833-.9-.9a4.667 4.667 0 01-.616 1.733l.341.342c.311.313.734.49 1.175.492a1.667 1.667 0 001.175-.492l5.834-5.833a1.667 1.667 0 00.364-1.816 1.666 1.666 0 00-.364-.543zM5.417 4.548a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm2.916 11.667h-2.5v2.5H4.167v-2.5h-2.5v-1.667h2.5v-2.5h1.666v2.5h2.5v1.667z"
        fill="#768EA7"
      />
    </Svg>
  );
}
function AnalyticsMistakeTagSVG({
  className,
  width = 20,
  height = 20,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 20 21"
      height={height}
      width={width}>
      <Path
        d="M5.417 4.548c-.692 0-1.25.558-1.25 1.25s.558 1.25 1.25 1.25c.691 0 1.25-.558 1.25-1.25s-.559-1.25-1.25-1.25zm0 0c-.692 0-1.25.558-1.25 1.25s.558 1.25 1.25 1.25c.691 0 1.25-.558 1.25-1.25s-.559-1.25-1.25-1.25zm12.425 5.483l-7.5-7.5a1.665 1.665 0 00-1.175-.483H3.333c-.916 0-1.666.75-1.666 1.667v5.833c0 .442.175.867.491 1.183l.342.334a4.8 4.8 0 011.733-.617l-.9-.9V3.715h5.834l7.5 7.5-5.834 5.833-.9-.9a4.6 4.6 0 01-.616 1.733l.341.342c.309.317.734.492 1.175.492.442 0 .867-.175 1.175-.492l5.834-5.833c.316-.309.491-.734.491-1.176 0-.441-.175-.866-.491-1.183zM5.417 4.548c-.692 0-1.25.558-1.25 1.25s.558 1.25 1.25 1.25c.691 0 1.25-.558 1.25-1.25s-.559-1.25-1.25-1.25zm2.916 11.667H1.667v-1.667h6.666v1.667z"
        fill="#768EA7"
      />
    </Svg>
  );
}
function AnalyticsStreakSVG({
  className,
  width = 20,
  height = 20,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 20 21"
      height={height}
      width={width}>
      <Path
        d="M16.859 9.613a.625.625 0 00-.391-.442l-4.5-1.689 1.145-5.729a.625.625 0 00-1.07-.547l-8.75 9.375a.625.625 0 00.234 1.016l4.503 1.688-1.142 5.723a.625.625 0 001.07.547l8.75-9.375a.626.626 0 00.15-.567zm-8.314 7.486l.818-4.092a.625.625 0 00-.391-.708l-4.128-1.55 6.61-7.083-.817 4.092a.625.625 0 00.391.708l4.125 1.547-6.608 7.086z"
        fill="#768EA7"
      />
    </Svg>
  );
}

function AnalyticsBreakDownSVG({
  className,
  width = 20,
  height = 20,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg
      fill={props.fill || 'none'}
      strokeWidth={0}
      viewBox="0 0 20 21"
      height={height}
      width={width}>
      <Path
        d="M2.5 10.38h3.333l2.5 6.667 3.334-13.333 2.5 6.666H17.5"
        stroke="#768EA7"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function AnalyticFilterSVG({
  width = 35,
  height = 35,
}: {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 38 40" fill="none">
      <G filter="url(#filter0_d_1019_5868)">
        <Rect x={0.5} y={1.5} width={35} height={35} rx={7.5} stroke="#858585" />
        <Path
          d="M15.38 19.422c-2.072-1.55-3.55-3.255-4.357-4.214-.25-.296-.332-.514-.381-.896-.169-1.31-.253-1.965.131-2.389.385-.423 1.064-.423 2.422-.423h9.61c1.358 0 2.038 0 2.422.422.384.424.3 1.079.131 2.389-.05.382-.131.6-.38.896-.809.96-2.29 2.669-4.367 4.221a.876.876 0 00-.335.623c-.206 2.276-.396 3.522-.514 4.152-.191 1.019-1.634 1.631-2.407 2.177-.46.325-1.018-.062-1.078-.565-.22-1.918-.408-3.84-.561-5.764a.876.876 0 00-.335-.63z"
          stroke="#DBDBDB"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

function LightThemeLogo(props: any) {
  return (
    <Svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295.2 235.62"
      {...props}>
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={93.43}
          y1={118.56}
          x2={206.96}
          y2={118.56}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#0094d7" />
          <Stop offset={0.38} stopColor="#2cb5d9" />
          <Stop offset={0.79} stopColor="#57d5dc" />
          <Stop offset={1} stopColor="#68e2dd" />
        </LinearGradient>
      </Defs>
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          d="M27.58 211.61c.51 0 .79.24.79.75v3.36c0 .51-.27.79-.79.79H16.81v18.35c0 .51-.24.75-.75.75h-3.74c-.51 0-.75-.24-.75-.75v-18.35H.79c-.51 0-.79-.27-.79-.79v-3.36c0-.51.27-.75.79-.75h26.79zM52.59 211.61c5.25 0 7.38 2.44 7.38 7.07v1.96c0 3.91-1.51 6.21-5.11 6.86l5.87 7.27c.21.24.17.86-.45.86h-4.42c-.58 0-.75-.14-.96-.45l-5.42-7.13H38.4v6.83c0 .51-.24.75-.75.75h-3.7c-.51 0-.79-.24-.79-.75v-22.23c0-.69.34-1.03 1.03-1.03h18.42zm-14.2 12.24h13.14c2.33 0 3.19-.99 3.19-3.05v-1.44c0-2.06-.86-3.05-3.19-3.05H38.84c-.31 0-.45.14-.45.41v7.13zM81.14 211.61c1.75 0 2.81.55 3.94 2.61l11.35 20.62c.24.45.14.79-.41.79h-4.36c-.45 0-.62-.1-.79-.45l-2.44-4.42H72.31l-2.37 4.42c-.17.34-.38.45-.79.45h-4.46c-.58 0-.69-.34-.45-.79l11.25-20.62c1.13-2.06 2.16-2.61 3.6-2.61h2.02zm-6.66 15.16h11.8l-5.45-10.05c-.1-.17-.21-.24-.38-.24h-.21c-.17 0-.27.07-.38.24l-5.39 10.05zM118.16 211.61c7.44 0 10.5 2.98 10.5 9.67v4.67c0 6.69-3.05 9.67-10.5 9.67h-16.05c-.69 0-1.03-.34-1.03-1.03v-21.95c0-.69.34-1.03 1.03-1.03h16.05zm-11.84 18.8c0 .31.14.45.45.45h11.25c4.05 0 5.39-1.3 5.39-5.35v-3.77c0-4.05-1.34-5.35-5.39-5.35h-11.25c-.31 0-.45.14-.45.48v13.55zM159.08 211.61c.51 0 .79.24.79.75v3.26c0 .51-.27.75-.79.75h-14.99c-3.57 0-4.56 1.06-4.56 4.67v.34h19.38c.51 0 .75.24.75.75v2.71c0 .51-.24.75-.75.75h-19.38v.58c0 3.6.99 4.67 4.56 4.67h14.99c.51 0 .79.24.79.75v3.26c0 .51-.27.75-.79.75h-15.09c-6.93 0-9.6-2.47-9.6-9.06v-5.9c0-6.59 2.68-9.06 9.6-9.06h15.09zM169.96 211.61c.51 0 .75.24.75.75v13.69c0 3.64 1.03 4.7 4.56 4.7h13.89c.51 0 .75.24.75.75v3.36c0 .51-.24.75-.75.75h-14.1c-6.93 0-9.6-2.47-9.6-9.06v-14.2c0-.51.27-.75.79-.75h3.7zM199.23 211.61c.51 0 .75.24.75.75v22.5c0 .51-.24.75-.75.75h-3.7c-.51 0-.79-.24-.79-.75v-22.5c0-.51.27-.75.79-.75h3.7zM228.83 211.61c1.85 0 2.71.82 2.71 2.61v3.12c0 1.68-.38 2.16-1.72 2.88l-18.15 9.57c-.24.14-.31.27-.31.51v.24c0 .21.1.31.34.31h18.83c.51 0 .79.24.79.75v3.26c0 .51-.27.75-.79.75h-22.19c-1.89 0-2.71-.82-2.71-2.57v-3.12c0-1.68.27-2.16 1.61-2.88l18.08-9.6c.24-.14.31-.27.31-.51v-.24c0-.21-.14-.31-.34-.31h-18.66c-.51 0-.79-.24-.79-.75v-3.26c0-.51.27-.75.79-.75h22.19zM261.05 211.61c.51 0 .79.24.79.75v3.26c0 .51-.27.75-.79.75h-14.99c-3.57 0-4.56 1.06-4.56 4.67v.34h19.38c.51 0 .75.24.75.75v2.71c0 .51-.24.75-.75.75H241.5v.58c0 3.6.99 4.67 4.56 4.67h14.99c.51 0 .79.24.79.75v3.26c0 .51-.27.75-.79.75h-15.09c-6.93 0-9.6-2.47-9.6-9.06v-5.9c0-6.59 2.68-9.06 9.6-9.06h15.09zM286.95 211.61c5.25 0 7.38 2.44 7.38 7.07v1.96c0 3.91-1.51 6.21-5.11 6.86l5.87 7.27c.21.24.17.86-.45.86h-4.42c-.58 0-.75-.14-.96-.45l-5.42-7.13h-11.08v6.83c0 .51-.24.75-.75.75h-3.7c-.51 0-.79-.24-.79-.75v-22.23c0-.69.34-1.03 1.03-1.03h18.42zm-14.2 12.24h13.14c2.33 0 3.19-.99 3.19-3.05v-1.44c0-2.06-.86-3.05-3.19-3.05H273.2c-.31 0-.45.14-.45.41v7.13z"
          strokeWidth={0}
        />
        <G>
          <Path
            className="cls-2"
            d="M206.22 30.8l-58.51 63.54-29.76-22.55a6.446 6.446 0 00-8.58.71l-28.65 30.36 9.12 9.12 24.93-26.42 29.81 22.6a6.451 6.451 0 008.64-.77l62.49-67.87 4.09 3.75a1.752 1.752 0 001.68.39c.59-.18 1.05-.65 1.19-1.25l5.87-23.42c.15-.62-.04-1.28-.51-1.71-.33-.3-.75-.46-1.19-.46-.19 0-.38.03-.57.09l-22.86 7.84c-.58.2-1.02.69-1.15 1.3-.13.6.07 1.23.53 1.64l3.39 3.11z"
          />
          <Path
            d="M125.4 147.54l-31.96-31.97 21.91-23.21 10.06 7.63v47.55zm31.57-36.71a11.589 11.589 0 01-8.49 3.72c-2.53 0-4.94-.81-6.96-2.34l-11.07-8.39v48.77l5.87 5.87c3.21 3.2 7.46 4.97 11.99 4.97s8.79-1.77 11.99-4.97l5.87-5.87v-51.76l-9.21 10.01zm49.99-32.45c0-2.59-2.1-4.69-4.69-4.69h-11.1l-19.94 21.65v52.2l35.73-35.73V78.37z"
            strokeWidth={0}
            fill="url(#linear-gradient)"
          />
          <Path
            className="cls-2"
            d="M228.26 66.52l-15.88-15.88-8.48 9.21 15.51 15.51c7.76 7.76 7.76 20.38 0 28.13l-57.03 57.03c-3.76 3.76-8.75 5.83-14.07 5.83s-10.31-2.07-14.07-5.83l-57.03-57.03c-7.76-7.76-7.76-20.38 0-28.13l57.03-57.03c3.76-3.76 8.75-5.83 14.07-5.83s10.31 2.07 14.07 5.83l25.2 25.2 8.48-9.21-24.84-24.84c-6.12-6.12-14.26-9.49-22.91-9.49s-16.79 3.37-22.91 9.49L68.37 66.51c-12.63 12.63-12.63 33.19 0 45.82l57.03 57.03c6.12 6.12 14.25 9.49 22.91 9.49s16.79-3.37 22.91-9.49l57.03-57.03c12.63-12.63 12.63-33.19 0-45.82z"
          />
        </G>
      </G>
    </Svg>
  );
}

export {
  MenuIcon,
  AverageIcon,
  AnalyticsPerformanceSVG,
  NoTradesSVG,
  AnalyticsDistributionSVG,
  TradeBottomLoaderAnimationSVG,
  PieCoinsSVG,
  BankSvg,
  CommissionSVG,
  AnalyticsSetupTagSVG,
  AnalyticsMistakeTagSVG,
  AnalyticsStreakSVG,
  AnalyticsBreakDownSVG,
  AnalyticFilterSVG,
  TradeLogoSVG,
  PngIconSVG,
  PdfIconSVG,
  LightThemeLogo,
};
