"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4291],{83607:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return g}});var t=n(87462),s=n(63366),o=(n(15007),n(64983)),d=n(91515),m=["components"],l={},r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",a)}},p=r("InlineAlert"),i=r("CodeBlock"),c={_frontmatter:l},u=d.Z;function g(e){var a=e.components,n=(0,s.Z)(e,m);return(0,o.mdx)(u,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"assign-companies-to-a-shared-catalog"},"Assign companies to a shared catalog"),(0,o.mdx)("p",null,"A shared catalog must be assigned to one or more companies before it can be accessed by the company users."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Service name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"sharedCatalogCompanyManagementV1")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"REST endpoints:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"POST /V1/sharedCatalog/:sharedCatalogId/assignCompanies\nPOST /V1/sharedCatalog/:sharedCatalogId/unassignCompanies\nGET  /V1/sharedCatalog/:sharedCatalogId/companies\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Company parameters:")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although you can specify other parameters defined within a ",(0,o.mdx)("inlineCode",{parentName:"p"},"categories")," object, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," is the only one used to assign or unassign a category to a shared catalog."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"id")),(0,o.mdx)("td",{parentName:"tr",align:null},"The company ID number"),(0,o.mdx)("td",{parentName:"tr",align:null},"integer"),(0,o.mdx)("td",{parentName:"tr",align:null},"Required to assign or unassign a company to a shared catalog")))),(0,o.mdx)("h2",{id:"assign-companies-to-shared-catalog"},"Assign companies to shared catalog"),(0,o.mdx)("p",null,"This action works as an update. It does not replace companies that have already been assigned."),(0,o.mdx)("p",null,"If a specified company is already assigned to a different shared catalog, this request unassigns the company from the previous catalog and assigns to the new one."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/assignCompanies")),(0,o.mdx)(i,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "companies": [\n    {\n      "id": 1\n    },\n    {\n      "id": 2\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("h2",{id:"unassign-companies-from-a-shared-catalog"},"Unassign companies from a shared catalog"),(0,o.mdx)("p",null,"When you unassign a company from a custom catalog, the system automatically assigns this company to the public shared catalog. You cannot unassign a company from the public catalog."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/sharedCatalog/2/unassignCompanies")),(0,o.mdx)(i,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-1"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "companies": [\n    {\n      "id": 2\n    }\n  ]\n}\n')),(0,o.mdx)("h4",{id:"response-1"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,o.mdx)("h2",{id:"list-the-shared-catalog-companies"},"List the shared catalog companies"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," call returns an array of company IDs."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/sharedCatalog/2/companies")),(0,o.mdx)(i,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"payload-2"},"Payload"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,o.mdx)("h4",{id:"response-2"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"[\\"1\\",\\"2\\"]"\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-b-2-b-shared-cat-company-md-9517740ff7a3aa260657.js.map