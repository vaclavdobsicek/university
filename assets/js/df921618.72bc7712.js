"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[2658],{9710:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=i(5893),o=i(1151);const n={sidebar_position:2,title:"Rossum in a Document Workflow",slug:"rossum-in-a-document-pipeline",description:"Learn more about different possibilities for a document workflow in Rossum and how it can fit in your integration."},a=void 0,r={id:"guides/rossum-in-a-document-pipeline",title:"Rossum in a Document Workflow",description:"Learn more about different possibilities for a document workflow in Rossum and how it can fit in your integration.",source:"@site/docs/guides/rossum-in-a-document-pipeline.md",sourceDirName:"guides",slug:"/guides/rossum-in-a-document-pipeline",permalink:"/cookbook/docs/guides/rossum-in-a-document-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/guides/rossum-in-a-document-pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Rossum in a Document Workflow",slug:"rossum-in-a-document-pipeline",description:"Learn more about different possibilities for a document workflow in Rossum and how it can fit in your integration."},sidebar:"guidesSidebar",previous:{title:"Getting Started with Rossum",permalink:"/cookbook/docs/guides/getting-started"},next:{title:"Integrate Rossum with Zapier",permalink:"/cookbook/docs/guides/integrate-rossum-with-zapier/"}},c={},d=[{value:"One-by-one Processing",id:"one-by-one-processing",level:2},{value:"Batch Processing",id:"batch-processing",level:2},{value:"Push Notifications",id:"push-notifications",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["When deciding ",(0,s.jsx)(t.a,{href:"https://rossum.ai/blog/elis-integration-three-ways/",children:"how to integrate Rossum"}),", an important question is how to fit Rossum into the flow of documents to be processed. When and how to import documents, have a human review them and then export them to downstream systems? Do it one by one or in a batch?"]}),"\n",(0,s.jsx)(t.p,{children:"The matter is pretty simple in a manual integration scenario \u2013 documents are coming into Rossum ad hoc, processed at the operator's leisure (typically en masse when enough of them accumulate) and then the captured data is exported from each queue, typically corresponding to a certain time range."}),"\n",(0,s.jsxs)(t.p,{children:["However, in a programmatic scenario, you have a more explicit choice \u2013 to think either in terms of ",(0,s.jsx)(t.em,{children:"documents"}),", or to think in terms of a ",(0,s.jsx)(t.em,{children:"document flow"}),". Let's take a more detailed look."]}),"\n",(0,s.jsx)(t.h2,{id:"one-by-one-processing",children:"One-by-one Processing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"One-by-one processing",src:i(6418).Z+"",width:"1562",height:"482"})}),"\n",(0,s.jsxs)(t.p,{children:["The first thought when implementing Rossum might be to process documents one by one. Each document is tracked individually: uploaded, its ",(0,s.jsx)(t.em,{children:"id"})," is acquired, monitored for processing progress by periodical polling, then the data is downloaded and taken for further processing."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"There is no single API endpoint to process a document. The API is asynchronous, therefore you do need to use one call to upload the document, then repeatedly refresh the status, and ultimately download the captured data by a separate final call."})}),"\n",(0,s.jsxs)(t.p,{children:["This approach is certainly possible, especially with smaller volumes. This is the model presented for example by the ",(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/rossumai/elisctl",children:"elisctl"})," document extract"]})," command. Readers fluent in Python may even ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/elisctl/blob/master/elisctl/document/extract_data.py",children:"look at the actual code"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Elisctl",src:i(1265).Z+"",width:"1641",height:"792"})}),"\n",(0,s.jsx)(t.p,{children:"However, this approach is a poor fit in many scenarios. First, it does not serve well with non-trivial volumes. Rossum takes a while to process every document (though we aim to process 90% of documents under 5 minutes in typical circumstances) and the engine optimized for highly parallel processing \u2013 loading and simultaneously processing a large volume of documents. Processing documents one by one will therefore be simply inefficient. And when multiple documents are individually tracked in parallel, that quickly puts a big strain on resources."}),"\n",(0,s.jsx)(t.h2,{id:"batch-processing",children:"Batch Processing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Batch processing",src:i(3045).Z+"",width:"1520",height:"462"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's think bigger \u2013 rather than obsessing about documents as individual units, consider the continuous flow of documents. This is a perfect fit for Rossum's ",(0,s.jsx)(t.em,{children:"queue"})," concept. Every document is imported to a queue, and all captured data is exported from a queue."]}),"\n",(0,s.jsxs)(t.p,{children:["From this perspective, tracking every nuance about a single document isn't so important. What is important is that documents safely get into a queue, and then that whichever captured data is ready is read back from the queue. The set of data fields is still associated with the original file, so nothing gets mixed up. But the key question asked changes from ",(0,s.jsx)(t.em,{children:"what is the status of my document"})," to ",(0,s.jsx)(t.em,{children:"what data is ready for further processing"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This is actually the easiest Rossum integration to implement. Simply import documents at your leisure (either individually as they arrive, or gathered in batches) and let your users operate the web interface at their convenience. Then, at a periodical interval, captured data are exported from the queue and batch-processed by the downstream system."}),"\n",(0,s.jsxs)(t.p,{children:["This really gives your process a regular rhythm and is the ideal fit also for RPA scenarios. See our ",(0,s.jsx)(t.a,{href:"https://rossum.ai/files/Rossum_Whitepaper_PartnerIntegration.pdf",children:"integration whitepaper"})," for a practical example of an RPA workflow built around this scheme. And Computer Science connoisseurs might recognize the ",(0,s.jsx)(t.em,{children:"source \u2013 sink"})," or ",(0,s.jsx)(t.em,{children:"scatter \u2013 gather"})," paradigms in this viewpoint."]}),"\n",(0,s.jsx)(t.h2,{id:"push-notifications",children:"Push Notifications"}),"\n",(0,s.jsxs)(t.p,{children:["Now, as you get further into integrating Rossum using its extension mechanism, a new way opens that clears all the downsides of the individual document view \u2013 push notifications. Documents may be imported at your leisure, but rather than actively tracking a status of each document on the downstream side, Rossum may send push notifications (through its ",(0,s.jsx)(t.a,{href:"https://api.elis.rossum.ai/docs/#webhook-extension",children:"webhook API"}),") with final set of captured data for every individual documents. This can be then actioned upon by importing the data to a downstream system right away, for example."]}),"\n",(0,s.jsxs)(t.p,{children:["A similar case is when using the ",(0,s.jsx)(t.a,{href:"https://api.elis.rossum.ai/docs/#embedded-mode",children:"embedded mode"})," where the web app is not used as a whole. Instead, just the validation interface is invoked on individual documents from an external application. The best of both worlds, in this case, is to monitor the queue as a whole to get information about which documents are ready (or ",(0,s.jsx)(t.a,{href:"https://api.elis.rossum.ai/docs/#webhook-extension",children:"use the status change webhook"}),") so that your users know they can open them in Rossum already."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3045:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/batch-processing-c7f8c2e454a65c51315dd07d0fcd20d7.png"},1265:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/elisctl-b22e8aa9b9dd9567d2cfe1ea8cae5df1.gif"},6418:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/one-by-one-processing-4c7d7f4a0a47f103fd844ee5e448b36e.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var s=i(7294);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);