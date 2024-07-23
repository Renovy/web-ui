// import { ComponentPreview } from "@/components";
// import { readdirSync, readFileSync } from "fs";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import rehypePrettyCode from "rehype-pretty-code";
// import oneDarkPro from "shiki/themes/one-dark-pro.mjs";

// const Pre = ({ children, ...props }: any) => {
//   return (
//     <pre {...props} data-theme="one-dark-pro">
//       {children}
//     </pre>
//   );
// };

// const Code = ({ children, ...props }: any) => {
//   return (
//     <code {...props} className="a" data-theme="one-dark-pro">
//       {children}
//     </code>
//   );
// };

export async function generateStaticParams() {
  return [{ component: "Button" }];
  // const components = readdirSync("./src/app/components", { withFileTypes: true }).filter((item) => !item.isDirectory());

  // return components.map(({ name }) => ({ component: name.replace(".mdx", "") }));
}

export default async function Page() {
  return <div>Hello there!</div>;
  // const markdown = readFileSync(`./src/app/components/${component}.mdx`);

  // return (
  //   <MDXRemote
  //     source={markdown}
  //     options={{
  //       mdxOptions: {
  //         rehypePlugins: [
  //           [
  //             rehypePrettyCode,
  //             {
  //               theme: oneDarkPro,
  //             },
  //           ],
  //         ],
  //       },
  //     }}
  //     components={{ ComponentPreview, pre: Pre, code: Code }}
  //   />
  // );
}
