import React from "react";

export interface SVGProps extends React.SVGAttributes<SVGSVGElement>, React.RefAttributes<SVGSVGElement> {
    className?: string
}

export const DA = React.forwardRef<SVGSVGElement, SVGProps>(({className, children, ...props}, ref) => {
        return (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100%" viewBox="0 0 5000 2639" enableBackground="new 0 0 5000 2639" ref={ref}
                 className={className}
                 {...props}>
                <path fill="#FFFFFF" opacity="1.000000" stroke="none"
                      d="
M1476.000000,2642.000000
	C1353.291504,2642.000000 1230.583130,2642.000000 1106.940186,2641.452637
	C1105.884399,2640.561035 1105.763306,2640.216797 1105.798096,2638.955078
	C1105.968384,2419.769775 1105.986084,2201.501465 1105.995239,1983.233398
	C1106.001709,1828.946045 1105.996582,1674.658691 1105.996704,1520.371338
	C1105.996704,1516.494019 1105.996704,1512.616699 1105.996704,1508.087769
	C1100.791992,1508.087769 1096.850464,1508.087769 1092.909058,1508.087769
	C736.015442,1508.087769 379.121796,1508.087158 22.228151,1508.092041
	C16.897284,1508.092163 11.566417,1508.159180 5.533489,1508.099121
	C3.887620,1508.002197 2.943810,1508.001099 2.000000,1508.000000
	C2.000000,1384.624878 2.000000,1261.249756 2.735231,1136.848389
	C4.446342,1135.703735 5.422222,1135.585327 6.865655,1135.453857
	C7.333209,1135.440918 8.052965,1134.842651 8.974590,1134.981201
	C11.228183,1135.142212 12.560150,1135.184082 13.892118,1135.184082
	C374.258087,1135.187500 734.624023,1135.189331 1094.989990,1135.168823
	C1097.973145,1135.168701 1100.956421,1134.867432 1104.303711,1134.942871
	C1105.396851,1135.013794 1105.653931,1134.572754 1105.680664,1132.956421
	C1105.947388,1130.390381 1105.994507,1128.724243 1105.994507,1127.057983
	C1105.997681,755.738342 1105.998169,384.418762 1105.983398,13.099140
	C1105.983276,10.107041 1105.774414,7.114951 1105.843018,3.607341
	C1106.015259,2.727884 1106.007690,2.363942 1106.000000,2.000000
	C1228.708496,2.000000 1351.416870,2.000000 1474.910889,2.478680
	C1475.759033,3.286225 1475.821777,3.615091 1475.709229,4.871465
	C1475.515015,6.798062 1475.479248,7.797151 1475.479248,8.796239
	C1475.476196,380.881378 1475.474365,752.966492 1475.497070,1125.051636
	C1475.497314,1128.029907 1475.833496,1131.008179 1476.149902,1134.525269
	C1476.956421,1135.059692 1477.625732,1135.055298 1479.210205,1135.104126
	C1482.458374,1135.167603 1484.791626,1135.186890 1487.124756,1135.186890
	C2654.000732,1135.188232 3820.876953,1135.188599 4987.752930,1135.182739
	C4991.084473,1135.182739 4994.416504,1135.091919 4998.229492,1135.400879
	C4999.087402,1135.890991 4999.464355,1136.023560 4999.901855,1137.079590
	C4999.976074,1259.219116 4999.990723,1380.435425 4999.994141,1501.651611
	C4999.994141,1503.647095 4999.852051,1505.642700 4999.779297,1507.830811
	C4999.781738,1508.023560 5000.050781,1508.299561 4999.114258,1508.207275
	C4996.510742,1508.106079 4994.844727,1508.089355 4993.178223,1508.089355
	C3824.347900,1508.088013 2655.517578,1508.087891 1486.687256,1508.087769
	C1485.687378,1508.087769 1484.683960,1508.032227 1483.688477,1508.098022
	C1481.125732,1508.267456 1478.566528,1508.490601 1475.475708,1508.734009
	C1475.475708,1513.639160 1475.475708,1517.940796 1475.475708,1522.242432
	C1475.475586,1891.188843 1475.474365,2260.135254 1475.493652,2629.081787
	C1475.493896,2632.734375 1475.769043,2636.387207 1475.811401,2640.535156
	C1475.804565,2641.353760 1475.902222,2641.677002 1476.000000,2642.000000
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M1476.901855,2642.000000
	C1475.902222,2641.677002 1475.804565,2641.353760 1476.754517,2640.530029
	C2651.465820,2640.029297 3825.129639,2640.029297 5000.000000,2640.029297
	C5000.000000,2634.236328 5000.000000,2629.660645 5000.000000,2625.084961
	C5000.000000,2347.137939 4999.996094,2069.190918 5000.002441,1791.243774
	C5000.004883,1696.929077 5000.033691,1602.614258 5000.050781,1508.299561
	C5000.050781,1508.299561 4999.781738,1508.023560 5000.325195,1507.979858
	C5001.246094,1507.957520 5001.623047,1507.978760 5002.000000,1508.000000
	C5002.000000,1885.934814 5002.000000,2263.869629 5002.000000,2642.000000
	C3827.267822,2642.000000 2652.535645,2642.000000 1476.901855,2642.000000
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M1475.884399,3.943956
	C1475.821777,3.615091 1475.759033,3.286225 1475.848145,2.478680
	C2650.069824,2.000000 3824.139648,2.000000 4999.112305,2.501318
	C5000.009766,3.336850 5000.004883,3.671062 4999.062988,3.976908
	C4991.793945,3.941716 4985.462402,3.928916 4979.130371,3.928910
	C4042.332031,3.928024 3105.533447,3.927043 2168.735107,3.928790
	C1937.784912,3.929220 1706.834595,3.938659 1475.884399,3.943956
z"/>
                <path fill="#ECAEBA" opacity="1.000000" stroke="none"
                      d="
M6.398100,1135.466919
	C5.422222,1135.585327 4.446342,1135.703735 2.735231,1135.911011
	C2.000000,760.996704 1.993221,385.993378 2.123561,10.990121
	C2.124577,8.066449 -0.182711,4.214487 4.963511,2.509593
	C5.967277,3.357398 6.007530,3.695610 5.908767,4.960107
	C5.748529,6.885114 5.708716,7.883835 5.708706,8.882556
	C5.704864,380.890167 5.702184,752.897766 5.729485,1124.905396
	C5.729703,1127.877075 6.137194,1130.848633 6.343714,1134.232422
	C6.332902,1134.644653 6.398098,1135.466919 6.398100,1135.466919
z"/>
                <path fill="#ECAEBA" opacity="1.000000" stroke="none"
                      d="
M2.000000,1508.922485
	C2.943810,1508.001099 3.887620,1508.002197 5.360453,1509.010010
	C5.827297,1513.347656 5.710732,1516.678711 5.710656,1520.009766
	C5.702248,1889.995483 5.701513,2259.981201 5.718389,2629.967041
	C5.718541,2633.290527 5.961387,2636.613770 6.039180,2640.451660
	C5.991623,2641.310791 5.995811,2641.655518 6.000000,2642.000000
	C4.667657,2642.000000 3.335315,2642.000000 2.001486,2642.000000
	C2.000000,2264.614990 2.000000,1887.229980 2.000000,1508.922485
z"/>
                <path fill="#D37288" opacity="1.000000" stroke="none"
                      d="
M5000.000000,4.005275
	C5000.004883,3.671062 5000.009766,3.336850 5000.007812,2.501228
	C5000.666992,2.332408 5001.887695,2.630182 5001.911133,3.003160
	C5002.078125,5.657546 5002.000000,8.327129 5002.000000,10.991811
	C5002.000000,385.379547 5002.000000,759.767273 5001.458008,1135.085083
	C5000.557617,1136.062012 5000.199219,1136.109009 4999.840820,1136.156128
	C4999.464355,1136.023560 4999.087402,1135.890991 4998.763184,1134.805542
	C4999.291992,1129.652954 5000.183594,1125.453369 5000.184570,1121.253418
	C5000.248047,752.831360 5000.244629,384.409271 5000.233887,15.987218
	C5000.233887,11.993236 5000.081055,7.999257 5000.000000,4.005275
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M6.922509,2642.000000
	C5.995811,2641.655518 5.991623,2641.310791 6.968967,2640.485840
	C370.849365,2640.010742 733.748230,2640.017090 1096.647095,2640.016357
	C1099.645386,2640.016357 1102.643799,2639.922607 1105.642090,2639.872559
	C1105.763306,2640.216797 1105.884399,2640.561035 1106.002808,2641.452637
	C739.948364,2642.000000 373.896667,2642.000000 6.922509,2642.000000
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M6.047784,4.033822
	C6.007530,3.695610 5.967277,3.357398 5.963511,2.509593
	C372.051666,2.000000 738.103333,2.000000 1105.077515,2.000000
	C1106.007690,2.363942 1106.015259,2.727884 1104.928711,3.571190
	C1100.502441,4.009819 1097.170532,3.933455 1093.838623,3.933405
	C734.240479,3.928010 374.642365,3.928077 15.044228,3.932688
	C12.045413,3.932727 9.046598,3.998656 6.047784,4.033822
z"/>
                <path fill="#ECAEBA" opacity="1.000000" stroke="none"
                      d="
M4999.901855,1137.079590
	C5000.199219,1136.109009 5000.557617,1136.062012 5001.458008,1136.007568
	C5002.000000,1259.375122 5002.000000,1382.750244 5002.000000,1507.062744
	C5001.623047,1507.978760 5001.246094,1507.957520 5000.323242,1507.787109
	C4999.852051,1505.642700 4999.994141,1503.647095 4999.994141,1501.651611
	C4999.990723,1380.435425 4999.976074,1259.219116 4999.901855,1137.079590
z"/>
                <path fill="#C60C31" opacity="1.000000" stroke="none"
                      d="
M4999.114258,1508.207275
	C5000.033691,1602.614258 5000.004883,1696.929077 5000.002441,1791.243774
	C4999.996094,2069.190918 5000.000000,2347.137939 5000.000000,2625.084961
	C5000.000000,2629.660645 5000.000000,2634.236328 5000.000000,2640.029297
	C3825.129639,2640.029297 2651.465820,2640.029297 1476.859009,2640.034668
	C1475.769043,2636.387207 1475.493896,2632.734375 1475.493652,2629.081787
	C1475.474365,2260.135254 1475.475586,1891.188843 1475.475708,1522.242432
	C1475.475708,1517.940796 1475.475708,1513.639160 1475.475708,1508.734009
	C1478.566528,1508.490601 1481.125732,1508.267456 1483.688477,1508.098022
	C1484.683960,1508.032227 1485.687378,1508.087769 1486.687256,1508.087769
	C2655.517578,1508.087891 3824.347900,1508.088013 4993.178223,1508.089355
	C4994.844727,1508.089355 4996.510742,1508.106079 4999.114258,1508.207275
z"/>
                <path fill="#C60C31" opacity="1.000000" stroke="none"
                      d="
M4999.062988,3.976909
	C5000.081055,7.999257 5000.233887,11.993236 5000.233887,15.987218
	C5000.244629,384.409271 5000.248047,752.831360 5000.184570,1121.253418
	C5000.183594,1125.453369 4999.291992,1129.652954 4998.282227,1134.448242
	C4994.416504,1135.091919 4991.084473,1135.182739 4987.752930,1135.182739
	C3820.876953,1135.188599 2654.000732,1135.188232 1487.124756,1135.186890
	C1484.791626,1135.186890 1482.458374,1135.167603 1478.929199,1134.759399
	C1477.195679,1134.071533 1476.622314,1133.946533 1476.012939,1133.986450
	C1475.833496,1131.008179 1475.497314,1128.029907 1475.497070,1125.051636
	C1475.474365,752.966492 1475.476196,380.881378 1475.479248,8.796239
	C1475.479248,7.797151 1475.515015,6.798062 1475.709229,4.871465
	C1706.834595,3.938659 1937.784912,3.929220 2168.735107,3.928790
	C3105.533447,3.927043 4042.332031,3.928024 4979.130371,3.928910
	C4985.462402,3.928916 4991.793945,3.941716 4999.062988,3.976909
z"/>
                <path fill="#C60C31" opacity="1.000000" stroke="none"
                      d="
M1105.798096,2638.955078
	C1102.643799,2639.922607 1099.645386,2640.016357 1096.647095,2640.016357
	C733.748230,2640.017090 370.849365,2640.010742 7.020713,2639.971191
	C5.961387,2636.613770 5.718541,2633.290527 5.718389,2629.967041
	C5.701513,2259.981201 5.702248,1889.995483 5.710656,1520.009766
	C5.710732,1516.678711 5.827297,1513.347656 6.062512,1509.105713
	C11.566417,1508.159180 16.897284,1508.092163 22.228151,1508.092041
	C379.121796,1508.087158 736.015442,1508.087769 1092.909058,1508.087769
	C1096.850464,1508.087769 1100.791992,1508.087769 1105.996704,1508.087769
	C1105.996704,1512.616699 1105.996704,1516.494019 1105.996704,1520.371338
	C1105.996582,1674.658691 1106.001709,1828.946045 1105.995239,1983.233398
	C1105.986084,2201.501465 1105.968384,2419.769775 1105.798096,2638.955078
z"/>
                <path fill="#C60C31" opacity="1.000000" stroke="none"
                      d="
M5.908767,4.960107
	C9.046598,3.998656 12.045413,3.932727 15.044228,3.932688
	C374.642365,3.928077 734.240479,3.928010 1093.838623,3.933405
	C1097.170532,3.933455 1100.502441,4.009819 1104.748657,4.086706
	C1105.774414,7.114951 1105.983276,10.107041 1105.983398,13.099140
	C1105.998169,384.418762 1105.997681,755.738342 1105.994507,1127.057983
	C1105.994507,1128.724243 1105.947388,1130.390381 1105.360840,1132.952393
	C1104.322266,1133.943604 1104.035645,1134.229858 1103.939575,1134.706787
	C1100.956421,1134.867432 1097.973145,1135.168701 1094.989990,1135.168823
	C734.624023,1135.189331 374.258087,1135.187500 13.892118,1135.184082
	C12.560150,1135.184082 11.228183,1135.142212 8.786152,1134.686035
	C7.269643,1134.003906 6.829123,1133.859985 6.354527,1133.820312
	C6.137194,1130.848633 5.729703,1127.877075 5.729485,1124.905396
	C5.702184,752.897766 5.704864,380.890167 5.708706,8.882556
	C5.708716,7.883835 5.748529,6.885114 5.908767,4.960107
z"/>
                <path fill="#D37288" opacity="1.000000" stroke="none"
                      d="
M1476.149902,1134.525269
	C1476.622314,1133.946533 1477.195679,1134.071533 1478.014160,1134.706177
	C1477.625732,1135.055298 1476.956421,1135.059692 1476.149902,1134.525269
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M1104.303711,1134.942871
	C1104.035645,1134.229858 1104.322266,1133.943604 1105.119141,1133.852173
	C1105.653931,1134.572754 1105.396851,1135.013794 1104.303711,1134.942871
z"/>
                <path fill="#D54D68" opacity="1.000000" stroke="none"
                      d="
M6.343714,1134.232422
	C6.829123,1133.859985 7.269643,1134.003906 7.864527,1134.547363
	C8.052965,1134.842651 7.333209,1135.440918 6.865654,1135.453857
	C6.398098,1135.466919 6.332902,1134.644653 6.343714,1134.232422
z"/>
            </svg>
        )
    }
)

DA.displayName = 'DA'


export const EN = React.forwardRef<SVGSVGElement, SVGProps>(({className, children, ...props}, ref) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="650">
                <defs>
                    <path id="A" transform="scale(.0616)" fill="#fff" d="M-.162 0L0-.5.162 0z"/>
                    <g id="B">
                        <use transform="rotate(216)"/>
                        <use transform="rotate(288)"/>
                        <use/>
                        <use transform="rotate(72)"/>
                        <use transform="rotate(144)"/>
                    </g>
                    <g id="C">
                        <use x="-.252"/>
                        <use x="-.126"/>
                        <use/>
                        <use x=".126"/>
                        <use x=".252"/>
                    </g>
                    <g id="D">
                        <use x="-.063"/>
                        <use x=".315"/>
                    </g>
                    <g id="E">
                        <use/>
                        <use y=".054"/>
                        <use y=".108"/>
                        <use y=".162"/>
                    </g>
                    <g id="F">
                        <use y="-.216"/>
                        <use/>
                        <use y=".216"/>
                    </g>
                    <path id="G" fill="#b22234" d="M0 0h1300v50H0z"/>
                </defs>
                <path fill="#fff" d="M0 0h1300v650H0z"/>
                <use/>
                <use y="100"/>
                <use y="200"/>
                <use y="300"/>
                <use y="400"/>
                <use y="500"/>
                <use y="600"/>
                <path fill="#3c3b6e" d="M0 0h494v350H0z"/>
                <use transform="matrix(650 0 0 650 247 175)"/>
                <svg viewBox="0 0 60 30" width="1300" height="650">
                    <clipPath id="H">
                        <path d="M30,15L60,30V15H0V30H30z"/>
                    </clipPath>
                    <clipPath id="I">
                        <path d="M0,30H60V0z"/>
                    </clipPath>
                    <g clipPath="url(#I)">
                        <path d="M0 0v30h60V0z" fill="#00247d"/>
                        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
                        <path d="M0 30l30-15 30 15" clipPath="url(#H)" fill="none" stroke="#cf142b" strokeWidth="4"/>
                        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                        <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6"/>
                    </g>
                </svg>
            </svg>
        )
    }
)

EN.displayName = 'EN'

export const flags = {
    "da": <DA/>,
    "en": <EN/>
} as const