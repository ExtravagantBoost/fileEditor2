(() => {
    const { EditorView } = require("codemirror");
    const { detect, langscm,cmdetect } = langd;
    const { languages } = require("@codemirror/language-data");
    const { Compartment, EditorState, StateEffect } = require("@codemirror/state");
    let text = (() => {
        const { completeFromList } = require('@codemirror/autocomplete');
        const { foldNodeProp, indentNodeProp, LRLanguage, LanguageSupport } = require('@codemirror/language');
        const { styleTags } = require("@lezer/highlight");
        const { LRParser } = require("@lezer/lr");
        const spec_AtName = { "@asciiLetter": 232, "@asciiUpperCase": 232, "@asciiLowerCase": 232, "@digit": 232, "@whitespace": 232, "@eof": 232, "@specialize": 76, "@extend": 78, "@top": 98, "@precedence": 102, "@left": 108, "@right": 110, "@cut": 112, "@tokens": 116, "@conflict": 126, "@external": 134, "@context": 162, "@dialects": 166, "@skip": 172, "@detectDelim": 180 };
        const spec_keyword = { tokens: 136, from: 138, prop: 146, as: 148, propSource: 152, extend: 156, specialize: 158 };
        const parser = LRParser.deserialize({
            version: 14,
            states: ";`Q]QPOOOOQO'#Ca'#CaOzQPO'#C`OOQO'#Ek'#EkOOQO'#EZ'#EZQ]QPOOOuQPO'#D^O!VQPO'#D`O![QPO'#DgO!aQQO'#DvO!rQPO'#EOO!wQPO'#EQO!|QPO'#ETOOQO'#EX'#EXO#RQPO'#CdO#^QPO'#CnO$aQPO'#CoOOQO,58z,58zO!|QPO,58zO}QPO,58zOOQO-E8X-E8XOzQPO,59xO$hQPO'#DbOOQO,59z,59zO$pQPO'#DiOOQO,5:R,5:RO!rQPO,5:[O!rQPO,5:bO!rQPO,5:eO!|QPO,5:gOOQO'#Cg'#CgO%RQQO,5:jO%WQPO'#ESOOQO,5:l,5:lO%`QPO,5:oO&TQPO'#CeO&`QPO,59OO#UQPO,59OOOQO,59O,59OOOQO,59Y,59YO&hQPO,59YO(QQPO'#EsO(_QPO'#EsOOQO'#Es'#EsOOQO'#Cv'#CvO)^QPO'#EqO!|QPO'#C}O)zQPO'#DQOOQO'#Er'#ErO$kQPO'#DVO!rQPO'#DYOOQO'#Eu'#EuO*RQPO'#DUOOQO'#Eq'#EqO*fQPO'#EaO*yQPO'#D[O+[QPO'#EpOOQO'#Ep'#EpOOQO,59Z,59ZO+mQPO,59ZO+rQPO'#DROOQO1G.f1G.fO!|QPO1G.fOOQO1G/d1G/dO!|QPO1G/dO}QPO1G/dOOQO'#DX'#DXO+zQPO'#DcO,`QPO'#EbO,kQPO,59|OOQO,59|,59|O,sQPO'#DoOOQO'#Ev'#EvOOQO'#Ec'#EcO-XQPO,5:TOOQO,5:T,5:TO-jQPO'#DjO-oQPO'#DlO-tQQO1G/vO-yQQO1G/|O.RQQO1G0PO!rQPO1G0RO.WQPO1G0UO.]QPO'#EfO.hQPO,5:nOOQO,5:n,5:nO.pQPO'#EWOOQO1G0]1G0]O.{QPO,59POOQO,5:v,5:vOOQO1G.j1G.jO/aQPO1G.jOOQO-E8Y-E8YO!rQPO'#E^O/iQPO1G.tOOQO1G.t1G.tOuQPO,59_O/qQPO'#CuOOQO,59`,59`OOQO,59i,59iO!|QPO,59iO/xQPO'#E`OOQO,59d,59dOOQO,59f,59fOOQO,59h,59hOOQO'#E`'#E`O1YQPO,59pOOQO,59l,59lO1mQPO,59lOOQO,59q,59qOOQO,59t,59tOOQO,5:{,5:{OOQO-E8_-E8_O1rQPO,59vOOQO1G.u1G.uOOQO,59m,59mO+uQPO,59mOOQO7+$Q7+$QOOQO7+%O7+%OO!|QPO7+%OOOQO,59},59}OOQO,5:|,5:|OOQO-E8`-E8`OOQO1G/h1G/hOOQO,5:Z,5:ZOOQO-E8a-E8aOOQO1G/o1G/oO2TQPO'#DkOOQO,5:U,5:UO2`QPO'#DnOOQO,5:W,5:WO2hQPO7+%bO2mQPO7+%hO!rQPO7+%hO2rQPO7+%kO2wQQO7+%mOOQO7+%p7+%pOOQO,5;Q,5;QOOQO-E8d-E8dOOQO1G0Y1G0YOOQO'#Eg'#EgO2|QPO,5:rOOQO,5:r,5:rOuQPO'#CmOOQO'#E]'#E]O3XQPO1G.kOOQO7+$U7+$UP&cQPO'#E[OOQO,5:x,5:xOOQO-E8[-E8[OOQO7+$`7+$`OOQO1G.y1G.yOOQO,59a,59aO3mQPO,59aOOQO1G/T1G/TOOQO-E8^-E8^OOQO1G/W1G/WOOQO1G/X1G/XOOQO<<Hj<<HjO3uQPO'#EsO4ZQPO'#EdO4iQPO,5:VOOQO,5:V,5:VO4tQPO,5:YO5PQPO<<H|OOQO<<IS<<ISO5UQQO<<ISOOQO<<IV<<IVO5ZQPO<<IXOOQO-E8e-E8eOOQO1G0^1G0^O5`QPO,59XOOQO-E8Z-E8ZO#fQPO'#E_O5eQPO1G.{OOQO1G.{1G.{OOQO,5;O,5;OOOQO-E8b-E8bOOQO1G/q1G/qO5mQPO1G/tO5rQPO1G/tO5zQPO'#DtOOQOAN>hAN>hO6SQPOAN>nO5PQPOAN>sOOQO1G.s1G.sOOQO,5:y,5:yOOQO-E8]-E8]OOQO7+$g7+$gOOQO7+%`7+%`O6XQPO7+%`O6^QPO'#DuO6lQPO'#EeO6wQPO,5:`OOQO,5:`,5:`OOQOG24YG24YOOQOG24_G24_OOQO<<Hz<<HzOOQO,5:a,5:aOOQO,5;P,5;POOQO-E8c-E8cOOQO1G/z1G/z",
            stateData: "7T~O#^OSPOSQOS~O!RUO!TVO![WO!eXO!sYO!uZO!x[O!|]O#`PO~OV^O``O#c_O~O`fO~O`hO~O!fjO!kkO!nlO!pmO!qmO~O#`nO~O`pO~O``O~OUvOYsO#`nO~O#`nO#bwO~OV^O]!QOd!QOe!QOf!QOs!POv!^Ow!^Oz!RO}!SO!P!WO#`PO#h|O~O_![O~P#fO_!hO#`!dO~O]!iO_!mO!T!nO!a!oO#`PO~O!g!tO~O_!wO#`nO~O`!xO!R!wa!T!wa![!wa!e!wa!s!wa!u!wa!x!wa!|!wa#[!wa#`!wa~O[!zOUXX#aXX~OU!|O#a!{O~O#a#PO#b#RO~O#c#TO]#gX_#gXd#gXe#gXf#gXk#gXm#gXo#gXs#gXv#gXw#gXz#gX}#gX!P#gX#`#gX#h#gXr#gX#a#gX#b#gX~OV^O^#SO``O~P&pOV#gX~P&pOV^O]!QOd!QOe!QOf!QOs!POv!^Ow!^Oz!RO}!SO#`PO#h|O~Ok#YOm#ZOo#[O_#eX!P#eXr#eX#a#eX#b#eX~P(fOr#_O~P#fO_xX!PxXrxX#axX#bxX~P(fO_#TX!P#TXr#TX#a#TX#b#TX~P(fO!P!WO_!OXr!OX#a!OX#b!OX~O!P!WO_#dXr#dX#a#dX#b#dX~O_#fO~OV^O#c#TO~O!W#lO!X#lO!Y#lO_!VX#`!VX#a!VX~O#a#mO_#UX#`#UX~O_#oO#`!dO~OV^O]!cX_!cX!T!cX!a!cX#`!cX~O]!iO_#rO!T!nO!a!oO#`PO~O`#sO~O`#uO~O!g#wO~O!g#xO!l#yO~O!g#zO~O]#|O~O#a#}O_#YX#`#YX~O_$PO#`nO~O_$SO!RUO#`PO~O]$UO^$UO`$TO#`nOUXa#aXa~OU$WO#a!{O~O#a#PO#b$[O~O#b$^O~P#fOk#YOm#ZOo#[OV#SX]#SX_#SXd#SXe#SXf#SXs#SXv#SXw#SXz#SX}#SX!P#SX#`#SX#h#SXr#SX#a#SX#b#SX~O_xa!Pxarxa#axa#bxa~P(fOr$bO~O!P!WO_!Oar!Oa#a!Oa#b!Oa~O]$fO_$hO#`PO~O]$iO#`PO~O]$jO~O]$kO~O]$mO~O!g$nO~O_$pO!RUO#`PO~O]$UO^$UO`$TO#`nOUXi#aXi~O#a$sO#b$uO~O^#SO#c#TO]#gX_#gX#`#gX#a#gX~O#a$vO]#WX_#WX#`#WX~O]$fO_$xO#`PO~O]$yO#`PO#a$zO~O`${O~O!g$}O~O]%OO~O_%PO~O#a$sO#b%SO~O_%TO~O]%UO#`PO~O_%YO#`PO~O]%ZO~O_%]O~OV^O_!iX#`!iX#a!iX~O#a%_O_#XX#`#XX~O_%aO#`PO~Oe#`#k~",
            goto: "-o#kPPPP#l#xPP$p%^P%dPPPPP&]&a&mPPP'`'o(O(ZP(ZP(ZP(Z(ZPP(Z(ZPP(e(lP(v(lP(}P)TP)]P)a)dPPP)]P)h)k)o)kP)r)k)]PPP)u){)]PP)]P)]PP)]P)]P*P)]P)]*S)]P*V*]*c*i*o*u*|+Z+a+g+m+s+yPPP,PPPPP,T,a,j,vP-_-kSROTS!jh!lT$Q!x$R[QOTh!l!x$RQeU`y`}!P!U!W#T#^$sQ$]#SY$e#s#u$g$i$zQ$q$TT%V${%XQcQ`!O`}!P!U!W#T#^$sQ!ceQ#WyQ#h!^Q#p!iR%^%VQt^R!}uQoYSs^uQx_Q!pjQ!qkQ!rlS!up!vQ#b!SQ#{!sS$U!z$VQ$Y#PR$l#yT$U!z$VQbQQ!`cQ!beR#k!cQaQQr[S!_bcQ!aeQ!smS#Vy!OQ#i!`S#j!b!cQ$`#WR$d#kkz`}!P!U!W#T#^#s#u$g$i$s$zk{`}!P!U!W#T#^#s#u$g$i$s$zU#Uyz$eQ#g!^R$c#ha!Q`}!P!U!W#T#^$sZ!V`!P!W#T$sa!T`}!P!U!W#T#^$sS!ef!gR#a!RX!Z`!P#T$sSROTT$Q!x$RTROTRgVT!ff!gRiWT!jh!lR#t!nR#v!oQ$|$jR%[%OT%W${%XRqZR!yrQTORdTQu^R#OuQ$V!zR$r$VQ#QxR$Z#QQ$t$_R%R$tS#^}!UR$a#^W!X`!P#T$sS#d!X#eR#e!YQ!gfR#n!gQ!lhR#q!lQ$g#sR$w$gQ%X${R%`%XQ!vpR$O!vQ$R!xR$o$RTSOTQ!]`Q#`!PQ$_#TR%Q$sW!Y`!P#T$sR#c!WY}`!P!W#T$sV#X}!U#^`!Q`}!P!U!W#T#^$sS$f#s$gQ$i#uQ$y$iR%U$zY!U`!P!W#T$sV#]}!U#^T!kh!l",
            nodeNames: "⚠",
            maxTerm: 119,
            nodeProps: [
            ],
            propSources: [],
            skippedNodes: [0, 1, 2],
            repeatNodeCount: 13,
            tokenData: ".V~R|X^#{pq#{qr$prs%dtu&Wwx&xxy'gyz'lz{'q{|'v|}'{}!O(Q!O!P(k!P!Q(p!Q![(Q!^!_)y!_!`*O!`!a*T!a!b*Y!b!c*_!c!}(Q!}#O+]#P#Q+b#R#S+g#T#o(Q#o#p,S#p#q,X#q#r,^#r#s,c#y#z#{$f$g#{$g#BY(Q#BY#BZ,h#BZ$IS(Q$IS$I_,h$I_$I|(Q$I|$JO,h$JO$JT(Q$JT$JU,h$JU$KV(Q$KV$KW,h$KW&FU(Q&FU&FV,h&FV~(Q~$QY#^~X^#{pq#{#y#z#{$f$g#{#BY#BZ#{$IS$I_#{$I|$JO#{$JT$JU#{$KV$KW#{&FU&FV#{~$uPz~!}#O$x~${SO#O$x#O#P%X#P#Q%_#Q~$x~%[PO~$x~%dOf~~%iU]~OY%dZr%drs%{s#O%d#O#P&Q#P~%d~&QO]~~&TPO~%d~&ZP!}#O&^~&aSO#O&^#O#P&m#P#Q&s#Q~&^~&pPO~&^~&xOd~~&}U]~OY&xZw&xwx%{x#O&x#O#P'a#P~&x~'dPO~&x~'lOs~~'qOr~~'vOm~~'{Oo~~(QO#a~R(XU#`P#kQ}!O(Q!Q![(Q!c!}(Q#R#S(Q#T#o(Q$g~(Q~(pO^~~(sQz{(y!P!Q)n~(|ROz(yz{)V{~(y~)YTOz(yz{)V{!P(y!P!Q)i!Q~(y~)nOQ~~)sQP~OY)nZ~)n~*OO#c~~*TO[~~*YO#b~~*_Ok~~*bU}!O*t!Q![*t!c!}*t#R#S*t#T#o*t$g~*t~*yUY~}!O*t!Q![*t!c!}*t#R#S*t#T#o*t$g~*t~+bOV~~+gOU~R+pUeP#`P#kQ}!O(Q!Q![(Q!c!}(Q#R#S(Q#T#o(Q$g~(Q~,XO`~~,^O!P~~,cO_~~,hO}~~,qf#^~#`P#kQX^#{pq#{}!O(Q!Q![(Q!c!}(Q#R#S(Q#T#o(Q#y#z#{$f$g#{$g#BY(Q#BY#BZ,h#BZ$IS(Q$IS$I_,h$I_$I|(Q$I|$JO,h$JO$JT(Q$JT$JU,h$JU$KV(Q$KV$KW,h$KW&FU(Q&FU&FV,h&FV~(Q",
            tokenizers: [0, 1],
            topRules: { "Grammar": [0, 3] },
            specialized: [{ term: 10, get: value => spec_AtName[value] || -1 }, { term: 119, get: value => spec_keyword[value] || -1 }],
            tokenPrec: 1013
        });
        let TWM = parser.configure({
            props: [
                styleTags({
                }),
                indentNodeProp.add({
                    //Application: context => context.column(context.node.from) + context.unit
                }),
                foldNodeProp.add({
                    //Application: foldInside
                })
            ]
        });
        const TXTLANG = LRLanguage.define({
            parser: TWM,
            languageData: {
                //commentTokens: {line: ";"}
            }
        });
        const TXTCOMPLETE = TXTLANG.data.of({
            autocomplete: completeFromList([
            ])
        });

        return () => {
            return new LanguageSupport(TXTLANG, [TXTCOMPLETE]);
        };
    })();
    let langs = ((exports) => {
        "use strict";
        exports.legacy = {};
        languages.forEach((lang) => {
            if (lang.loadFunc.toString().includes('legacy') == false) {
                lang.load().then(l => { exports[lang.name] = l; });
            } else {
                lang.load().then(l => { exports.legacy[lang.name] = l; });
            }

        });
        return exports;
    })({});
    function findmode(mode) {
        //console.log(mode)
        
        if (mode == undefined && mode != null) throw new SyntaxError('argument is required');
        if (typeof mode != 'string') throw new TypeError('argument must be string');
        if (mode in langscm) {
            return langscm[mode];
        }
        if (langs[mode]) {//look for newly updated parsers
            return langs[mode];
        } else {//fallback to legacy parsers
            //console.log(langs.legacy)
            if (langs.legacy[mode]) {
                return langs.legacy[mode];
            } else {// if no parser is found, then fallback to text
                return null;
            }
        }
    }
    let main = (cm, setmode) => {
        if (!cm) throw new aerr('argument must be instance of EditorView (CM6)');
        if (!(cm instanceof EditorView)) throw new aerr('argument must be a Class Intance of EditorView');
        //if (!(cm.announceDOM && cm.dom && cm._root && cm._dispatch)) throw new TypeError('argument must be instance of CodeMirror 6 EditorView (https://codemirror.net/)');
        if (cm.mode && cm.getmode && cm.getvalue && cm.setmode && cm.setvalue) {
            let err = new Error('already initialized');
            err.name = 'INIT_ERROR';
            throw err;
        }
        //prototype functions
        cm.getmode = function() {
            if (this.mode) {
                return this.modename;
            } else {
                this.modename = 'null';
                return 'null';
            }
        };
        cm.setmode = function(mode) {
            //if (!cm) throw new SyntaxError('argument must be instance of EditorView (CM6)');

            if (typeof mode != 'string') throw new aerr('argument "mode" must be a string not ' + typeof mode);
            
            this.modename = cmdetect(mode);
            this.dispatch([]);//brute force the editor to refresh as CM.refresh only exists on CM5
        };
        cm.getvalue = function(lineSep = '\n') {
            //console.log(this.state.doc)
            return this.state.doc.toJSON().join(lineSep);
        };
        cm.getSelection = function() {
            return this.state.sliceDoc(
                this.state.selection.main.from,
                this.state.selection.main.to);
        };
        cm.getCursor = function() {
            return this.state.selection.main.head;
        };
        cm.getDoc = function() {
            //will return CM5 Type Object
            //console.log(this,"fasdfasdf")
            return {
                cantEdit: this.contentAttrs.contenteditible != 'true' ? true : false,
                children: this.docView.children,
                cleanGeneration: this.dirty == 1 ? 0 : 1,
                cm: this,
                direction: this.textDirection == 0 ? "ltr" : "rtl",
                extend: false,
                first: 0,
                height: this.contentHeight,
                highlightFrontier: this.state.doc.text.length,
                history: undefined,
                id: 1,
                lineSep: null,
                mode: undefined,
                modeFrontier: this.state.doc.text.length,
                modeOption: this.mode,
                parent: this.root,
                scrollLeft: 0,
                scrollTop: 0,
                sel: {
                    primIndex: 0,
                    ranges: this.state.selection.ranges
                },
                size: this.state.doc.text.length,
                state: this.state,
            };
        };
        cm.setvalue = function(text/*string||array*/) {
            let txt;
            //console.log(txt)
            //console.log(text)
            if (text === undefined) throw new aerr('1st argument is required');
            if (typeof (text) != 'string' && typeof (text) != 'object') throw new aerr('argument must be string or array, not ' + typeof (mode));
            if (typeof text == 'object') txt = text.join('\n');
            if (typeof text == 'string') txt = text;
            this.update([this.state.update({ changes: { from: 0, to: this.state.doc.length, insert: txt } })]);
            setTimeout(()=>{
              this.dispatch({
                docChanged:true
              });
            });
        };
        cm.setCursor = (pos) => cm.dispatch({selection: {anchor: pos}});
        cm.getLine = function(n) {
            return cm.state.doc.line(n).text;
        };
        cm.getRange = function(a, b) { cm.state.sliceDoc(a, b); };

        cm.somethingSelected = function() {
            return cm.state.selection.ranges.some(r => !r.empty);
        };
        cm.gotoLine = (line) => {
          let ht = cm.defaultLineHeight * (line-1);
          cm.scrollDOM.scrollTo({
            top:Math.round(ht),
            behavior:"smooth"
          });
        };
        cm.mode = {
            mode: {}
        };
        cm.modename = 'null';

        //check if modes is fully loaded

        cm.addExt = function(extension) {
            this.dispatch({
                effects: StateEffect.appendConfig.of(extension)
            });
        };
        cm.languageConf = new Compartment();//create new instance for every initialization unless its already initialized
        const langchange = EditorState.transactionExtender.of(() => {
            //let editor = arguments[0];
            //console.log(tr)
            //console.log(langs[getmode(view)])
            //console.log(EditorState)
            //console.log(languageConf)
            //console.log(findmode(cm.getmode()) ? findmode(cm.getmode()) : text())
            return {
                effects: cm.languageConf.reconfigure(findmode(cm.getmode()) ? findmode(cm.getmode()) : text())
            };
        });
        //error preventer
        setTimeout(() => {
            cm.addExt(cm.languageConf.of(findmode(cm.getmode()) ? findmode(cm.getmode()) : text()));
            cm.addExt(langchange);
            cm.dispatch([]);
        }, 0);
    }
    require.addMod("@Fe2/LC", {
        ILC: main,
        langs
    });
})();