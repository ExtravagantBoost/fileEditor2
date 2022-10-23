(() => {
    //@uiw main

    let uiwextcolor = (() => {
        let modules = {
            /**
             * A array with color names. Based on https://www.w3.org/TR/css-color-4/#named-colors
             */
            hexs: [
                "#F0F8FF",
                "#FAEBD7",
                "#00FFFF",
                "#7FFFD4",
                "#F0FFFF",
                "#F5F5DC",
                "#FFE4C4",
                "#000000",
                "#FFEBCD",
                "#0000FF",
                "#8A2BE2",
                "#A52A2A",
                "#DEB887",
                "#5F9EA0",
                "#7FFF00",
                "#D2691E",
                "#FF7F50",
                "#6495ED",
                "#FFF8DC",
                "#DC143C",
                "#00FFFF",
                "#00008B",
                "#008B8B",
                "#B8860B",
                "#A9A9A9",
                "#006400",
                "#A9A9A9",
                "#BDB76B",
                "#8B008B",
                "#556B2F",
                "#FF8C00",
                "#9932CC",
                "#8B0000",
                "#E9967A",
                "#8FBC8F",
                "#483D8B",
                "#2F4F4F",
                "#2F4F4F",
                "#00CED1",
                "#9400D3",
                "#FF1493",
                "#00BFFF",
                "#696969",
                "#696969",
                "#1E90FF",
                "#B22222",
                "#FFFAF0",
                "#228B22",
                "#FF00FF",
                "#DCDCDC",
                "#F8F8FF",
                "#FFD700",
                "#DAA520",
                "#808080",
                "#008000",
                "#ADFF2F",
                "#808080",
                "#F0FFF0",
                "#FF69B4",
                "#CD5C5C",
                "#4B0082",
                "#FFFFF0",
                "#F0E68C",
                "#E6E6FA",
                "#FFF0F5",
                "#7CFC00",
                "#FFFACD",
                "#ADD8E6",
                "#F08080",
                "#E0FFFF",
                "#FAFAD2",
                "#D3D3D3",
                "#90EE90",
                "#D3D3D3",
                "#FFB6C1",
                "#FFA07A",
                "#20B2AA",
                "#87CEFA",
                "#778899",
                "#778899",
                "#B0C4DE",
                "#FFFFE0",
                "#00FF00",
                "#32CD32",
                "#FAF0E6",
                "#FF00FF",
                "#800000",
                "#66CDAA",
                "#0000CD",
                "#BA55D3",
                "#9370DB",
                "#3CB371",
                "#7B68EE",
                "#00FA9A",
                "#48D1CC",
                "#C71585",
                "#191970",
                "#F5FFFA",
                "#FFE4E1",
                "#FFE4B5",
                "#FFDEAD",
                "#000080",
                "#FDF5E6",
                "#808000",
                "#6B8E23",
                "#FFA500",
                "#FF4500",
                "#DA70D6",
                "#EEE8AA",
                "#98FB98",
                "#AFEEEE",
                "#DB7093",
                "#FFEFD5",
                "#FFDAB9",
                "#CD853F",
                "#FFC0CB",
                "#DDA0DD",
                "#B0E0E6",
                "#800080",
                "#663399",
                "#FF0000",
                "#BC8F8F",
                "#4169E1",
                "#8B4513",
                "#FA8072",
                "#F4A460",
                "#2E8B57",
                "#FFF5EE",
                "#A0522D",
                "#C0C0C0",
                "#87CEEB",
                "#6A5ACD",
                "#708090",
                "#708090",
                "#FFFAFA",
                "#00FF7F",
                "#4682B4",
                "#D2B48C",
                "#008080",
                "#D8BFD8",
                "#FF6347",
                "#40E0D0",
                "#EE82EE",
                "#F5DEB3",
                "#FFFFFF",
                "#F5F5F5",
                "#FFFF00",
                "#9ACD32",
            ],
            /**
 * A array with color names. Based on https://www.w3.org/TR/css-color-4/#named-colors
 */
            names: ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'],
            "hsl-matcher": ((exports) => {
                const MATCHER = /hsla?\(\s*(\+?-?\d*\.?\d*(?:e\+)?(?:\d*)?(?:deg|rad|grad|turn)?)\s*,\s*(\+?\-?\d*\.?\d*(?:e\+)?(?:\d*)?%)\s*,\s*(\+?\-?\d*\.?\d*(?:e\+)?(?:\d*)?%)\s*(,\s*\+?\-?\s*(?:\d*\.?\d*(?:E-\d*)?%?)?)?\s*\)/i;
                const MATCHER_SPACE = /hsla?\(\s*(\+?-?\d*\.?\d*(?:e\+)?(?:\d*)?(?:deg|rad|grad|turn)?)\s*(\+?\-?\d*\.?\d*(?:e\+)?(?:\d*)?%)\s*(\+?\-?\d*\.?\d*(?:e\+)?(?:\d*)?%)\s*(\/\s*\+?\-?\s*(?:\d*\.?\d*(?:E-\d*)?%?)?)?\s*\)/i;

                const aStr = a => a ? a.replace(/^(,|\/)\s*/, '').trim() : a;

                /** Convert HLS string to HLS object or verify whether hls is valid */
                exports.hslMatcher = function(hsl = '') {
                    const match = MATCHER.exec(hsl) || MATCHER_SPACE.exec(hsl);

                    if (!!match) {
                        const [_, h, s, l, a] = match;
                        if (a && /^(:?(\/|,)\s*-?\+?)$/.test(a.trim())) return;
                        return {
                            h,
                            s,
                            l,
                            a: aStr(a)
                        };
                    }
                }
                /**
                 * Convert HSL String to RGB
                 *
                 * ```js
                 * hsl(240, 100%, 50%)                         // ✅ comma separated
                 * hsl(240, 100%, 50%, 0.1)                    // ✅ comma separated with opacity
                 * hsl(240, 100%, 50%, 10%)                    // ✅ comma separated with % opacity
                 * hsl(240, 100%, 50%, 10x)                    // ❌
                 * hsl(240,100%,50%,0.1)                       // ✅ comma separated without spaces
                 * hsl(180deg, 100%, 50%, 0.1)                 // ✅ hue with 'deg'
                 * hsl(3.14rad, 100%, 50%, 0.1)                // ✅ hue with 'rad'
                 * hsl(200grad, 100%, 50%, 0.1)                // ✅ hue with 'grad'
                 * hsl(0.5turn, 100%, 50%, 0.1)                // ✅ hue with 'turn'
                 * hsl(-240, -100%, -50%, -0.1)                // ✅ negative values
                 * hsl(+240, +100%, +50%, +0.1)                // ✅ explicit positive sign
                 * hsl(240.5, 99.99%, 49.999%, 0.9999)         // ✅ non-integer values
                 * hsl(.9, .99%, .999%, .9999)                 // ✅ fraction w/o leading zero
                 * hsl(.9, .99%, .999%, )                      // ❌
                 * hsl(0240, 0100%, 0050%, 01)                 // ✅ leading zeros
                 * hsl(240.0, 100.00%, 50.000%, 1.0000)        // ✅ trailing decimal zeros
                 * hsl(2400, 1000%, 1000%, 10)                 // ✅ out of range values
                 * hsl(-2400.01deg, -1000.5%, -1000.05%, -100) // ✅ combination of above
                 * hsl(2.40e+2, 1.00e+2%, 5.00e+1%, 1E-3)      // ✅ scientific notation
                 * hsl(240 100% 50%)                           // ✅ space separated (CSS Color Level 4)
                 * hsl(240 100% 50% / 0.1)                     // ✅ space separated with opacity
                 * hsla(240, 100%, 50%)                        // ✅ hsla() alias
                 * hsla(240, 100%, 50%, 0.1)                   // ✅ hsla() with opacity
                 * HSL(240Deg, 100%, 50%)                      // ✅ case insensitive
                 * ```
                 *
                 * @param string
                 * @returns <RGBColor | RGBAColor | undefined>
                 *
                 * https://www.30secondsofcode.org/js/s/hsl-to-rgb
                 */

                exports.hlsStringToRGB = function (hls) {
                    const obj = hslMatcher(hls);
                    if (!obj) return;
                    const {
                        h: hueStr,
                        s: sStr,
                        l: lStr,
                        a: alphaStr
                    } = obj;
                    let h = 0,
                        s = 0,
                        l = 0;

                    if (/\s*\d*turn\s*$/.test(hueStr)) {
                        h = Number(hueStr.replace(/turn\s*$/i, '')) * 360;
                    } else if (/\s*\d*grad\s*$/.test(hueStr)) {
                        h = gradsToDegrees(hueStr.replace(/grad\s*$/i, ''));
                    } else if (/\s*\d*rad\s*$/.test(hueStr)) {
                        h = radiansToDegrees(Number(hueStr.replace(/rad\s*$/i, '')));
                    }

                    if (/^((-|\+)?\d*|(-|\+)?\d*?.\d*(e\+)?\d*?)$/.test(hueStr.replace(/deg$/i, ''))) {
                        h = Number(hueStr.replace(/deg$/i, ''));
                    }

                    if (h > 360) h = 360;
                    if (h < 0) h = 0;

                    if (/^((-|\+)?\d*|(-|\+)?\d*?.\d*(e\+)?\d*?)%$/.test(sStr)) {
                        s = Number(sStr.replace(/%$/, ''));
                    }

                    if (s > 100) s = 100;
                    if (s < 0) s = 0;

                    if (/^((-|\+)?\d*|(-|\+)?\d*?.\d*(e\+)?\d*?)%$/.test(lStr)) {
                        l = Number(lStr.replace(/%$/, ''));
                    }

                    if (l > 100) l = 100;
                    if (l < 0) l = 0;
                    s /= 100;
                    l /= 100;

                    const k = n => (n + h / 30) % 12;

                    const a = s * Math.min(l, 1 - l);

                    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))); // rounding


                    const toFixed = n => Number(n.toFixed());
                    /**
                     * https://drafts.csswg.org/css-color/#typedef-alpha-value
                     * Opacity in CSS is typically represented using the <alpha-value> syntax,
                     * for example in the opacity property or as the alpha component in a color function.
                     * Represented as a <number>, the useful range of the value is 0 (representing full transparency) to 1 (representing full opacity).
                     * It can also be written as a <percentage>, which computes to the equivalent <number> (0% to 0, 100% to 1).
                     * Unless otherwise specified, an <alpha-value> component defaults to 100% when omitted.
                     * Values outside the range [0,1] are not invalid, but are clamped to that range when computed.
                     */


                    if (alphaStr && /^\+?-?\d*(E-\d*|.\d*%?)?$/.test(alphaStr)) {
                        const alpha = /%/g.test(alphaStr) ? Number(alphaStr.replace(/%/g, '')) / 100 : Number(alphaStr);
                        return {
                            r: toFixed(255 * f(0)),
                            g: toFixed(255 * f(8)),
                            b: toFixed(255 * f(4)),
                            a: alpha
                        };
                    }

                    return {
                        r: toFixed(255 * f(0)),
                        g: toFixed(255 * f(8)),
                        b: toFixed(255 * f(4))
                    };
                }
                /** Convert `grad` to `deg` */

                exports.gradsToDegrees = function (input) {
                    let grads = Number(input);
                    grads = grads % 400;

                    if (grads < 0) {
                        grads += 400;
                    } // or grads = grads < 0 ? 400 + grads : grads;


                    let degrees = grads / 400 * 360; // or let degrees = grads*0.9

                    return degrees;
                }
                /** Convert `rad` to `deg` */

                exports.radiansToDegrees = function(radians) {
                    return Number((radians * (180 / Math.PI)).toFixed());
                }
                return exports;
            })({}),
            utils: ((exports) => {
                exports.toFullHex = function(color) {
                    if (color.length === 4) {
                        // 3-char hex
                        return [`#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`, ''];
                    }

                    if (color.length === 5) {
                        // 4-char hex (alpha)
                        return [`#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`, color[4].repeat(2)];
                    }

                    if (color.length === 9) {
                        // 8-char hex (alpha)
                        return [`#${color.slice(1, -2)}`, color.slice(-2)];
                    }

                    return [color, ''];
                }
                /** https://stackoverflow.com/a/5624139/1334703 */

                exports.rgbToHex = function(r, g, b) {
                    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
                /** https://stackoverflow.com/a/5624139/1334703 */

                exports.hexToRgb = function(hex) {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }
                /** https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl */

                exports.RGBToHSL = function(r, g, b) {
                    r /= 255, g /= 255, b /= 255;
                    const max = Math.max(r, g, b),
                        min = Math.min(r, g, b);
                    let h = 0,
                        s,
                        l = (max + min) / 2;

                    if (max == min) {
                        h = s = 0; // achromatic
                    } else {
                        const d = max - min;
                        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

                        switch (max) {
                            case r:
                                h = (g - b) / d + (g < b ? 6 : 0);
                                break;

                            case g:
                                h = (b - r) / d + 2;
                                break;

                            case b:
                                h = (r - g) / d + 4;
                                break;
                        }

                        h /= 6;
                    }

                    return {
                        h: Math.floor(h * 360),
                        s: Math.floor(s * 100),
                        l: Math.floor(l * 100)
                    };
                }
                return exports;
            })({})
        };
        //index
        const { ViewPlugin, EditorView, WidgetType, Decoration } = require('@codemirror/view');
        const { syntaxTree } = require('@codemirror/language');
        const colors = modules.names;
        const hexs = modules.hexs;
        const {hslMatcher, hlsStringToRGB } = modules['hsl-matcher'];
        const { toFullHex, rgbToHex, hexToRgb, RGBToHSL } = modules.utils;
        let ColorType;

        (function(ColorType) {
            ColorType["rgb"] = "RGB";
            ColorType["hex"] = "HEX";
            ColorType["named"] = "NAMED";
            ColorType["hsl"] = "HSL";
        })(ColorType || (ColorType = {}));

        const colorState = new WeakMap();

        function colorDecorations(view) {
            const widgets = [];

            for (const range of view.visibleRanges) {
                syntaxTree(view.state).iterate({
                    from: range.from,
                    to: range.to,
                    enter: ({
                        type,
                        from,
                        to
                    }) => {
                        const callExp = view.state.doc.sliceString(from, to);
                        /**
                         * ```
                         * rgb(0 107   128, .5);         ❌ ❌ ❌
                         * rgb( 0 107   128 );           ✅ ✅ ✅
                         * RGB( 0 107   128 );           ✅ ✅ ✅
                         * Rgb( 0 107   128 );           ✅ ✅ ✅
                         * rgb( 0 107 128 / );           ❌ ❌ ❌
                         * rgb( 0 107 128 /   60%);      ✅ ✅ ✅
                         * rgb(0,107,128 / 60%);         ❌ ❌ ❌
                         * rgb( 255, 255, 255 )          ✅ ✅ ✅
                         * rgba( 255, 255, 255 )         ✅ ✅ ✅
                         * rgba( 255, 255  , 255, )      ❌ ❌ ❌
                         * rgba( 255, 255  , 255,  .5 )  ✅ ✅ ✅
                         * rgba( 255 255 255 / 0.5 );    ✅ ✅ ✅
                         * rgba( 255 255 255   0.5 );    ❌ ❌ ❌
                         * rgba( 255 255 255 /  );       ❌ ❌ ❌
                         * ```
                         */

                        if (type.name === 'CallExpression' && callExp.startsWith('rgb')) {
                            const match = /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*(,\s*\d*\.\d*\s*)?\)/i.exec(callExp) || /rgba?\(\s*(\d{1,3})\s*(\d{1,3})\s*(\d{1,3})\s*(\/?\s*\d+%)?(\/\s*\d+\.\d\s*)?\)/i.exec(callExp);
                            if (!match) return;
                            const [_, r, g, b, a] = match;
                            const hex = rgbToHex(Number(r), Number(g), Number(b));
                            const widget = Decoration.widget({
                                widget: new ColorWidget({
                                    colorType: ColorType.rgb,
                                    color: hex,
                                    colorRaw: callExp,
                                    from,
                                    to,
                                    alpha: a ? a.replace(/(\/|,)/g, '') : ''
                                }),
                                side: 0
                            });
                            widgets.push(widget.range(from));
                        } else if (type.name === 'CallExpression' && hslMatcher(callExp)) {
                            /**
                             * # valid
                             * hsl(240, 100%, 50%)                           // ✅ comma separated
                             * hsl(240, 100%, 50%, 0.1)                      // ✅ comma separated with opacity
                             * hsl(240, 100%, 50%, 10%)                      // ✅ comma separated with % opacity
                             * hsl(240,100%,50%,0.1)                         // ✅ comma separated without spaces
                             * hsl(180deg, 100%, 50%, 0.1)                   // ✅ hue with 'deg'
                             * hsl(3.14rad, 100%, 50%, 0.1)                  // ✅ hue with 'rad'
                             * hsl(200grad, 100%, 50%, 0.1)                  // ✅ hue with 'grad'
                             * hsl(0.5turn, 100%, 50%, 0.1)                  // ✅ hue with 'turn'
                             * hsl(-240, -100%, -50%, -0.1)                  // ✅ negative values
                             * hsl(+240, +100%, +50%, +0.1)                  // ✅ explicit positive sign
                             * hsl(240.5, 99.99%, 49.999%, 0.9999)           // ✅ non-integer values
                             * hsl(.9, .99%, .999%, .9999)                   // ✅ fraction w/o leading zero
                             * hsl(0240, 0100%, 0050%, 01)                   // ✅ leading zeros
                             * hsl(240.0, 100.00%, 50.000%, 1.0000)          // ✅ trailing decimal zeros
                             * hsl(2400, 1000%, 1000%, 10)                   // ✅ out of range values
                             * hsl(-2400.01deg, -1000.5%, -1000.05%, -100)   // ✅ combination of above
                             * hsl(2.40e+2, 1.00e+2%, 5.00e+1%, 1E-3)        // ✅ scientific notation
                             * hsl(240 100% 50%)                             // ✅ space separated (CSS Color Level 4)
                             * hsl(240 100% 50% / 0.1)                       // ✅ space separated with opacity
                             * hsla(240, 100%, 50%)                          // ✅ hsla() alias
                             * hsla(240, 100%, 50%, 0.1)                     // ✅ hsla() with opacity
                             * HSL(240Deg, 100%, 50%)                        // ✅ case insensitive
                             */
                            const match = hlsStringToRGB(callExp);
                            if (!match) return;
                            const {
                                r,
                                g,
                                b
                            } = match;
                            const hex = rgbToHex(Number(r), Number(g), Number(b));
                            const widget = Decoration.widget({
                                widget: new ColorWidget({
                                    colorType: ColorType.hsl,
                                    color: hex,
                                    colorRaw: callExp,
                                    from,
                                    to,
                                    alpha: match.a ? match.a.toString() : ''
                                }),
                                side: 0
                            });
                            widgets.push(widget.range(from));
                        } else if (type.name === 'ColorLiteral') {
                            const [color, alpha] = toFullHex(callExp);
                            const widget = Decoration.widget({
                                widget: new ColorWidget({
                                    colorType: ColorType.hex,
                                    color,
                                    colorRaw: callExp,
                                    from,
                                    to,
                                    alpha
                                }),
                                side: 0
                            });
                            widgets.push(widget.range(from));
                        } else if (type.name === 'ValueName') {
                            const name = callExp;

                            if (colors.includes(name)) {
                                const widget = Decoration.widget({
                                    widget: new ColorWidget({
                                        colorType: ColorType.named,
                                        color: hexs[colors.indexOf(name)],
                                        colorRaw: callExp,
                                        from,
                                        to,
                                        alpha: ''
                                    }),
                                    side: 0
                                });
                                widgets.push(widget.range(from));
                            }
                        }
                    }
                });
            }

            return Decoration.set(widgets);
        }

        class ColorWidget extends WidgetType {
            constructor({
                color,
                colorRaw,
                ...state
            }) {
                super();
                this.state = state;
                this.color = color;
                this.colorRaw = colorRaw;
            }

            eq(other) {
                return other.state.colorType === this.state.colorType && other.color === this.color && other.state.from === this.state.from && other.state.to === this.state.to && other.state.alpha === this.state.alpha;
            }

            toDOM() {
                const picker = document.createElement('input');
                colorState.set(picker, this.state);
                picker.type = 'color';
                picker.value = this.color;
                picker.dataset['color'] = this.color;
                picker.dataset['colorraw'] = this.colorRaw;
                const wrapper = document.createElement('span');
                wrapper.appendChild(picker);
                wrapper.dataset['color'] = this.color;
                wrapper.style.backgroundColor = this.colorRaw;
                return wrapper;
            }

            ignoreEvent() {
                return false;
            }

        }
        
        let colorView  = (showPicker = true) => ViewPlugin.fromClass(class ColorView {
                constructor(view) {
                    this.decorations = colorDecorations(view);
                }

                update(update) {
                    if (update.docChanged || update.viewportChanged) {
                        this.decorations = colorDecorations(update.view);
                    }

                    const readOnly = update.view.contentDOM.ariaReadOnly === 'true';
                    const editable = update.view.contentDOM.contentEditable === 'true';
                    const canBeEdited = readOnly === false && editable;
                    this.changePicker(update.view, canBeEdited);
                }

                changePicker(view, canBeEdited) {
                    const doms = view.contentDOM.querySelectorAll('input[type=color]');
                    doms.forEach(inp => {
                        if (!showPicker) {
                            inp.setAttribute('disabled', '');
                        } else {
                            canBeEdited ? inp.removeAttribute('disabled') : inp.setAttribute('disabled', '');
                        }
                    });
                }

            }, {
                decorations: v => v.decorations,
                eventHandlers: {
                    input: (e, view) => {
                        const target = e.target;
                        if (target.nodeName !== 'INPUT' || !target.parentElement || !target.dataset.color && !target.dataset.colorraw) return false;
                        const data = colorState.get(target);
                        const value = target.value;
                        const rgb = hexToRgb(value);
                        const colorraw = target.dataset.colorraw;
                        const slash = (target.dataset.colorraw || '').indexOf('/') > 4;
                        const comma = (target.dataset.colorraw || '').indexOf(',') > 4;
                        let converted = target.value;

                        if (data.colorType === ColorType.rgb) {
                            let funName = colorraw !== null && colorraw !== void 0 && colorraw.match(/^(rgba?)/) ? colorraw === null || colorraw === void 0 ? void 0 : colorraw.match(/^(rgba?)/)[0] : undefined;

                            if (comma) {
                                converted = rgb ? `${funName}(${rgb.r}, ${rgb.g}, ${rgb.b}${data.alpha ? ', ' + data.alpha.trim() : ''})` : value;
                            } else if (slash) {
                                converted = rgb ? `${funName}(${rgb.r} ${rgb.g} ${rgb.b}${data.alpha ? ' / ' + data.alpha.trim() : ''})` : value;
                            } else {
                                converted = rgb ? `${funName}(${rgb.r} ${rgb.g} ${rgb.b})` : value;
                            }
                        } else if (data.colorType === ColorType.hsl) {
                            const rgb = hexToRgb(value);

                            if (rgb) {
                                const {
                                    h,
                                    s,
                                    l
                                } = RGBToHSL(rgb === null || rgb === void 0 ? void 0 : rgb.r, rgb === null || rgb === void 0 ? void 0 : rgb.g, rgb === null || rgb === void 0 ? void 0 : rgb.b);
                                converted = `hsl(${h}deg ${s}% ${l}%${data.alpha ? ' / ' + data.alpha : ''})`;
                            }
                        }

                        view.dispatch({
                            changes: {
                                from: data.from,
                                to: data.to,
                                insert: converted
                            }
                        });
                        return true;
                    }
                }
            });
        let colorTheme =EditorView.baseTheme({
                'span[data-color]': {
                    width: '12px',
                    height: '12px',
                    display: 'inline-block',
                    borderRadius: '2px',
                    marginRight: '0.5ch',
                    outline: '1px solid #00000040',
                    overflow: 'hidden',
                    verticalAlign: 'middle',
                    marginTop: '-2px'
                },
                'span[data-color] input[type="color"]': {
                    background: 'transparent',
                    display: 'block',
                    border: 'none',
                    outline: '0',
                    paddingLeft: '24px',
                    height: '12px'
                },
                'span[data-color] input[type="color"]::-webkit-color-swatch': {
                    border: 'none',
                    paddingLeft: '24px'
                }
            });
        return {
            colorView,
            ColorType,
            colorTheme,
            color: [colorView(), colorTheme]
        }
    })();

    require.addMod("@uiw/color-extension", {
        ...uiwextcolor
    });
})();
