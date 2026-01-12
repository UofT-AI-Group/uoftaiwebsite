import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'Tabular';
                font-style: normal;
                font-weight: 300;
                src: url('./fonts/Tabular-Light.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: italic;
                font-weight: 300;
                src: url('./fonts/Tabular-LightItalic.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: normal;
                font-weight: 400;
                src: url('./fonts/Tabular-Regular.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: italic;
                font-weight: 400;
                src: url('./fonts/Tabular-Italic.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: normal;
                font-weight: 500;
                src: url('./fonts/Tabular-Medium.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: italic;
                font-weight: 500;
                src: url('./fonts/Tabular-MediumItalic.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: normal;
                font-weight: 600;
                src: url('./fonts/Tabular-Semibold.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: italic;
                font-weight: 600;
                src: url('./fonts/Tabular-SemiboldItalic.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: normal;
                font-weight: 700;
                src: url('./fonts/Tabular-Bold.otf');
            }
            @font-face {
                font-family: 'Tabular';
                font-style: italic;
                font-weight: 700;
                src: url('./fonts/Tabular-BoldItalic.otf');
            }
            @font-face {
                font-family: 'Tenor Sans';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.gstatic.com/s/tenorsans/v21/bx6ANxqUneKx06UkIXISr3I.ttf') format('truetype');
            }
      `}
    />
)

export default Fonts
