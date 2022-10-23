(() => {
    const {createTheme} = require("thememirror");
    const {tags} = require("@lezer/highlight");
    let t = tags
    //console.log(t)
    const thme = createTheme({
	variant: 'dark',
	settings: {
		background: '#090a0f',
		foreground: '#878eac',
		caret: '#4693ff',
		selection: '#82cdc3',
		lineHighlight: '#151720',
		gutterBackground: '#090a0f',
		gutterForeground: '#35394b',
	},
	styles: [
		{
			tag: t.comment,
			color: '#3d4258',
		},
		{
			tag: t.definition(t.variableName),
			color: '#f1dba2',
		},
        
		{
			tag: [t.string, t.special(t.brace)],
			color: '#acdca8',
		},
		{
			tag: t.number,
			color: '#789fba',
		},
		{
			tag: t.bool,
			color: '#a497dc',
		},
		{
			tag: t.null,
			color: '#ddb05e',
		},
		{
			tag: t.keyword,
			color: '#d46c6c',
		},
        
		{
			tag: t.operator,
			color: '#cc6869',
		},
        
        {
            tag: t.derefOperator,
            color:"#8E95B4"
            //color:"#C76666"
            //color:"white"
        },
        {
            tag:t.constant(t.definitionOperator),
            tag:"white"
        },
        {
            tag: t.regexp,
            color:"#C76666"
        },
        {
          tag: t.name,
            color: '#7DBED2',
            //color:"blue"
        },
		{
			tag: t.className,
			color: '#f5dfa5',
		},
		{
			tag: t.definition(t.typeName),
			color: '#0961ff',
		},
		{
			tag: t.typeName,
			color: '#f16166',
		},
		{
			tag: t.angleBracket,
			color: '#ff5370',
		},
		{
			tag: t.tagName,
			color: '#fd526f',
		},
		{
			tag: t.attributeName,
			color: '#bb8adc',
		},
        
        {
            tag: t.list,
            color:"#C1C1C1"
        },
        {
            tag:t.link,
            color:"#B0ADAD",
            textDecoration:"underline rgba(var(--bs-primary-rgb),0.575) wavy",
            "-webkit-text-decoration":"underline rgba(var(--bs-primary-rgb),0.575) wavy"
            
        },
        {
            tag: t.url,
            //backgroundColor:"rgba(var(--bs-secondary-rgb),0.85)",
            color:"var(--bs-primary)",
            //padding:"2px",
            //textDecoration:"none",
            /*borderRadius:"var(--bs-border-radius)",
            borderColor:"rgba(var(--bs-primary-rgb),0.575)",
            borderStyle:"solid",
            borderWidth:"1px"*/
        },
        {
            tag: t.strong,
            fontWeight:"bolder",
            color:"#C1BECC"
        },
        {
            tag: t.emphasis,
            fontStyle:"italic",
            color:"#B6AAE2"
        },
        {
            tag: t.heading,
            fontWeight:"bold",
            textDecoration:"underline",
            color:"#D3D3D3"
        },
        
	],
});
    require.addMod("@Fe2/theme",{thme})
})();