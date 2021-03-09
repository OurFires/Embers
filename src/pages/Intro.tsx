import React from 'react';
import Button from "../components/Button/index";
import {Alert, Close} from "../icons";

export default function Intro(){
    return (
        <div>
            <div style={{display:'flex', width:'100%'}}>
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'column',
                    justifyContent:'center',
                    width:'30%',
                    background:'black',
                    minHeight:'100vh',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div style={{position: 'absolute', top: 10, right: 10}}>
                        <svg width="31" height="274" viewBox="0 0 61 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4512 32.2646L18.4512 9.15918L32.5332 9.15918L32.5332 31L39.54 31L39.54 9.15918L52.8701 9.15918L52.8701 32.2646L60.3213 32.2646L60.3213 0.34082L11 0.340818L11 32.2646L18.4512 32.2646ZM11 39.0664L11 47.5771L33.1826 47.5771C37.5576 47.5771 40.7363 50.4482 40.7363 54.5498C40.7363 58.5146 38.2412 60.9756 34.208 60.9756L11 60.9756L11 69.2471L33.3877 69.2471C37.7285 69.2471 40.7363 72.0498 40.7363 76.1514C40.7363 80.3213 38.207 82.6455 33.7637 82.6455L11 82.6455L11 91.1562L35.8486 91.1562C43.0947 91.1562 47.9141 86.4736 47.9141 79.3301C47.9141 74.1006 45.1113 69.7939 40.6338 68.0508L40.6338 67.8457C45.2822 66.5127 47.9141 62.8555 47.9141 57.7285C47.9141 52.8066 45.1455 48.9785 40.9414 47.4062L40.9414 47.2354L47.2305 47.2354L47.2305 39.0664L11 39.0664ZM10.4189 118.261C10.4189 127.421 17.5283 133.197 29.1152 133.197C40.7021 133.197 47.8457 127.387 47.8457 118.261C47.8457 113.134 45.248 108.998 41.0098 106.947L41.0098 106.742L60.3213 106.742L60.3213 98.2314L11 98.2314L11 106.571L17.1865 106.571L17.1865 106.742C12.9824 108.861 10.4189 112.929 10.4189 118.261ZM40.8389 115.629C40.8389 121.063 36.293 124.481 29.1152 124.481C21.9033 124.481 17.3916 121.098 17.3916 115.629C17.3916 110.365 22.0059 106.708 29.1152 106.708C36.1562 106.708 40.8389 110.365 40.8389 115.629ZM21.835 162.729C18.8271 161.806 16.8447 158.798 16.8447 154.833C16.8447 149.262 20.7412 145.707 26.5518 145.707L27.0644 145.707L27.0644 171.034L29.833 171.034C40.8389 171.034 47.9824 164.608 47.9824 154.32C47.9824 143.861 40.4287 137.23 28.9785 137.23C17.4258 137.23 10.2822 143.793 10.2822 154.662C10.2822 163.241 14.999 169.599 21.835 170.692L21.835 162.729ZM41.3857 154.354C41.3857 159.242 37.7969 162.523 32.6699 162.694L32.6699 145.775C37.7285 146.117 41.3857 149.569 41.3857 154.354ZM11 176.537L11 185.048L32.0889 185.048C37.1816 185.048 40.292 187.953 40.292 192.772C40.292 194.208 40.0869 195.507 39.8135 196.225L47.5039 196.225C47.6406 195.609 47.8457 194.652 47.8457 193.559C47.8457 189.286 45.3164 186.107 40.9072 184.877L40.9072 184.706L47.2305 184.706L47.2305 176.537L11 176.537Z" fill="#9D8AFF"/>
                            <path d="M48.2646 219.615L11 219.615L11 232.14C11 243.219 17.8951 249.727 29.6452 249.727C41.3695 249.727 48.2646 243.193 48.2646 232.14L48.2646 219.615ZM44.0811 224.264L44.0811 231.83C44.0811 240.301 38.9162 244.975 29.5936 244.975C20.3484 244.975 15.1836 240.275 15.1836 231.83L15.1836 224.264L44.0811 224.264ZM18.6957 272.633C16.1649 271.884 14.4346 269.379 14.4346 265.97C14.4346 261.141 17.8176 258.12 22.9567 258.12L23.2149 258.12L23.2149 277.385L24.9194 277.385C33.054 277.385 38.3222 272.917 38.3222 265.66C38.3222 258.249 32.6667 253.497 24.3254 253.497C15.8808 253.497 10.5352 258.171 10.5352 265.867C10.5352 271.729 13.9956 276.274 18.6957 277.049L18.6957 272.633ZM34.4227 265.583C34.4227 269.818 31.2205 272.633 26.7271 272.736L26.7271 258.145C31.1947 258.43 34.4227 261.373 34.4227 265.583ZM30.4458 281.465C26.5721 281.465 24.2221 283.918 23.0083 288.98L21.9754 293.241C21.2265 296.314 20.116 297.373 18.1792 297.373C15.7517 297.373 14.2022 295.126 14.2022 291.485C14.2022 287.843 15.6742 285.778 18.7473 285.235L18.7473 280.742C13.7116 281.258 10.5352 285.184 10.5352 291.485C10.5352 297.476 13.8407 301.892 18.5149 301.892C22.3627 301.892 24.4803 299.929 25.7974 294.506L26.8304 290.245C27.5534 287.25 28.8188 285.881 30.6782 285.881C33.0282 285.881 34.6552 288.05 34.6552 291.33C34.6552 294.635 32.9249 296.701 30.1101 297.037L30.1101 301.324C34.8617 301.143 38.3222 297.218 38.3222 291.33C38.3222 285.519 35.0425 281.465 30.4458 281.465ZM42.6349 309.045C42.6349 310.621 43.9003 311.86 45.4498 311.86C47.025 311.86 48.2646 310.621 48.2646 309.045C48.2646 307.496 47.025 306.23 45.4498 306.23C43.9003 306.23 42.6349 307.496 42.6349 309.045ZM11 306.799L11 311.292L37.8574 311.292L37.8574 306.799L11 306.799ZM0.876827 328.439C0.876827 335.851 5.13785 340.577 11.5423 340.577L37.8574 340.577L37.8574 336.29L33.3381 336.29L33.3381 336.213C36.4629 334.431 38.3222 331.28 38.3222 327.484C38.3222 320.537 32.9507 316.044 24.532 316.044C16.1907 316.044 10.7934 320.537 10.7934 327.381C10.7934 331.151 12.7044 334.327 15.6226 335.98L15.6226 336.083L11.3874 336.083C7.38458 336.083 4.69884 333.269 4.69884 328.62C4.69884 325.263 6.32578 322.603 8.7791 321.725L8.7791 317.103C4.20818 317.851 0.876828 322.526 0.876827 328.439ZM14.7445 328.285C14.7445 323.662 18.5149 320.64 24.532 320.64C30.5491 320.64 34.3711 323.662 34.3711 328.285C34.3711 332.959 30.4458 336.083 24.532 336.083C18.6182 336.083 14.7445 332.959 14.7445 328.285ZM11 346.439L11 350.933L26.8045 350.933C31.3496 350.933 34.3453 353.696 34.3453 357.931C34.3453 362.063 31.9694 364.103 27.6309 364.103L11 364.103L11 368.596L28.4315 368.596C34.526 368.596 38.3222 365.188 38.3222 359.3C38.3222 355.142 36.4629 352.275 33.5705 350.778L33.5705 350.674L37.8574 350.674L37.8574 346.439L11 346.439ZM20.994 384.065C14.5638 384.504 10.3802 389.927 10.3802 398.062C10.3802 406.403 14.6929 411.826 21.588 411.826C26.8562 411.826 29.9551 408.753 31.6595 400.98L32.5634 396.848C33.6738 391.761 35.6881 389.772 38.6321 389.772C42.4283 389.772 44.7008 393.362 44.7008 398.01C44.7008 402.865 42.1959 406.093 38.1156 406.507L38.1156 411.155C44.4426 410.948 48.8844 405.577 48.8844 398.14C48.8844 390.418 44.5717 384.995 38.4255 384.995C33.1315 384.995 29.7485 388.223 28.1216 395.686L27.2177 399.818C26.0814 404.983 24.0155 407.049 20.8907 407.049C17.2237 407.049 14.5638 403.382 14.5638 398.32C14.5638 392.975 16.9913 389.256 20.994 388.714L20.994 384.065ZM0.954297 418.825C0.954297 423.68 2.83948 425.901 9.11481 428.199L37.8574 438.761L37.8574 434.035L15.4934 426.598L15.4934 426.521L37.8574 419.083L37.8574 414.28L10.9742 424.196L9.08898 423.577C5.96423 422.544 4.75048 421.149 4.75048 418.644C4.75048 418.076 4.77631 417.379 4.87961 416.888L1.10924 416.888C1.00595 417.379 0.954297 418.283 0.954297 418.825ZM30.4458 441.834C26.5721 441.834 24.2221 444.288 23.0083 449.349L21.9754 453.61C21.2265 456.683 20.116 457.742 18.1792 457.742C15.7517 457.742 14.2022 455.496 14.2022 451.854C14.2022 448.213 15.6742 446.147 18.7473 445.605L18.7473 441.111C13.7116 441.628 10.5352 445.553 10.5352 451.854C10.5352 457.846 13.8407 462.262 18.5149 462.262C22.3627 462.262 24.4803 460.299 25.7974 454.876L26.8304 450.615C27.5534 447.619 28.8188 446.25 30.6782 446.25C33.0282 446.25 34.6551 448.42 34.6551 451.699C34.6551 455.005 32.9249 457.071 30.1101 457.407L30.1101 461.693C34.8617 461.513 38.3222 457.587 38.3222 451.699C38.3222 445.889 35.0425 441.834 30.4458 441.834ZM44.3393 468.382L37.8574 468.382L37.8574 464.379L34.1645 464.379L34.1645 468.382L17.9726 468.382C12.8077 468.382 10.7934 470.293 10.7934 475.225C10.7934 476.284 10.8709 477.524 11 478.066L14.7704 478.066C14.7187 477.756 14.6412 476.723 14.6412 476.207C14.6412 473.908 15.7517 472.875 18.205 472.875L34.1645 472.875L34.1645 478.092L37.8574 478.092L37.8574 472.875L44.3393 472.875L44.3393 468.382ZM18.6957 499.939C16.1649 499.19 14.4346 496.685 14.4346 493.277C14.4346 488.447 17.8176 485.426 22.9567 485.426L23.2149 485.426L23.2149 504.691L24.9193 504.691C33.054 504.691 38.3222 500.223 38.3222 492.967C38.3222 485.555 32.6667 480.803 24.3254 480.803C15.8808 480.803 10.5351 485.478 10.5351 493.173C10.5351 499.036 13.9956 503.581 18.6957 504.355L18.6957 499.939ZM34.4227 492.889C34.4227 497.124 31.2205 499.939 26.7271 500.043L26.7271 485.452C31.1947 485.736 34.4227 488.68 34.4227 492.889ZM11 509.236L11 513.73L27.8375 513.73C31.5562 513.73 34.3453 516.312 34.3453 519.876C34.3453 523.207 32.2276 525.376 28.9996 525.376L11 525.376L11 529.87L28.0699 529.87C31.7112 529.87 34.3453 532.375 34.3453 535.939C34.3452 539.477 32.176 541.517 28.5089 541.517L11 541.517L11 546.01L29.5419 546.01C34.8617 546.01 38.3222 542.575 38.3222 537.256C38.3222 533.485 36.4112 530.335 33.209 528.837L33.209 528.734C36.4629 527.571 38.3222 524.86 38.3222 521.193C38.3222 517.577 36.4112 514.84 33.5705 513.575L33.5705 513.471L37.8574 513.471L37.8574 509.236L11 509.236Z" fill="white"/>
                        </svg>
                    </div>
                    <div style={{position: 'absolute', bottom: 10, right: 10, display:'flex', alignItems:'center'}}>
                        <div>
                            <svg width="74" height="23" viewBox="0 0 74 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.29136 1.11295C2.32555 1.11295 1.10119 2.52267 1.10119 4.77628C1.10119 7.02501 2.30604 8.4445 4.29136 8.4445C6.27181 8.4445 7.47666 7.02014 7.47666 4.77628C7.47666 2.52755 6.26205 1.11295 4.29136 1.11295ZM4.29136 1.73244C5.82792 1.73244 6.79375 2.91291 6.79375 4.77628C6.79375 6.6299 5.83279 7.825 4.29136 7.825C2.7353 7.825 1.7841 6.6299 1.7841 4.77628C1.7841 2.91291 2.75481 1.73244 4.29136 1.73244ZM13.0961 3.04461H12.457V6.1665C12.457 7.1616 11.8619 7.80061 10.8815 7.80061C9.97905 7.80061 9.52052 7.27867 9.52052 6.2982V3.04461H8.88151V6.45917C8.88151 7.66402 9.54491 8.38596 10.7156 8.38596C11.5546 8.38596 12.1644 8.00548 12.4278 7.35184H12.4863V8.29816H13.0961V3.04461ZM14.7497 8.29816H15.3887V5.02018C15.3887 4.19093 15.9936 3.57631 16.8082 3.57631C16.9984 3.57631 17.2618 3.60558 17.3789 3.63972V3.00071C17.2374 2.96656 17.0618 2.95681 16.8862 2.95681C16.1887 2.95681 15.5984 3.33729 15.4228 3.90801H15.3594V3.04461H14.7497V8.29816ZM19.0813 8.29816H19.7203V3.58606H20.9593V3.04461H19.7203V2.38609C19.7203 1.77635 20.0081 1.44952 20.613 1.44952C20.7642 1.44952 20.9056 1.45928 21.0081 1.47879V0.951974C20.8471 0.917828 20.6861 0.903194 20.491 0.903194C19.5788 0.903194 19.0813 1.39587 19.0813 2.37146V3.04461H18.2081V3.58606H19.0813V8.29816ZM22.5788 1.95195C22.8422 1.95195 23.0568 1.7422 23.0568 1.47879C23.0568 1.21538 22.8422 1.00563 22.5788 1.00563C22.3202 1.00563 22.1056 1.21538 22.1056 1.47879C22.1056 1.7422 22.3202 1.95195 22.5788 1.95195ZM22.2617 8.29816H22.9007V3.04461H22.2617V8.29816ZM24.5739 8.29816H25.2129V5.02018C25.2129 4.19093 25.8177 3.57631 26.6323 3.57631C26.8226 3.57631 27.086 3.60558 27.2031 3.63972V3.00071C27.0616 2.96656 26.886 2.95681 26.7104 2.95681C26.0128 2.95681 25.4226 3.33729 25.247 3.90801H25.1836V3.04461H24.5739V8.29816ZM31.7444 7.00062C31.52 7.51769 30.9835 7.81524 30.2371 7.81524C29.2225 7.81524 28.564 7.05428 28.5299 5.86894V5.83967H32.4761V5.55675C32.4761 3.95191 31.6176 2.95681 30.2176 2.95681C28.7884 2.95681 27.8713 4.02508 27.8713 5.67382C27.8713 7.33232 28.7786 8.38596 30.2225 8.38596C31.3249 8.38596 32.1444 7.84939 32.3932 7.00062H31.7444ZM30.2128 3.52265C31.164 3.52265 31.7932 4.22995 31.8078 5.31286H28.5347C28.5933 4.22995 29.2567 3.52265 30.2128 3.52265ZM33.7395 4.43483C33.7395 5.17627 34.198 5.57626 35.1736 5.81041L35.9687 6.00065C36.6712 6.1665 36.998 6.43478 36.998 6.89331C36.998 7.44452 36.4175 7.83963 35.6468 7.83963C34.8858 7.83963 34.3834 7.50793 34.2419 6.98111H33.5785C33.6859 7.84451 34.481 8.38596 35.6273 8.38596C36.7736 8.38596 37.6565 7.75183 37.6565 6.84453C37.6565 6.08357 37.1638 5.67382 36.1492 5.42993L35.4273 5.2592C34.7249 5.09335 34.3834 4.84457 34.3834 4.41044C34.3834 3.88362 34.9444 3.50314 35.6322 3.50314C36.3297 3.50314 36.8175 3.82508 36.9346 4.31775H37.5638C37.4467 3.48363 36.6955 2.95681 35.637 2.95681C34.5785 2.95681 33.7395 3.59094 33.7395 4.43483ZM41.7735 8.29816H42.4125V0.951974H41.7735V8.29816ZM44.4466 1.67879V3.04461H43.5881V3.58606H44.4466V6.99087C44.4466 7.94694 44.8466 8.32742 45.8514 8.32742C45.9636 8.32742 46.188 8.31279 46.3002 8.29328V7.74695C46.1929 7.75671 46.0222 7.76158 45.9197 7.76158C45.3295 7.76158 45.0856 7.48842 45.0856 6.84453V3.58606H46.3002V3.04461H45.0856V1.67879H44.4466ZM49.5099 8.38596C50.3148 8.38596 50.9928 7.95182 51.305 7.2494H51.3635V8.29816H51.9781V0.951974H51.3391V4.06898H51.2806C50.983 3.38119 50.3099 2.95681 49.5099 2.95681C48.1782 2.95681 47.2856 4.04459 47.2856 5.67382C47.2856 7.30306 48.1685 8.38596 49.5099 8.38596ZM49.6465 3.53241C50.6757 3.53241 51.3489 4.38117 51.3489 5.66895C51.3489 6.96648 50.6806 7.80548 49.6465 7.80548C48.6075 7.80548 47.9441 6.97623 47.9441 5.66895C47.9441 4.36653 48.6075 3.53241 49.6465 3.53241ZM4.73038 22.0689C6.89131 22.0689 8.54981 20.4152 8.54981 18.2446C8.54981 16.069 6.89131 14.4203 4.73038 14.4203C2.57433 14.4203 0.910948 16.069 0.910948 18.2446C0.910948 20.4104 2.57921 22.0689 4.73038 22.0689ZM4.73038 21.5372C2.87676 21.5372 1.44752 20.1177 1.44752 18.2446C1.44752 16.3666 2.87188 14.952 4.73038 14.952C6.59375 14.952 8.01323 16.3617 8.01323 18.2446C8.01323 20.1177 6.58887 21.5372 4.73038 21.5372ZM6.52058 17.4934C6.38888 16.7226 5.70597 16.1617 4.77428 16.1617C3.62796 16.1617 2.85237 16.9568 2.85237 18.2251C2.85237 19.508 3.62796 20.3128 4.77916 20.3128C5.72548 20.3128 6.384 19.8006 6.52058 19.0153H5.98889C5.86694 19.5128 5.43768 19.8397 4.77428 19.8397C3.94503 19.8397 3.38894 19.2202 3.38894 18.2251C3.38894 17.2397 3.94991 16.6397 4.77428 16.6397C5.40353 16.6397 5.85718 16.9909 5.99377 17.4934H6.52058ZM9.72051 16.2056H10.3693C10.379 15.3129 11.0132 14.6983 11.9302 14.6983C12.8326 14.6983 13.4326 15.3178 13.4326 16.1324C13.4326 16.7714 13.1546 17.1861 12.1839 18.2299L9.75954 20.8299V21.2982H14.2911V20.6933H10.6961V20.6348L12.5302 18.7226C13.7692 17.4348 14.1155 16.8544 14.1155 16.069C14.1155 14.9471 13.1839 14.1129 11.9692 14.1129C10.6717 14.1129 9.73027 14.9861 9.72051 16.2056ZM18.0423 21.4445C19.5984 21.4445 20.5154 20.0884 20.5154 17.786C20.5154 15.4885 19.5886 14.1129 18.0423 14.1129C16.4862 14.1129 15.5545 15.4836 15.5545 17.7763C15.5545 20.0835 16.4765 21.4445 18.0423 21.4445ZM18.0423 20.8591C16.896 20.8591 16.2277 19.7275 16.2277 17.7763C16.2277 15.8446 16.9008 14.7032 18.0423 14.7032C19.1788 14.7032 19.8471 15.8349 19.8471 17.7763C19.8471 19.7275 19.1837 20.8591 18.0423 20.8591ZM21.8568 16.2056H22.5056C22.5154 15.3129 23.1495 14.6983 24.0665 14.6983C24.969 14.6983 25.569 15.3178 25.569 16.1324C25.569 16.7714 25.2909 17.1861 24.3202 18.2299L21.8959 20.8299V21.2982H26.4275V20.6933H22.8324V20.6348L24.6665 18.7226C25.9055 17.4348 26.2519 16.8544 26.2519 16.069C26.2519 14.9471 25.3202 14.1129 24.1056 14.1129C22.808 14.1129 21.8666 14.9861 21.8568 16.2056ZM30.1786 21.4445C31.7347 21.4445 32.6517 20.0884 32.6517 17.786C32.6517 15.4885 31.7249 14.1129 30.1786 14.1129C28.6225 14.1129 27.6909 15.4836 27.6909 17.7763C27.6909 20.0835 28.6128 21.4445 30.1786 21.4445ZM30.1786 20.8591C29.0323 20.8591 28.364 19.7275 28.364 17.7763C28.364 15.8446 29.0372 14.7032 30.1786 14.7032C31.3152 14.7032 31.9834 15.8349 31.9834 17.7763C31.9834 19.7275 31.32 20.8591 30.1786 20.8591ZM38.9492 21.386C40.4174 21.386 41.3393 20.347 41.3393 18.6689C41.3393 16.9909 40.4174 15.9568 38.9492 15.9568C37.4809 15.9568 36.5638 16.9909 36.5638 18.6689C36.5638 20.347 37.4809 21.386 38.9492 21.386ZM38.9492 20.8055C37.8663 20.8055 37.2224 20.0006 37.2224 18.6689C37.2224 17.3373 37.8663 16.5324 38.9492 16.5324C40.0321 16.5324 40.6759 17.3373 40.6759 18.6689C40.6759 20.0006 40.0321 20.8055 38.9492 20.8055ZM46.8904 16.0446H46.2514V19.1665C46.2514 20.1616 45.6563 20.8006 44.6759 20.8006C43.7734 20.8006 43.3149 20.2787 43.3149 19.2982V16.0446H42.6759V19.4592C42.6759 20.664 43.3393 21.386 44.51 21.386C45.349 21.386 45.9588 21.0055 46.2222 20.3518H46.2807V21.2982H46.8904V16.0446ZM48.5441 21.2982H49.1831V18.0202C49.1831 17.1909 49.7879 16.5763 50.6026 16.5763C50.7928 16.5763 51.0562 16.6056 51.1733 16.6397V16.0007C51.0318 15.9666 50.8562 15.9568 50.6806 15.9568C49.9831 15.9568 49.3928 16.3373 49.2172 16.908H49.1538V16.0446H48.5441V21.2982ZM52.8757 21.2982H53.5147V16.5861H54.7537V16.0446H53.5147V15.3861C53.5147 14.7763 53.8025 14.4495 54.4074 14.4495C54.5586 14.4495 54.7 14.4593 54.8025 14.4788V13.952C54.6415 13.9178 54.4805 13.9032 54.2854 13.9032C53.3732 13.9032 52.8757 14.3959 52.8757 15.3715V16.0446H52.0025V16.5861H52.8757V21.2982ZM56.3732 14.952C56.6366 14.952 56.8512 14.7422 56.8512 14.4788C56.8512 14.2154 56.6366 14.0056 56.3732 14.0056C56.1146 14.0056 55.9 14.2154 55.9 14.4788C55.9 14.7422 56.1146 14.952 56.3732 14.952ZM56.0561 21.2982H56.6951V16.0446H56.0561V21.2982ZM58.3682 21.2982H59.0073V18.0202C59.0073 17.1909 59.6121 16.5763 60.4267 16.5763C60.617 16.5763 60.8804 16.6056 60.9975 16.6397V16.0007C60.856 15.9666 60.6804 15.9568 60.5048 15.9568C59.8072 15.9568 59.217 16.3373 59.0414 16.908H58.978V16.0446H58.3682V21.2982ZM62.0657 21.3372C62.3535 21.3372 62.5779 21.1079 62.5779 20.825C62.5779 20.5372 62.3535 20.3079 62.0657 20.3079C61.7779 20.3079 61.5487 20.5372 61.5487 20.825C61.5487 21.1079 61.7779 21.3372 62.0657 21.3372ZM67.7827 20.0006C67.5583 20.5177 67.0217 20.8152 66.2754 20.8152C65.2608 20.8152 64.6023 20.0543 64.5681 18.8689V18.8397H68.5144V18.5568C68.5144 16.9519 67.6558 15.9568 66.2559 15.9568C64.8266 15.9568 63.9096 17.0251 63.9096 18.6738C63.9096 20.3323 64.8169 21.386 66.2608 21.386C67.3632 21.386 68.1827 20.8494 68.4314 20.0006H67.7827ZM66.251 16.5227C67.2022 16.5227 67.8315 17.23 67.8461 18.3129H64.573C64.6315 17.23 65.2949 16.5227 66.251 16.5227ZM69.7778 17.4348C69.7778 18.1763 70.2363 18.5763 71.2119 18.8104L72.007 19.0006C72.7094 19.1665 73.0362 19.4348 73.0362 19.8933C73.0362 20.4445 72.4557 20.8396 71.685 20.8396C70.9241 20.8396 70.4216 20.5079 70.2802 19.9811H69.6168C69.7241 20.8445 70.5192 21.386 71.6655 21.386C72.8118 21.386 73.6947 20.7518 73.6947 19.8445C73.6947 19.0836 73.2021 18.6738 72.1875 18.4299L71.4655 18.2592C70.7631 18.0933 70.4216 17.8446 70.4216 17.4104C70.4216 16.8836 70.9826 16.5031 71.6704 16.5031C72.3679 16.5031 72.8557 16.8251 72.9728 17.3178H73.6021C73.485 16.4836 72.7338 15.9568 71.6753 15.9568C70.6168 15.9568 69.7778 16.5909 69.7778 17.4348Z" fill="white"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="63" height="27" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7258 20.9163L38.3226 0.362427L51.0968 20.9163H25.7258ZM12.7742 41.8016L0 62.3554H25.371L12.7742 41.8016ZM64.2259 41.8016L51.6292 62.3554H77.0001L64.2259 41.8016Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div style={{paddingLeft: 30}}>
                        <svg width="256" height="256" viewBox="0 0 559 559" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.2" cx="279.413" cy="279.413" r="279.413" fill="#DCCDFD"/>
                            <circle opacity="0.4" cx="279.413" cy="279.413" r="232.844" fill="#C7C8E8"/>
                            <circle cx="280.344" cy="280.344" r="186.275" fill="#303138"/>
                            <rect x="279.64" y="216" width="41" height="41" rx="8" transform="rotate(45 279.64 216)" fill="#7B61FF"/>
                            <rect x="244.991" y="250.648" width="41" height="41" rx="8" transform="rotate(45 244.991 250.648)" fill="#7B61FF"/>
                            <rect x="314.288" y="250.648" width="41" height="41" rx="8" transform="rotate(45 314.288 250.648)" fill="#7B61FF"/>
                            <rect x="279.64" y="285.296" width="41" height="41" rx="8" transform="rotate(45 279.64 285.296)" fill="#7B61FF"/>
                        </svg>
                    </div>
                </div>
                <div style={{width: '70%', overflow:'auto', maxHeight: '100vh'}}>
                    <div style={{padding:40, margin: 40, border:'2px dashed violet'}}>
                        <Close />
                        <Button>Normal</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="text-only">Text Only</Button>
                        <br />
                        <Button variant="primary" disabled>Normal</Button>
                        <Button variant="secondary" disabled>Secondary</Button>
                        <Button variant="outline" disabled>Outline</Button>
                        <Button variant="text-only" disabled>Text Only</Button>
                        <br />
                        <Button fullWidth>Normal</Button>
                        <Button fullWidth disabled>Normal</Button>
                        <br />
                        <Button icon="User">Normal</Button>
                        <Button icon="User" variant="secondary">Secondary</Button>
                        <Button icon="User" variant="outline">Outline</Button>
                        <Button icon="User" variant="text-only">Text Only</Button>
                        <br />
                        <Button iconRight="User">Normal</Button>
                        <Button iconRight="User" variant="secondary">Secondary</Button>
                        <Button iconRight="User" variant="outline">Outline</Button>
                        <Button iconRight="User" variant="text-only">Text Only</Button>
                        <br />
                        <Button icon="User" iconRight="User">Normal</Button>
                        <Button icon="User" iconRight="User" variant="secondary">Secondary</Button>
                        <Button icon="User" iconRight="User" variant="outline">Outline</Button>
                        <Button icon="User" iconRight="User" variant="text-only">Text Only</Button>
                        <br />
                        <Button icon="User" iconRight="User" disabled>Normal</Button>
                        <Button icon="User" iconRight="User" variant="secondary" disabled>Secondary</Button>
                        <Button icon="User" iconRight="User" variant="outline" disabled>Outline</Button>
                        <Button icon="User" iconRight="User" variant="text-only" disabled>Text Only</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
