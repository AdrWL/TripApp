import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6347F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 16c3.172 1.346 4.936 1.321 8 0m5-5.85v7.817C26 20.194 24.21 22 22 22H12c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.974 3.974 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 26 10.15Z"
    />
    <Path
      fill="#6347F9"
      d="M7.22 41v-8.4h.936V41H7.22Zm-5.616 0v-8.4h.936V41h-.936Zm.456-3.732v-.912h5.556v.912H2.06ZM12.8 41.12c-.625 0-1.18-.14-1.669-.42-.48-.28-.86-.668-1.14-1.164-.272-.496-.408-1.06-.408-1.692 0-.624.136-1.18.408-1.668a3.09 3.09 0 0 1 1.14-1.152c.488-.28 1.044-.42 1.668-.42.616 0 1.164.14 1.644.42.488.28.868.664 1.14 1.152.28.488.42 1.044.42 1.668 0 .632-.14 1.196-.42 1.692a2.954 2.954 0 0 1-1.14 1.164c-.48.28-1.028.42-1.644.42Zm0-.852c.44 0 .831-.104 1.175-.312.344-.216.612-.504.804-.864.192-.368.288-.784.288-1.248 0-.464-.096-.876-.288-1.236-.192-.36-.46-.64-.804-.84a2.228 2.228 0 0 0-1.176-.312c-.44 0-.836.104-1.188.312-.344.2-.616.484-.816.852-.192.36-.284.768-.276 1.224-.008.464.084.88.276 1.248.2.36.472.648.816.864a2.29 2.29 0 0 0 1.188.312Zm4.264.732v-6.264h.9l.024 1.428-.18.06c.064-.24.168-.456.312-.648a2.363 2.363 0 0 1 1.224-.84c.248-.08.508-.12.78-.12.328 0 .62.056.876.168.264.104.484.288.66.552.184.256.324.596.42 1.02l-.216-.108.084-.204c.08-.184.196-.36.348-.528.16-.176.34-.332.54-.468.208-.136.432-.24.672-.312.248-.08.5-.12.756-.12.44 0 .812.096 1.116.288.304.184.532.468.684.852.16.384.24.872.24 1.464V41h-.924v-3.732c0-.416-.052-.756-.156-1.02a1.163 1.163 0 0 0-.468-.588c-.2-.136-.456-.204-.768-.204-.272 0-.524.048-.756.144-.224.088-.42.216-.588.384a1.9 1.9 0 0 0-.384.552 1.707 1.707 0 0 0-.132.672V41h-.912v-3.744c0-.4-.056-.732-.168-.996a1.23 1.23 0 0 0-.468-.6c-.208-.136-.464-.204-.768-.204-.264 0-.508.048-.732.144-.224.088-.42.212-.588.372a1.9 1.9 0 0 0-.384.552 1.707 1.707 0 0 0-.132.672V41h-.912Zm13.466.12c-.624 0-1.18-.136-1.668-.408a2.916 2.916 0 0 1-1.128-1.14c-.272-.488-.408-1.048-.408-1.68 0-.488.076-.928.228-1.32.152-.4.364-.748.636-1.044.28-.296.612-.524.996-.684a3.08 3.08 0 0 1 1.248-.252c.424 0 .808.076 1.152.228.352.152.652.364.9.636.256.264.448.58.576.948.128.368.184.772.168 1.212l-.012.42h-5.22l-.132-.756h4.668l-.216.204v-.288a1.847 1.847 0 0 0-.252-.828 1.767 1.767 0 0 0-.648-.66c-.272-.168-.6-.252-.984-.252-.448 0-.836.092-1.164.276a1.77 1.77 0 0 0-.756.792c-.176.352-.264.788-.264 1.308 0 .496.096.928.288 1.296.192.36.464.64.816.84.36.2.792.3 1.296.3.296 0 .588-.048.876-.144.296-.104.62-.304.972-.6l.468.648a3.019 3.019 0 0 1-.66.492 4.382 4.382 0 0 1-.84.336c-.304.08-.616.12-.936.12Z"
    />
  </Svg>
);

const UserCircleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12.5}
      cy={12}
      r={10}
      stroke="#A1A1A1"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#A1A1A1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 17c-1.481-1.274-3.186-2-5-2s-3.519.726-5 2"
    />
    <Circle
      cx={3}
      cy={3}
      r={3}
      stroke="#A1A1A1"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 9.5 12)"
    />
  </Svg>
);

const DarkModeButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#F7F7F7"
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
    />
    <Path
      stroke="#080613"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 20v-2a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2m0 8v2a4 4 0 0 1-4 4h-2m-8 0h-2a4 4 0 0 1-4-4v-1.444M24 29c3.078 0 5.75-2.427 7.088-3.899a1.62 1.62 0 0 0 0-2.202C29.75 21.426 27.078 19 24 19c-3.078 0-5.75 2.427-7.088 3.899a1.62 1.62 0 0 0 0 2.202C18.25 26.574 20.922 29 24 29Zm2-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)

const LogoutButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#EF4444"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 10h-6m-9 5.266v-10m12 10a2 2 0 0 1-2 2H7m6-12a2 2 0 0 0-2-2H7M1.89 17.86l2 1.333C5.22 20.08 7 19.127 7 17.53V3.003C7 1.406 5.22.453 3.89 1.34l-2 1.334A2 2 0 0 0 1 4.337v11.859a2 2 0 0 0 .89 1.664Z"
    />
  </Svg>
)

export { HomeIcon, UserCircleIcon, DarkModeButton, LogoutButton};