"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},389:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Getting Started",l={unversionedId:"gpt-researcher/getting-started",id:"gpt-researcher/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 0 - Install Python 3.11 or later. See here for a step-by-step guide.",source:"@site/docs/gpt-researcher/getting-started.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/getting-started",permalink:"/docs/gpt-researcher/getting-started",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/gpt-researcher/introduction"},next:{title:"PIP Package",permalink:"/docs/gpt-researcher/pip-package"}},p=[{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Using Virtual Environment or Poetry",id:"using-virtual-environment-or-poetry",children:[{value:"Virtual Environment",id:"virtual-environment",children:[{value:"<em>Establishing the Virtual Environment with Activate/Deactivate configuration</em>",id:"establishing-the-virtual-environment-with-activatedeactivate-configuration",children:[],level:4},{value:"<em>Install the dependencies for a Virtual environment</em>",id:"install-the-dependencies-for-a-virtual-environment",children:[],level:4}],level:3},{value:"Poetry",id:"poetry",children:[{value:"<em>Establishing the Poetry dependencies and virtual environment with Poetry version <code>~1.7.1</code></em>",id:"establishing-the-poetry-dependencies-and-virtual-environment-with-poetry-version-171",children:[],level:4},{value:"<em>Activate the virtual environment associated with a Poetry project</em>",id:"activate-the-virtual-environment-associated-with-a-poetry-project",children:[],level:4}],level:3},{value:"<em>Run the app</em>",id:"run-the-app",children:[],level:3}],level:2},{value:"Try it with Docker",id:"try-it-with-docker",children:[],level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 0")," - Install Python 3.11 or later. ",(0,a.kt)("a",{parentName:"p",href:"https://www.tutorialsteacher.com/python/install-python"},"See here")," for a step-by-step guide.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Download the project and navigate to its directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/assafelovic/gpt-researcher.git\n$ cd gpt-researcher\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Set up API keys using two methods: exporting them directly or storing them in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file.")),(0,a.kt)("p",null,"For Linux/Temporary Windows Setup, use the export method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY={Your OpenAI API Key here}\nexport TAVILY_API_KEY={Your Tavily API Key here}\n")),(0,a.kt)("p",null,"For a more permanent setup, create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the current ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-researcher")," directory and input the env vars (without ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For LLM provider, we recommend ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://platform.openai.com/docs/guides/gpt"},"OpenAI GPT")),", but you can use any other LLM model (including open sources). To learn how to change the LLM model, please refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.gptr.dev/docs/gpt-researcher/llms"},"documentation")," page. "),(0,a.kt)("li",{parentName:"ul"},"For web search API, we recommend ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://app.tavily.com"},"Tavily Search API")),", but you can also refer to other search APIs of your choice by changing the search provider in config/config.py to ",(0,a.kt)("inlineCode",{parentName:"li"},"duckduckgo"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"google"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bing"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"serper"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"searx")," and more. Then add the corresponding env API key.")),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Install dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install -r requirements.txt\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Run the agent with FastAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ uvicorn main:app --reload\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Go to http://localhost:8000 on any browser and enjoy researching!")),(0,a.kt)("h2",{id:"using-virtual-environment-or-poetry"},"Using Virtual Environment or Poetry"),(0,a.kt)("p",null,"Select either based on your familiarity with each:"),(0,a.kt)("h3",{id:"virtual-environment"},"Virtual Environment"),(0,a.kt)("h4",{id:"establishing-the-virtual-environment-with-activatedeactivate-configuration"},(0,a.kt)("em",{parentName:"h4"},"Establishing the Virtual Environment with Activate/Deactivate configuration")),(0,a.kt)("p",null,"Create a virtual environment using the ",(0,a.kt)("inlineCode",{parentName:"p"},"venv")," package with the environment name ",(0,a.kt)("inlineCode",{parentName:"p"},"<your_name>"),", for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"env"),". Execute the following command in the PowerShell/CMD terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv env\n")),(0,a.kt)("p",null,"To activate the virtual environment, use the following activation script in PowerShell/CMD terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\\env\\Scripts\\activate\n")),(0,a.kt)("p",null,"To deactivate the virtual environment, run the following deactivation script in PowerShell/CMD terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,a.kt)("h4",{id:"install-the-dependencies-for-a-virtual-environment"},(0,a.kt)("em",{parentName:"h4"},"Install the dependencies for a Virtual environment")),(0,a.kt)("p",null,"After activating the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," environment, install dependencies using the ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install -r requirements.txt\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"poetry"},"Poetry"),(0,a.kt)("h4",{id:"establishing-the-poetry-dependencies-and-virtual-environment-with-poetry-version-171"},(0,a.kt)("em",{parentName:"h4"},"Establishing the Poetry dependencies and virtual environment with Poetry version ",(0,a.kt)("inlineCode",{parentName:"em"},"~1.7.1"))),(0,a.kt)("p",null,"Install project dependencies and simultaneously create a virtual environment for the specified project. By executing this command, Poetry reads the project's \"pyproject.toml\" file to determine the required dependencies and their versions, ensuring a consistent and isolated development environment. The virtual environment allows for a clean separation of project-specific dependencies, preventing conflicts with system-wide packages and enabling more straightforward dependency management throughout the project's lifecycle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install\n")),(0,a.kt)("h4",{id:"activate-the-virtual-environment-associated-with-a-poetry-project"},(0,a.kt)("em",{parentName:"h4"},"Activate the virtual environment associated with a Poetry project")),(0,a.kt)("p",null,"By running this command, the user enters a shell session within the isolated environment associated with the project, providing a dedicated space for development and execution. This virtual environment ensures that the project dependencies are encapsulated, avoiding conflicts with system-wide packages. Activating the Poetry shell is essential for seamlessly working on a project, as it ensures that the correct versions of dependencies are used and provides a controlled environment conducive to efficient development and testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry shell\n")),(0,a.kt)("h3",{id:"run-the-app"},(0,a.kt)("em",{parentName:"h3"},"Run the app")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Launch the FastAPI application agent on a ",(0,a.kt)("em",{parentName:"p"},"Virtual Environment or Poetry")," setup by executing the following command:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m uvicorn main:app --reload\n")),(0,a.kt)("p",{parentName:"blockquote"},"Visit http://localhost:8000 in any web browser and explore your research!")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"try-it-with-docker"},"Try it with Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Install Docker")),(0,a.kt)("p",null,"Follow instructions at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Create .env file with your OpenAI Key or simply export it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export OPENAI_API_KEY={Your API Key here}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Run the application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Step 4")," - Go to http://localhost:8000 on any browser and enjoy researching!")))}c.isMDXComponent=!0}}]);