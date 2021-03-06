import * as React from "react";
import { useEffect } from "react";
import "../Css/Background.css";
import anime, { AnimeTimelineInstance, path } from "animejs";

export default function Background() {
    function hideElement(id: string) {
        const element = document.getElementById(id);
        if (element) element.style.display = "none";
    }

    function showElement(id: string) {
        const element = document.getElementById(id);
        if (element) element.style.display = "inline";
    }

    function addAnim(
        timeline: AnimeTimelineInstance,
        pathNumber: number,
        isEnd: boolean,
        duration: number
    ) {
        const path = anime.path(`#Track${pathNumber}`);
        timeline.add({
            targets: [".PulseContainer", ".Dot"],
            translateX: path("x"),
            translateY: path("y"),
            rotate: path("angle"),
            easing: "linear",
            autoplay: true,
            duration: duration,
            changeComplete: () => {
                hideElement(`Track_Image_${pathNumber}`);
                showElement(`Track_Image_${isEnd ? 1 : pathNumber + 1}`);
            },
        });
    }

    useEffect(() => {
        const timeline = anime.timeline({
            autoplay: true,
            loop: true,
        });
        addAnim(timeline, 1, false, 25000);
        addAnim(timeline, 2, false, 15000);
        addAnim(timeline, 3, false, 25000);
        addAnim(timeline, 4, false, 20000);
        addAnim(timeline, 5, true, 15000);
    });

    return (
        <div id={"Background"}>
            <div className={"Dot"}>
                <div className={"InnerDot"} />
            </div>
            <div className={"PulseContainer"}>
                <div className={"Pulse"} />
            </div>
            <svg
                viewBox="0 0 1920 963"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={1.5}
                preserveAspectRatio={"xMinYMin slice"}
            >
                <path
                    d="M0 0h1920v813.255l-4.73 1.306C1513.88 925.31 1247.71 964.163 960 962.168 405.353 958.318 0 813.255 0 813.255V0z"
                    fill="#055eff"
                />
                <g id="Map" opacity="0.1">
                    <path d="M273.228,834.857L134.007,834.857L134.007,853.237L129.857,852.154L125.007,850.834L125.007,834.857L67.069,834.857L43.899,827.884L37.4,825.857L125.007,825.857L125.007,471.212L-0,471.212L0,462.212L125.007,462.212L125.007,161.859C108.362,169.345 89.899,173.512 70.469,173.512C44.604,173.512 20.45,166.126 -0,153.349L-0,142.583C20.036,156.413 44.314,164.512 70.469,164.512C139.046,164.512 194.721,108.837 194.721,40.26C194.721,26.174 192.372,12.633 188.042,-0L197.52,-0C199.387,5.886 200.857,11.958 201.896,18.174L734.955,18.174C735.124,18.174 735.291,18.184 735.455,18.202L735.455,18.174L968.86,18.174L968.86,0L977.86,0L977.86,22.674C977.86,25.16 975.845,27.174 973.36,27.174L739.455,27.174L739.455,46.957L997.787,46.957L997.787,-0L1006.79,0L1006.79,51.457C1006.79,53.942 1004.77,55.957 1002.29,55.957L739.455,55.957L739.455,197.799L904.531,197.799C907.016,197.799 909.031,199.814 909.031,202.299L909.031,293.309L1197.15,293.143L1197.15,197.436C1197.15,194.953 1199.17,192.936 1201.65,192.936C1204.14,192.936 1206.15,194.953 1206.15,197.436L1206.15,297.641C1206.15,300.125 1204.14,302.139 1201.65,302.141L909.031,302.309L909.031,461.583L1470.79,461.583L1470.79,262.954C1470.79,260.469 1472.8,258.454 1475.29,258.454L1605.04,258.454C1607.52,258.454 1609.54,260.469 1609.54,262.954L1609.54,372.152C1609.54,374.635 1607.52,376.652 1605.04,376.652C1602.56,376.652 1600.54,374.635 1600.54,372.152L1600.54,267.454L1479.79,267.454L1479.79,461.583L1920,461.583L1920,470.583L1353.29,470.583L1353.29,801.768L1540.98,801.768C1543.46,801.768 1545.48,803.785 1545.48,806.268C1545.48,808.752 1543.46,810.768 1540.98,810.768L1348.79,810.768C1346.31,810.768 1344.29,808.754 1344.29,806.268L1344.29,655.58L1187.44,655.58C1184.95,655.58 1182.94,653.564 1182.94,651.08C1182.94,648.596 1184.95,646.58 1187.44,646.58L1344.29,646.58L1344.29,470.583L1081.65,470.583L1081.65,863.737C1081.65,866.223 1079.64,868.237 1077.15,868.237L905.653,868.237L905.653,961.326L896.653,961.093L896.653,863.737C896.653,861.252 898.668,859.237 901.153,859.237L1072.65,859.237L1072.65,470.583L1081.3,470.583L909.031,470.583L909.031,674.599C909.031,677.082 907.014,679.099 904.531,679.099C902.047,679.099 900.031,677.082 900.031,674.599L900.031,470.583L739.455,470.583L739.455,953.237L729.271,952.497L729.426,834.857L282.228,834.857L282.228,888.428L273.228,886.529L273.228,834.857ZM273.228,665.282L134.007,665.282L134.007,825.857L273.228,825.857L273.228,665.282ZM583.696,825.857L729.437,825.857L729.904,470.583L471.588,470.583L471.588,660.782C471.588,663.267 469.573,665.282 467.088,665.282L282.228,665.282L282.228,825.857L574.696,825.857L574.696,660.782C574.696,658.298 576.713,656.282 579.196,656.282C581.68,656.282 583.696,658.298 583.696,660.782L583.696,825.857ZM282.228,656.282L462.588,656.282L462.588,466.083C462.588,463.598 464.603,461.583 467.088,461.583L729.916,461.583L730.155,279.862L474.682,279.862C472.197,279.862 470.182,277.847 470.182,275.362L470.182,154.089C470.182,151.603 472.197,149.589 474.682,149.589L616.51,149.589C618.993,149.589 621.01,151.605 621.01,154.089C621.01,156.572 618.993,158.589 616.51,158.589L479.182,158.589L479.182,270.862L730.167,270.862L730.449,56.065L202.791,56.065C197.606,99.873 171.131,137.197 134.007,157.395L134.007,466.083C134.007,466.297 133.992,466.506 133.963,466.712C133.992,466.917 134.007,467.127 134.007,467.34L134.007,656.282L273.228,656.282L273.228,299.02C273.228,296.536 275.245,294.52 277.728,294.52C280.212,294.52 282.228,296.536 282.228,299.02L282.228,656.282ZM739.455,273.3C739.774,273.918 739.955,274.619 739.955,275.362C739.955,276.104 739.774,276.805 739.455,277.423L739.455,461.583L900.031,461.583L900.031,206.799L739.455,206.799L739.455,273.3ZM203.085,27.174C203.506,31.485 203.721,35.847 203.721,40.26C203.721,42.54 203.664,44.806 203.55,47.065L730.455,47.065L730.455,27.174L203.085,27.174Z" />
                </g>
                <path
                    id={"Track_Image_1"}
                    d="M471.596 470.604l.041 190.188a4.501 4.501 0 01-4.502 4.501l-189.408-.077a4.5 4.5 0 01-4.499-4.5V299.007c0-2.483 2.017-4.5 4.5-4.5 2.484 0 4.5 2.017 4.5 4.5v357.211l180.408.073-.041-190.186a4.504 4.504 0 014.499-4.501l268.36-.021h613.296c2.49 0 4.5 2.015 4.5 4.5l.04 335.685h187.69c2.48 0 4.5 2.017 4.5 4.5 0 2.484-2.02 4.5-4.5 4.5h-192.19c-2.48 0-4.5-2.014-4.5-4.499l-.04-335.686H735.455l-263.859.021z"
                    fill="#fff"
                    fillOpacity={0.32}
                    display={"inline"}
                />
                <path
                    id={"Track_Image_2"}
                    d="M1540.98,806.268L1348.79,806.268L1348.73,466.083L1475.29,466.083L1475.29,262.954L1605.04,262.954L1605.04,372.167"
                    stroke="#fff"
                    strokeOpacity={0.32}
                    strokeWidth={"9px"}
                    fill={"none"}
                    display={"none"}
                />
                <path
                    id={"Track_Image_3"}
                    d="M1605.04,372.196L1605.04,262.954L1475.29,262.954L1475.29,466.083L734.471,466.083L734.807,275.362L474.682,275.362L474.654,154.089L616.464,154.089"
                    stroke="#fff"
                    strokeOpacity={0.32}
                    strokeWidth={"9px"}
                    fill={"none"}
                    display={"none"}
                />
                <path
                    id={"Track_Image_4"}
                    d="M616.909,154.089L474.682,154.089L474.682,275.292L734.903,275.362L734.448,830.357L579.196,830.357L579.196,660.785"
                    stroke="#fff"
                    strokeOpacity={0.32}
                    strokeWidth={"9px"}
                    fill={"none"}
                    display={"none"}
                />
                <path
                    id={"Track_Image_5"}
                    d="M579.196,660.8L579.196,830.357L277.728,830.357L277.728,299.055"
                    stroke="#fff"
                    strokeOpacity={0.32}
                    strokeWidth={"9px"}
                    fill={"none"}
                    display={"none"}
                />
                <path
                    id={"Track1"}
                    d="M277.728,299.007L277.728,660.657L467.765,660.657L467.765,466.389L1348.36,466.389L1348.36,806.268L1540.04,806.268"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeOpacity: 0,
                        strokeWidth: "1px",
                    }}
                />
                <path
                    id={"Track2"}
                    d="M1540.98,806.268L1348.79,806.268L1348.73,466.083L1475.29,466.083L1475.29,262.954L1605.04,262.954L1605.04,372.167"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeOpacity: 0,
                        strokeWidth: "1px",
                    }}
                />
                <path
                    id={"Track3"}
                    d="M1605.04,372.196L1605.04,262.954L1475.29,262.954L1475.29,466.083L734.471,466.083L734.807,275.362L474.682,275.362L474.654,154.089L616.464,154.089"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeOpacity: 0,
                        strokeWidth: "1px",
                    }}
                />
                <path
                    id={"Track4"}
                    d="M616.909,154.089L474.682,154.089L474.682,275.292L734.903,275.362L734.448,830.357L579.196,830.357L579.196,660.785"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeOpacity: 0,
                        strokeWidth: "1px",
                    }}
                />
                <path
                    id={"Track5"}
                    d="M579.196,660.8L579.196,830.357L277.728,830.357L277.728,299.055"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeOpacity: 0,
                        strokeWidth: "1px",
                    }}
                />
                <defs>
                    <image
                        id="prefix___Image1"
                        width={1}
                        height={78}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABOCAYAAADhG3wwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFklEQVQYlWNgYGBgYmJgYGAYJQaOAAB52ACdkDUWewAAAABJRU5ErkJggg=="
                    />
                </defs>
            </svg>
        </div>
    );
}
