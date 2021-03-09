import path from "path";
import fs from "fs";
import glob from "glob";
import capitalize from "capitalize";
import camelcase from "camelcase";
import svgr from "@svgr/core";
import JSDOM from "jsdom";

function getViewBox(){
    return "0 0 24 24";
}


const files = glob.sync("src/icons/svg/*.svg");
const componentPath = path.join(process.cwd(), "src/icons");

/*
 * Get output file info
 */

const names = files.map(inputFileName => {
    const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "");
    const functionName = capitalize(camelcase(baseName), true);
    const outputComponentFileName = `${functionName}.tsx`;

    return {
        inputFileName,
        outputComponentFileName,
        functionName,
        baseName,
    };
});

/*
 * Template for icon Components ( tsx file )
 */

const componentTemplate = (
    { template },
    opts,
    { imports, interfaces, componentName, props, jsx, exports },
) => {

    const plugins = ['jsx'];

    if (opts.typescript) {
        plugins.push('typescript')
    }

    const typeScriptTpl = template.smart({ plugins })

    return typeScriptTpl.ast`
        import * as React from 'react';
        import Icon from "../components/Icon";
        import {Props} from '../components/Icon/index.d';
        
        export default class __BUILDER_ICON_NAME extends React.Component{
            render(){
                return (
                    ${jsx}
                )
            }
        }
    `;
};

/*
 * Template for icon Components types ( d.ts file )
 */

const tsTemplate = functionName => `
    import * as React from 'react';
    import {Props} from '../components/Icon/index.d';
    
    declare const ${functionName}: React.FC<Props>;
    export { ${functionName}, ${functionName} as default };
`;

/*
 * Template for d.ts header
 */

const TypeFileHeader = `declare module "@design-system/icons";\n\n`;

/*
 * Log output path
 */

console.log('+ Output icons to: ' + componentPath);

/*
 * Create all component tsx and d.ts files
 */

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
    const dom = await JSDOM.JSDOM.fromFile(inputFileName);
    const content = dom.window.document.querySelector("svg");

    /*
     * TSX Files
     */
    svgr.default(
        content.outerHTML,
        { svgAttributes: { viewBox: getViewBox(content.attributes) }, template:componentTemplate },
        { componentName: functionName },
    ).then(output => {
        fs.writeFileSync(
            path.join(componentPath, outputComponentFileName),
            output.replace(
                /<svg\b[^>]* viewBox="(\b[^"]*)"([\s\S]*?)>(.*)<\/svg>/g,
                `<Icon viewBox="$1" {...this.props}>$3</Icon>`
            ).replace('__BUILDER_ICON_NAME', functionName)
                .replace('React.Component', 'React.Component<Props, any>')
        );
    }).catch((err)=>{
        console.log('- Error processing icon: ' + err);
    });

    /*
     * D.TS Files
     */
    fs.writeFileSync(
        path.join(componentPath, `${outputComponentFileName.replace(".tsx", "")}.d.ts`),
        tsTemplate(functionName),
    );

});

/*
 * Create icons Index files
 */
const indexExports = names
    .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
    .join("");
fs.writeFileSync(
    path.join(componentPath, "index.ts"),
    names
        .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
        .join("")
);
fs.writeFileSync(
    path.join(componentPath, "index.d.ts"),
    TypeFileHeader +
    names
        .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
        .join(""),
);
