"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const i={title:"AutoGen Assistant: Interactively Explore Multi-Agent Workflows",authors:["victordibia","gagb","samershi"],tags:["AutoGen","UI","web","UX"]},s=void 0,r={permalink:"/autogen/blog/2023/12/01/AutoGenAssistant",source:"@site/blog/2023-12-01-AutoGenAssistant/index.mdx",title:"AutoGen Assistant: Interactively Explore Multi-Agent Workflows",description:"AutoGen Assistant solving a task with multiple agents that generate a pdf document with images.",date:"2023-12-01T00:00:00.000Z",formattedDate:"December 1, 2023",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"},{label:"UI",permalink:"/autogen/blog/tags/ui"},{label:"web",permalink:"/autogen/blog/tags/web"},{label:"UX",permalink:"/autogen/blog/tags/ux"}],readingTime:7.03,truncated:!1,authors:[{name:"Victor Dibia",title:"Principal RSDE at Microsoft Research",url:"https://github.com/victordibia",imageURL:"https://github.com/victordibia.png",key:"victordibia"},{name:"Gagan Bansal",title:"Senior Researcher at Microsoft Research",url:"https://www.linkedin.com/in/gagan-bansal/",imageURL:"https://github.com/gagb.png",key:"gagb"},{name:"Saleema Amershi",title:"Senior Principal Research Manager at Microsoft Research",url:"https://github.com/samershi",imageURL:"https://github.com/samershi.png",key:"samershi"}],nextItem:{title:"Agent AutoBuild - Automatically Building Multi-agent Systems",permalink:"/autogen/blog/2023/11/26/Agent-AutoBuild"}},l={authorsImageUrls:[void 0,void 0,void 0]},u=[{value:"TLDR",id:"tldr",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Getting Started with AutoGen Assistant",id:"getting-started-with-autogen-assistant",children:[{value:"Configuring an LLM Provider",id:"configuring-an-llm-provider",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"Running the Application",id:"running-the-application",children:[],level:3}],level:2},{value:"What Can You Do with the AutoGen Assistant?",id:"what-can-you-do-with-the-autogen-assistant",children:[],level:2},{value:"The AutoGen Assistant API",id:"the-autogen-assistant-api",children:[],level:2},{value:"Road Map and Next Steps",id:"road-map-and-next-steps",children:[],level:2},{value:"FAQs",id:"faqs",children:[],level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AutoGen Assistant solving a task with multiple agents that generate a pdf document with images.",src:n(3763).Z})),(0,o.kt)("p",{align:"center"},(0,o.kt)("em",null,"AutoGen Assistant solving a task with multiple agents that generate a pdf document.")),(0,o.kt)("h2",{id:"tldr"},"TLDR"),(0,o.kt)("p",null,"To help you rapidly prototype multi-agent solutions for your tasks, we are introducing AutoGen Assistant, an interface powered by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/autogen"},"AutoGen"),". It allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Declaratively define and modify agents and multi-agent workflows through a point and click, drag and drop interface (e.g., you can select the parameters of two agents that will communicate to solve your task)."),(0,o.kt)("li",{parentName:"ul"},"Use our UI to create chat sessions with the specified agents and view results (e.g., view chat history, generated files, and time taken)."),(0,o.kt)("li",{parentName:"ul"},"Explicitly add skills to your agents and accomplish more tasks."),(0,o.kt)("li",{parentName:"ul"},"Publish your sessions to a local gallery.")),(0,o.kt)("p",null,"AutoGen Assistant is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-assistant"},"open source"),", give it a try!"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The accelerating pace of technology has ushered us into an era where digital assistants (or agents) are becoming integral to our lives. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/autogen"},"AutoGen")," has emerged as a leading framework for orchestrating the power of agents. In the spirit of expanding this frontier and democratizing this capability, we are thrilled to introduce a new user-friendly interface: the ",(0,o.kt)("strong",{parentName:"p"},"AutoGen Assistant"),". Built upon the leading foundation of AutoGen and robust, modern web technologies like React."),(0,o.kt)("p",null,"With the AutoGen Assistant, users can rapidly create, manage, and interact with agents that can learn, adapt, and collaborate. As we release this interface into the open-source community, our ambition is not only to enhance productivity but to inspire a level of personalized interaction between humans and agents."),(0,o.kt)("h2",{id:"getting-started-with-autogen-assistant"},"Getting Started with AutoGen Assistant"),(0,o.kt)("p",null,"The following guide will help you get the AutoGen Assistant up and running on your system."),(0,o.kt)("h3",{id:"configuring-an-llm-provider"},"Configuring an LLM Provider"),(0,o.kt)("p",null,"Before you install AutoGen Assistant, you need access to a language model. You can get this set up by following the steps in the AutoGen documentation ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/FAQ#set-your-api-endpoints"},"here"),". Configure your environment with either ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_OPENAI_API_KEY"),"."),(0,o.kt)("p",null,"For example, in your terminal, you would set the API key like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY=<your_api_key>\n")),(0,o.kt)("p",null,"You can also specify the model directly in the agent's configuration as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_config = LLMConfig(\n    config_list=[{\n        "model": "gpt-4",\n        "api_key": "<azure_api_key>",\n        "a": "<azure apis base>",\n        "api_type": "azure",\n        "api_version": "2023-06-01-preview"\n    }],\n    temperature=0,\n)\n')),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install from PyPi")),(0,o.kt)("p",{parentName:"li"},"We recommend using a virtual environment (e.g., conda) to avoid conflicts with existing Python packages. With Python 3.10 or newer active in your virtual environment, use pip to install AutoGen Assistant:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install autogenra\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install from Source")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: This approach requires some familiarity with building interfaces in React.")),(0,o.kt)("p",{parentName:"li"},"If you prefer to install from source, ensure you have Python 3.10+ and Node.js (version above 14.15.0) installed. Here's how you get started:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone the AutoGen Assistant repository and install its Python dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -e .\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"samples/apps/autogen-assistant/frontend")," directory, install dependencies, and build the UI:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g gatsby-cli\nnpm install --global yarn\ncd frontend\nyarn install\nyarn build\n")))),(0,o.kt)("p",{parentName:"li"},"For Windows users, to build the frontend, you may need alternative commands provided in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-assistant"},"autogen assistant readme"),".\nFor Windows users, to build the frontend, you may need alternative commands provided in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-assistant"},"AutoGen Assistant readme"),"."))),(0,o.kt)("h3",{id:"running-the-application"},"Running the Application"),(0,o.kt)("p",null,"Once installed, run the web UI by entering the following in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"autogenra ui --port 8081\n")),(0,o.kt)("p",null,"This will start the application on the specified port. Open your web browser and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/")," to begin using AutoGen Assistant."),(0,o.kt)("p",null,"Now that you have AutoGen Assistant installed and running, you are ready to explore its capabilities, including defining and modifying agent workflows, interacting with agents and sessions, and expanding agent skills."),(0,o.kt)("h2",{id:"what-can-you-do-with-the-autogen-assistant"},"What Can You Do with the AutoGen Assistant?"),(0,o.kt)("p",null,"The AutoGen Assistant proposes some high-level concepts that help compose agents to solve tasks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Agent Workflow"),": An agent workflow is a specification of a set of agents that can work together to accomplish a task. The simplest version of this is a setup with two agents \u2013 a user proxy agent (that represents a user i.e. it compiles code and prints result) and an assistant that can address task requests (e.g., generating plans, writing code, evaluating responses, proposing error recovery steps, etc.). A more complex flow could be a group chat where even more agents work towards a solution."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Specify Agents.",src:n(9510).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session"),": A session refers to a period of continuous interaction or engagement with an agent workflow, typically characterized by a sequence of activities or operations aimed at achieving specific objectives. It includes the agent workflow configuration, the interactions between the user and the agents. A session can be \u201cpublished\u201d to a \u201cgallery\u201d."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Skills"),": Skills are functions (e.g., Python functions) that describe how to solve a task. In general, a good skill has a descriptive name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"generate_images"),"), extensive docstrings and good defaults (e.g., writing out files to disk for persistence and reuse). You can add new skills to the AutoGen Assistant via the provided UI. At inference time, these skills are made available to the assistant agent as they address your tasks."),(0,o.kt)("p",null,"AutoGen Assistant comes with 3 example skills: ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch_profile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"find_papers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"generate_images"),". Please feel free to review the repo to learn more about how they work."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View and add skills.",src:n(5864).Z})),(0,o.kt)("h2",{id:"the-autogen-assistant-api"},"The AutoGen Assistant API"),(0,o.kt)("p",null,"While the AutoGen Assistant is a web interface, it is powered by an underlying python API that is reusable and modular. Importantly, we have implemented an API where agent workflows can be declaratively specified (in JSON), loaded and run. An example of the current API is shown below. Please consult the repo for latest updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\nfrom autogenra import AutoGenWorkFlowManager, FlowConfig\n\n# load an agent specification in JSON\nagent_spec = json.load(open('agent_spec.json'))\n\n# Create an AutoGen Workflow Configuration from the agent specification\nagent_work_flow_config = FlowConfig(**agent_spec)\n\n# Create a Workflow from the configuration\nagent_work_flow = AutoGenWorkFlowManager(agent_work_flow_config)\n\n# Run the workflow on a task\ntask_query = \"What is the height of the Eiffel Tower?\"\nagent_work_flow.run(message=task_query)\n")),(0,o.kt)("h2",{id:"road-map-and-next-steps"},"Road Map and Next Steps"),(0,o.kt)("p",null,"As we continue to develop and refine the AutoGen Assistant, the road map below outlines an array of enhancements and new features planned for future releases. Here's what users can look forward to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Complex Agent Workflows"),": We're working on integrating support for more sophisticated agent workflows, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupChat"),", allowing for richer interaction between multiple agents or dynamic topologies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Improved User Experience"),": This includes features like streaming intermediate model output for real-time feedback, better summarization of agent responses, information on costs of each interaction. We will also invest in improving the workflow for composing and reusing agents. We will also explore support for more interactive human in the loop feedback to agents."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expansion of Agent Skills"),": We will work towards improving the workflow for authoring, composing and reusing agent skills."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Community Features"),": Facilitation of sharing and collaboration within the AutoGen Assistant user community is a key goal. We're exploring options for sharing sessions and results more easily among users and contributing to a shared repository of skills, agents, and agent workflows.")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How can I add more skills to the AutoGen Assistant?"),"\nA: You can extend the capabilities of your agents by adding new Python functions. The AutoGen Assistant interface also lets you directly paste functions that can be reused in the agent workflow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Where can I adjust the agent configurations and settings?"),"\nA: You can modify agent configurations directly from the UI or by editing the default configurations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"utils.py")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_default_agent_config()")," method (assuming you are building your own UI)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: If I want to reset the conversation with an agent, how do I go about it?"),"\nA: To reset your conversation history, you can delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"database.sqlite")," file. If you need to clear user-specific data, remove the relevant ",(0,o.kt)("inlineCode",{parentName:"p"},"autogenra/web/files/user/<user_id_md5hash>")," folder."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Is it possible to view the output and messages generated by the agents during interactions?"),"\nA: Yes, you can view the generated messages in the debug console of the web UI, providing insights into the agent interactions. Alternatively, you can inspect the ",(0,o.kt)("inlineCode",{parentName:"p"},"database.sqlite")," file for a comprehensive record of messages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Where can I find documentation and support for AutoGen Assistant?"),"\nA: Our GitHub repository hosts comprehensive documentation, including a detailed getting-started guide and an FAQ section. For additional support, you can raise issues on the repository or reach out to the community on forums and discussion boards associated with the project."))}c.isMDXComponent=!0},9510:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogenra_config-71e693f0b5bcaba9ae74264bcab116e9.png"},3763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogenra_home-a356d791ff7349732a7bcbf64b8927fb.png"},5864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogenra_skills-b33ad7956b4b277bbe43dcc66c5f162f.png"}}]);